const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport: { width: 1365, height: 1700 }, deviceScaleFactor: 1 });
  const url = process.env.PROTOTYPE_URL || 'http://127.0.0.1:8765/prototypes/2026-05-19-0200-nightly/finishing-touch-handyman/index.html';
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  try { await page.waitForLoadState('networkidle', { timeout: 30000 }); } catch(e) {}
  await page.waitForTimeout(3000);
  const h = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= h; y += 650) { await page.evaluate(y => scrollTo(0, y), y); await page.waitForTimeout(250); }
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/2026-05-19-0200-nightly/finishing-touch-handyman-prototype.png', fullPage: true });
  await browser.close();
})();
