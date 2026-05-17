const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const root = process.cwd();
  const url = 'http://127.0.0.1:8778/prototypes/2026-05-17-0200-nightly/angels-tree-service/index.html';
  const shot = path.join(root, 'screenshots/2026-05-17-0200-nightly/angels-tree-service-prototype.png');
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 25000 }).catch(() => {});
  await page.waitForTimeout(1800);
  await page.screenshot({ path: shot, fullPage: true });
  const metrics = await page.evaluate(() => ({ title: document.title, h: document.documentElement.scrollHeight, text: document.body.innerText.slice(0, 500) }));
  await browser.close();
  console.log(JSON.stringify({ ok: true, shot, metrics }, null, 2));
})();
