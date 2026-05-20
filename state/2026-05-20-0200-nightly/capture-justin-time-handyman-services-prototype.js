const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const root = process.cwd();
const port = 47831;
const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/prototypes/2026-05-20-0200-nightly/justin-time-handyman-services/index.html';
  const filePath = path.join(root, urlPath.replace(/^\/+/, ''));
  if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404); res.end('not found'); return;
  }
  const ext = path.extname(filePath).toLowerCase();
  const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml'};
  res.writeHead(200, {'content-type': types[ext] || 'application/octet-stream'});
  fs.createReadStream(filePath).pipe(res);
});
(async()=>{
 await new Promise(resolve => server.listen(port, '127.0.0.1', resolve));
 const browser=await chromium.launch({executablePath:'/snap/bin/chromium',headless:true,args:['--no-sandbox']});
 try {
   const page=await browser.newPage({viewport:{width:1440,height:1200},deviceScaleFactor:1,reducedMotion:'reduce'});
   await page.goto(`http://127.0.0.1:${port}/`, {waitUntil:'domcontentloaded', timeout:60000});
   await page.waitForLoadState('networkidle', {timeout:60000}).catch(()=>{});
   await page.waitForTimeout(2500);
   await page.screenshot({path:'screenshots/2026-05-20-0200-nightly/justin-time-handyman-services-prototype.png', fullPage:true});
 } finally {
   await browser.close();
   server.close();
 }
})();
