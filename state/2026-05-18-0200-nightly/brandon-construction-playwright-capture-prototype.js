const path = require('path');
const fs = require('fs');
const { chromium } = require('@playwright/test');
(async () => {
  const html = path.resolve('prototypes/2026-05-18-0200-nightly/brandon-construction/index.html');
  const out = 'screenshots/2026-05-18-0200-nightly/brandon-construction-prototype.png';
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1700 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.setDefaultTimeout(60000);
  await page.setContent(fs.readFileSync(html, 'utf8'), { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
  await page.evaluate(async () => {
    await Promise.all(Array.from(document.images).map(img => img.complete ? Promise.resolve() : new Promise(resolve => { img.addEventListener('load', resolve, {once:true}); img.addEventListener('error', resolve, {once:true}); })));
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: out, fullPage: true });
  console.log(JSON.stringify({out, size: fs.statSync(out).size}, null, 2));
  await browser.close();
})();
