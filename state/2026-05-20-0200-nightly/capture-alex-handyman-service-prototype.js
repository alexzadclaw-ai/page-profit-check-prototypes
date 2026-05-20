const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:8877/prototypes/2026-05-20-0200-nightly/alex-handyman-service/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(() => {});
  for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, 900); await page.waitForTimeout(250); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'screenshots/2026-05-20-0200-nightly/alex-handyman-service-prototype.png', fullPage: true, animations: 'disabled' });
  await browser.close();
})();
