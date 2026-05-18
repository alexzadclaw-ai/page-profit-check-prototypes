const fs = require('fs');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath:'/snap/bin/chromium', headless:true, args:['--no-sandbox','--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport:{ width:1365, height:900 }, deviceScaleFactor:1 });
  page.setDefaultTimeout(60000);
  const html = fs.readFileSync('prototypes/2026-05-18-0200-nightly/home-hero/index.html', 'utf8');
  await page.setContent(html, { waitUntil:'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout:30000 }).catch(()=>{});
  await page.waitForFunction(() => document.fonts && document.fonts.status === 'loaded', null, { timeout:20000 }).catch(()=>{});
  await page.waitForTimeout(1500);
  await page.screenshot({ path:'screenshots/2026-05-18-0200-nightly/home-hero-prototype.png', fullPage:true });
  const data = await page.evaluate(() => ({ title:document.title, height:Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), width:document.documentElement.scrollWidth, fonts: document.fonts ? document.fonts.status : null }));
  console.log(JSON.stringify(data,null,2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
