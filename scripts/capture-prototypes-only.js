#!/usr/bin/env node
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const batch = process.argv[2];
if (!batch) {
  console.error('Usage: node scripts/capture-prototypes-only.js <batch>');
  process.exit(1);
}
const metaPath = path.join(root, 'opportunities', batch, 'batch.json');
if (!fs.existsSync(metaPath)) {
  console.error(`Missing ${metaPath}`);
  process.exit(1);
}
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const shotDir = path.join(root, 'screenshots', batch);
fs.mkdirSync(shotDir, { recursive: true });
const baseUrl = process.env.PPC_CAPTURE_BASE_URL || 'http://127.0.0.1:8124';
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await chromium.launch({
    executablePath: '/snap/bin/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 }, deviceScaleFactor: 1 });
  let failures = 0;
  for (const item of meta.items || []) {
    const slug = item.slug;
    const protoPath = path.join(shotDir, `${slug}-prototype.png`);
    const page = await context.newPage();
    try {
      const protoUrl = `${baseUrl}/prototypes/${batch}/${slug}/index.html`;
      console.log(`PROTO ${batch}/${slug} -> ${protoUrl}`);
      await page.goto(protoUrl, { waitUntil: 'networkidle', timeout: 30000 });
      await sleep(700);
      await page.screenshot({ path: protoPath, fullPage: true });
      console.log(`PROTO OK ${batch}/${slug}`);
    } catch (err) {
      failures += 1;
      console.error(`PROTO FAIL ${batch}/${slug}: ${err.message}`);
    }
    await page.close();
  }
  await browser.close();
  process.exit(failures ? 2 : 0);
})();
