import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = fileURLToPath(new URL('..', import.meta.url));
const articleRoot = join(siteRoot, 'articles');
const categories = readdirSync(articleRoot, { withFileTypes: true })
  .filter(entry => entry.isDirectory() && /^\d+ - /.test(entry.name))
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(category => {
    const directory = join(articleRoot, category.name);
    const arts = readdirSync(directory)
      .filter(name => name.endsWith('.md'))
      .sort((a, b) => a.localeCompare(b))
      .map(name => {
        const source = readFileSync(join(directory, name), 'utf8').replace(/^\uFEFF/, '');
        const match = source.match(/^#\s+(.+?)\s*(?:\r?\n|$)/);
        if (!match) throw new Error(`${category.name}/${name}: first line must be an article title starting with # `);
        const title = match[1];
        // The viewer supplies the H1. Image URLs are relative to index.html after rendering.
        const markdown = source.slice(match[0].length)
          .replace(/^\s*\r?\n/, '')
          .replaceAll('../images/', 'articles/images/');
        for (const [, image] of markdown.matchAll(/!\[[^\]]*\]\(articles\/images\/([^\s)]+)\)/g)) {
          if (!existsSync(join(articleRoot, 'images', image))) {
            throw new Error(`${category.name}/${name}: missing image ${image}`);
          }
        }
        return { t: title, md: markdown };
      });
    if (!arts.length) throw new Error(`${category.name}: no Markdown articles found`);
    return { name: category.name.replace(/^\d+ - /, ''), arts };
  });

if (!categories.length) throw new Error('No numbered article category folders found');
writeFileSync(join(siteRoot, 'articles.json'), JSON.stringify(categories) + '\n', 'utf8');
console.log(`Built articles.json: ${categories.length} categories, ${categories.reduce((n, c) => n + c.arts.length, 0)} articles`);
