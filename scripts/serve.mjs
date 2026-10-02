import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const types = { '.html': 'text/html', '.json': 'application/json', '.png': 'image/png', '.md': 'text/markdown' };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const path = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (path !== root && !path.startsWith(root + sep)) throw new Error('Invalid path');
    if (!(await stat(path)).isFile()) throw new Error('Not a file');
    response.writeHead(200, { 'Content-Type': `${types[extname(path)] || 'application/octet-stream'}; charset=utf-8` });
    response.end(await readFile(path));
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});
server.listen(8000, '127.0.0.1', () => console.log('Open http://127.0.0.1:8000'));
