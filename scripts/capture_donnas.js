const { chromium } = require('playwright');

const delay = ms => new Promise(r => setTimeout(r, ms));

async function capture() {
  const browser = await chromium.launch({
    executablePath: '/snap/bin/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  const targetPath = '/home/claw/.openclaw/workspace/page-profit-check-prototypes/screenshots/2026-04-27-initial-three/donnas-home-fitness-target.png';
  const protoPath = '/home/claw/.openclaw/workspace/page-profit-check-prototypes/screenshots/2026-04-27-initial-three/donnas-home-fitness-prototype.png';
  const prototypeUrl = 'http://127.0.0.1:8765/prototypes/2026-04-27-initial-three/donnas-home-fitness/';

  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto('https://www.donnashomefitness.com/', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await delay(8000);
  await page.screenshot({ path: targetPath, fullPage: true });

  await page.goto(prototypeUrl, { waitUntil: 'load', timeout: 30000 });
  await delay(1000);
  await page.screenshot({ path: protoPath, fullPage: true });

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
