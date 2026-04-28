const { chromium } = require('playwright');

(async() => {
  const browser = await chromium.launch({
    executablePath: '/snap/bin/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage({ viewport: { width: 1365, height: 768 } });
  await page.goto('http://127.0.0.1:8766/prototypes/2026-04-27-2311-conservative-three/fitly-llc/index.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/home/claw/.openclaw/workspace/page-profit-check-prototypes/screenshots/2026-04-27-2311-conservative-three/fitly-llc-prototype.png', fullPage: true });
  await browser.close();
})();
