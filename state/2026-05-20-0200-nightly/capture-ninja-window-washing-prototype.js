const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 1 });
  const file = 'http://127.0.0.1:8787/prototypes/2026-05-20-0200-nightly/ninja-window-washing/index.html';
  await page.goto(file, { waitUntil: 'networkidle', timeout: 90000 });
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y <= h + 1400; y += 600) {
    await page.evaluate(y => scrollTo(0, y), y);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/2026-05-20-0200-nightly/ninja-window-washing-prototype.png', fullPage: true });
  console.log(JSON.stringify({ file, height: h }, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
