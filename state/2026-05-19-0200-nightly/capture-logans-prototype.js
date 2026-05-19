const { chromium }=require('playwright');
const fs=require('fs');
(async()=>{
  const browser=await chromium.launch({executablePath:'/snap/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--allow-file-access-from-files']});
  const page=await browser.newPage({viewport:{width:1366,height:768},deviceScaleFactor:1});
  const html=fs.readFileSync('prototypes/2026-05-19-0200-nightly/logans-gutter-services/index.html','utf8');
  await page.setContent(html,{waitUntil:'load',timeout:60000});
  await page.waitForTimeout(5000);
  const h=await page.evaluate(()=>document.documentElement.scrollHeight);
  for(let y=0;y<h+1000;y+=700){await page.evaluate(y=>window.scrollTo(0,y),y); await page.waitForTimeout(250)}
  await page.evaluate(()=>window.scrollTo(0,0)); await page.waitForTimeout(1000);
  await page.screenshot({path:'screenshots/2026-05-19-0200-nightly/logans-gutter-services-prototype.png',fullPage:true});
  await browser.close();
})();
