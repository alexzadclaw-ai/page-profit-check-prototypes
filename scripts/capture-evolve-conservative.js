const { chromium } = require('playwright');
(async() => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });
  try {
    await page.goto('https://napervillepersonaltrainer.com/', { waitUntil: 'networkidle', timeout: 45000 });
    await page.screenshot({ path: '/home/claw/.openclaw/workspace/page-profit-check-prototypes/screenshots/2026-04-27-2311-conservative-three/evolve-personal-trainer-target.png', fullPage: true });
    console.log('target ok');
  } catch (e) {
    console.error('target capture failed:', e.message);
  }
  try {
    await page.goto('http://127.0.0.1:8124/prototypes/2026-04-27-2311-conservative-three/evolve-personal-trainer/index.html', { waitUntil: 'networkidle', timeout: 15000 });
    await page.screenshot({ path: '/home/claw/.openclaw/workspace/page-profit-check-prototypes/screenshots/2026-04-27-2311-conservative-three/evolve-personal-trainer-prototype.png', fullPage: true });
    console.log('prototype ok');
  } catch (e) {
    console.error('prototype capture failed:', e.message);
  }
  await browser.close();
})();
