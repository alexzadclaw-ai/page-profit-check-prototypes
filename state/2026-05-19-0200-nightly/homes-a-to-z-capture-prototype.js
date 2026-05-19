const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('playwright');

const root = '/home/claw/.openclaw/workspace/page-profit-check-prototypes';
const rel = 'prototypes/2026-05-19-0200-nightly/homes-a-to-z/index.html';
const out = path.join(root, 'screenshots/2026-05-19-0200-nightly/homes-a-to-z-prototype.png');

const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'application/javascript', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.svg':'image/svg+xml' };
const server = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://127.0.0.1');
  let file = path.join(root, decodeURIComponent(u.pathname));
  if (!file.startsWith(root)) { res.writeHead(403); res.end('forbidden'); return; }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(buf);
  });
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 }, deviceScaleFactor: 1 });
  await page.goto(`http://127.0.0.1:${port}/${rel}`, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(() => {});
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    await Promise.all(imgs.map(img => img.complete ? null : new Promise(resolve => { img.onload = img.onerror = resolve; })));
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
  server.close();
})();
