import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const output = resolve(root, '_site');
if (output !== join(root, '_site')) throw new Error('Unexpected output directory');
const categories = JSON.parse(readFileSync(join(root, 'articles.json'), 'utf8'));
const template = readFileSync(join(root, 'index.html'), 'utf8');
const domain = readFileSync(join(root, 'CNAME'), 'utf8').trim();
const releaseNotes = JSON.parse(readFileSync(join(root, 'release-notes.json'), 'utf8'));
if (!Array.isArray(releaseNotes) || releaseNotes.some(note => !note || !note.date || !note.type || !note.module || !note.change)) {
  throw new Error('release-notes.json must be a list of entries with date, type, module, and change');
}
const siteUrl = `${(process.env.SITE_URL || `https://${domain}`).replace(/\/+$/, '')}/`;
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));
const href = article => `articles/${article.slug}/`;
const topicHref = category => `topics/${category.slug}/`;
const articleAt = (ci, ai) => categories[ci - 1]?.arts[ai - 1];
const canonicalMarkdown = md => md.replace(/\]\(#a-(\d+)-(\d+)\)/g, (link, ci, ai) => {
  const article = articleAt(+ci, +ai);
  return article ? `](${href(article)})` : link;
});
const description = md => md.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, ' ')
  .replace(/[#*_`>|\\]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 155);
const sanitizeOptions = {
  allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ['src', 'alt', 'title', 'width', 'height'],
    th: ['colspan', 'rowspan', 'scope'],
    td: ['colspan', 'rowspan']
  }
};
const renderMarkdown = md => sanitizeHtml(marked.parse(canonicalMarkdown(md), { gfm: true }), sanitizeOptions);

if (existsSync(output)) rmSync(output, { recursive: true, force: true });
mkdirSync(output);
for (const name of ['images', 'forms']) cpSync(join(root, name), join(output, name), { recursive: true });
cpSync(join(root, 'articles', 'images'), join(output, 'articles', 'images'), { recursive: true });
for (const name of ['release-notes.json', '.nojekyll', 'favicon.svg', 'favicon-32.png', 'apple-touch-icon.png']) cpSync(join(root, name), join(output, name));
writeFileSync(join(output, 'articles.json'), readFileSync(join(root, 'articles.json')));

const urls = [siteUrl];
const pageHtml = ({ path, title, summary, content, depth = 0, noindex = false }) => {
  const url = siteUrl + path;
  const metadata = `<title>${escapeHtml(title)}</title>\n<meta name="description" content="${escapeHtml(summary)}">\n${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${escapeHtml(url)}">`}`;
  return template
    .replace('<meta name="viewport" content="width=device-width, initial-scale=1">', `<meta name="viewport" content="width=device-width, initial-scale=1">${depth ? `\n<base href="${'../'.repeat(depth)}">` : ''}`)
    .replace('<title>Autometrik Help Center</title>', metadata)
    .replace('<header class="hero" id="hero">', `<header class="hero${depth ? ' compact' : ''}" id="hero">`)
    .replace('<section id="view" aria-live="polite"></section>', `<section id="view" aria-live="polite">${content}</section>`);
};
const writePage = (path, page) => {
  const directory = join(output, path);
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, 'index.html'), page);
};

const homeTopics = categories.map(category => `<a class="topic" href="${topicHref(category)}"><div><h3>${escapeHtml(category.name)}</h3><span class="count">${category.arts.length} article${category.arts.length === 1 ? '' : 's'}</span></div></a>`).join('');
writePage('', pageHtml({ path: '', title: 'Autometrik Help Center', summary: 'Browse Autometrik help articles by topic, search the knowledge base, and read release notes.', content: `<h2 class="sec-title">Help Topics</h2><div class="topics">${homeTopics}</div>` }));

for (const category of categories) {
  const path = topicHref(category);
  const articles = category.arts.map(article => `<li><a href="${href(article)}">${escapeHtml(article.t)}</a></li>`).join('');
  const content = `<div class="crumbs"><a href="./">Help Topics</a><span>›</span><span>${escapeHtml(category.name)}</span></div><h2 class="sec-title">${escapeHtml(category.name)}</h2><ul class="list">${articles}</ul>`;
  writePage(path, pageHtml({ path, title: `${category.name} | Autometrik Help Center`, summary: `Browse ${category.arts.length} Autometrik help articles about ${category.name}.`, content, depth: 2 }));
  urls.push(siteUrl + path);
}

let articleCount = 0;
for (const category of categories) {
  for (const [ai, article] of category.arts.entries()) {
    const url = siteUrl + href(article);
    const previous = category.arts[ai - 1];
    const next = category.arts[ai + 1];
    const content = `<article class="article">
      <div class="crumbs"><a href="./">Help Topics</a><span>›</span><a href="${topicHref(category)}">${escapeHtml(category.name)}</a></div>
      <h1>${escapeHtml(article.t)}</h1><div class="meta">${escapeHtml(category.name)} · Article ${ai + 1} of ${category.arts.length}</div>
      <div class="prose">${renderMarkdown(article.md)}</div>
      <div class="pager">${previous ? `<a href="${href(previous)}"><small>← Previous</small>${escapeHtml(previous.t)}</a>` : ''}${next ? `<a class="next" href="${href(next)}"><small>Next →</small>${escapeHtml(next.t)}</a>` : ''}</div>
    </article>`;
    writePage(href(article), pageHtml({ path: href(article), title: `${article.t} | Autometrik Help Center`, summary: description(article.md), content, depth: 2 }));
    urls.push(url);
    articleCount++;
  }
}
const monthName = ym => new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${ym}-01T00:00:00Z`));
const dayName = date => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
const notes = releaseNotes.filter(note => /^\d{4}-(0[1-9]|1[0-2])-\d{2}$/.test(note.date)).sort((a, b) => b.date.localeCompare(a.date));
const groups = new Map();
for (const note of notes) {
  const ym = note.date.slice(0, 7);
  if (!groups.has(ym)) groups.set(ym, []);
  groups.get(ym).push(note);
}
const badgeClass = { 'New Feature': 'new', Enhancement: 'enh', 'Bug Fix': 'fix' };
const releaseContent = `<div class="crumbs"><a href="./">Help Topics</a><span>›</span><span>Release Notes</span></div><h2 class="sec-title">Release Notes</h2><p class="rn-intro">Every change released to Autometrik shops, newest first.</p>${[...groups].map(([ym, items]) => `<section class="rn-group" id="rn-${ym}"><h3 class="rn-month">${monthName(ym)}</h3><ul class="rn-list">${items.map(note => `<li class="rn-item"><time class="rn-date" datetime="${note.date}">${dayName(note.date)}</time><span class="rn-badge ${badgeClass[note.type] || 'other'}">${escapeHtml(note.type)}</span><div class="rn-body"><span class="rn-module">${escapeHtml(note.module)}</span><span class="rn-change">${escapeHtml(note.change)}</span></div></li>`).join('')}</ul></section>`).join('')}`;
writePage('release-notes/', pageHtml({ path: 'release-notes/', title: 'Release Notes | Autometrik Help Center', summary: 'See the latest Autometrik features, enhancements, and fixes.', content: releaseContent, depth: 1 }));
urls.push(siteUrl + 'release-notes/');
const searchContent = '<div class="crumbs"><a href="./">Help Topics</a><span>›</span><span>Search</span></div><h2 class="sec-title">Search</h2><p class="empty">Enter a word or phrase in the search box above.</p>';
writePage('search/', pageHtml({ path: 'search/', title: 'Search | Autometrik Help Center', summary: 'Search the Autometrik knowledge base.', content: searchContent, depth: 1, noindex: true }));
writeFileSync(join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${escapeHtml(url)}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n`);
console.log(`Built _site: home, ${categories.length} topics, ${articleCount} articles, release notes, search, and sitemap.xml`);
