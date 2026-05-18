const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath:'/snap/bin/chromium', headless:true, args:['--no-sandbox']});
  const page = await browser.newPage({ viewport:{width:1365,height:900}});
  const resources=[];
  page.on('requestfinished', req => { const u=req.url(); if (/font|woff|ttf|eot|css|wix|parastorage/i.test(u)) resources.push(u); });
  await page.goto('https://afrotcdet115.wixsite.com/home-hero', {waitUntil:'networkidle', timeout:90000}).catch(()=>{});
  await page.waitForTimeout(5000);
  const perf = await page.evaluate(() => performance.getEntriesByType('resource').map(e=>e.name).filter(u=>/font|woff|ttf|eot|css|wix|parastorage/i.test(u)));
  console.log([...new Set([...resources,...perf])].join('\n'));
  await browser.close();
})();
