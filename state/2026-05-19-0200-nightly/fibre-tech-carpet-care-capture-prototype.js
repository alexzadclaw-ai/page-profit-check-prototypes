const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const root = process.cwd();
const html = path.resolve(root, 'prototypes/2026-05-19-0200-nightly/fibre-tech-carpet-care/index.html');
const out = path.resolve(root, 'screenshots/2026-05-19-0200-nightly/fibre-tech-carpet-care-prototype.png');
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1365, height: 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto('file://' + html, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(2500);
  const total = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= total + 500; y += 600) { await page.evaluate(yy => window.scrollTo(0, yy), y); await sleep(100); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(800);
  await page.screenshot({ path: out, fullPage: true, animations: 'disabled' });
  await browser.close();
  console.log(JSON.stringify({ out, size: fs.statSync(out).size }, null, 2));
})();
