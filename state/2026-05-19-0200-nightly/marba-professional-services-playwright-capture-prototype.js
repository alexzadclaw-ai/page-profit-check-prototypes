const path = require('path');
const { chromium } = require('@playwright/test');
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
(async () => {
  const ROOT = '/home/claw/.openclaw/workspace/page-profit-check-prototypes';
  const html = path.join(ROOT, 'prototypes/2026-05-19-0200-nightly/marba-professional-services/index.html');
  const out = path.join(ROOT, 'screenshots/2026-05-19-0200-nightly/marba-professional-services-prototype.png');
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1365, height: 1400 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto('file://' + html, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(()=>{});
  await sleep(2500);
  const fullHeight = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= fullHeight + 1200; y += 500) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await sleep(180);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(500);
  await page.screenshot({ path: out, fullPage: true });
  await context.close();
  await browser.close();
})();
