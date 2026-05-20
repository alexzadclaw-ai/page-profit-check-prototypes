const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 1 });
  const html = fs.readFileSync('prototypes/2026-05-20-0200-nightly/a1-handyman-service-nv/index.html', 'utf8');
  await page.setContent(html, { waitUntil: 'load' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/2026-05-20-0200-nightly/a1-handyman-service-nv-prototype.png', fullPage: true });
  const info = await page.evaluate(() => ({ title: document.title, h1: document.querySelector('h1')?.innerText, scrollHeight: document.documentElement.scrollHeight }));
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
