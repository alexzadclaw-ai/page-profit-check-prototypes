const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const http = require('http');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml'};
(async () => {
  const repo = path.resolve(__dirname, '../..');
  const htmlRel = '/prototypes/2026-05-17-0200-nightly/loper-painting/index.html';
  const out = path.resolve(repo, 'screenshots/2026-05-17-0200-nightly/loper-painting-prototype.png');
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    let file = path.resolve(repo, '.' + decodeURIComponent(url.pathname));
    if (!file.startsWith(repo)) { res.writeHead(403); res.end('Forbidden'); return; }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end('Not found'); return; }
      res.writeHead(200, {'content-type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream'});
      res.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', err => errors.push(String(err)));
  page.on('response', res => { if (res.status() >= 400) errors.push(`${res.status()} ${res.url()}`); });
  await page.goto(`http://127.0.0.1:${port}${htmlRel}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(1500);
  await page.screenshot({ path: out, fullPage: true, animations: 'disabled' });
  const qa = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector('h1')?.innerText || '',
    height: document.documentElement.scrollHeight,
    links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
    images: [...document.images].map(img => ({alt: img.alt, src: img.currentSrc || img.src, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight, renderedWidth: Math.round(img.getBoundingClientRect().width), renderedHeight: Math.round(img.getBoundingClientRect().height)}))
  }));
  fs.writeFileSync(path.resolve(__dirname, 'loper-painting-prototype-qa.json'), JSON.stringify({ ok: true, out, url: `http://127.0.0.1:${port}${htmlRel}`, errors, qa }, null, 2));
  await browser.close();
  server.close();
  console.log(JSON.stringify({ ok: true, out, errors: errors.slice(0, 20), height: qa.height, images: qa.images.length }, null, 2));
})();
