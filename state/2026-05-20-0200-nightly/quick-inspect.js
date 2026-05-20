const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const batch = process.argv[2];
const root = path.resolve(__dirname, '../..');
const items = JSON.parse(fs.readFileSync(path.join(root,'state',batch,'candidate-seed.json'),'utf8'));
(async()=>{
 const browser = await chromium.launch({executablePath:'/snap/bin/chromium', headless:true, args:['--no-sandbox','--disable-dev-shm-usage']});
 const out=[];
 for (const item of items) {
  const page = await browser.newPage({viewport:{width:1365,height:1800}, deviceScaleFactor:1});
  const rec={slug:item.slug, name:item.name, url:item.url, inspectedAt:new Date().toISOString(), ok:false};
  try {
    const resp = await page.goto(item.url, {waitUntil:'domcontentloaded', timeout:45000});
    await page.waitForTimeout(4500);
    await page.evaluate(async()=>{ for (let y=0; y<Math.min(document.body.scrollHeight,3200); y+=650) { window.scrollTo(0,y); await new Promise(r=>setTimeout(r,350)); } window.scrollTo(0,0); });
    await page.waitForTimeout(1000);
    const data = await page.evaluate(()=>{
      const text = document.body ? document.body.innerText.replace(/\s+/g,' ').trim() : '';
      const imgs = Array.from(document.images).map(img=>({src:img.currentSrc||img.src, alt:img.alt||'', w:img.naturalWidth, h:img.naturalHeight})).filter(i=>i.src).slice(0,30);
      const links = Array.from(document.links).map(a=>({text:(a.innerText||a.textContent||'').trim().slice(0,120), href:a.href})).slice(0,40);
      const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4')).map(h=>({tag:h.tagName, text:h.innerText.trim()})).filter(h=>h.text).slice(0,30);
      const bg = Array.from(document.querySelectorAll('*')).map(el=>getComputedStyle(el).backgroundImage).filter(v=>v && v!=='none' && !v.startsWith('linear-gradient')).slice(0,30);
      return {title:document.title, textSample:text.slice(0,1500), textLength:text.length, imageCount:document.images.length, imgs, linkCount:document.links.length, links, headings, backgroundImages:bg};
    });
    rec.ok=!!data.textLength;
    rec.status=resp && resp.status();
    Object.assign(rec,data);
  } catch (e) { rec.error=e.message; }
  out.push(rec);
  await page.close();
 }
 await browser.close();
 fs.writeFileSync(path.join(root,'state',batch,'curation-inspection.json'), JSON.stringify({batch, inspectedCandidateCount: out.length, results:out}, null, 2));
 const metaPath=path.join(root,'opportunities',batch,'batch.json');
 const meta=JSON.parse(fs.readFileSync(metaPath,'utf8'));
 meta.inspectedCandidateCount=out.length;
 meta.notes += ` Quick live preflight inspected ${out.length} selected candidates with Playwright for accessibility before worker handoff.`;
 fs.writeFileSync(metaPath, JSON.stringify(meta,null,2)+'\n');
 console.log(JSON.stringify({batch, inspected:out.length, ok:out.filter(r=>r.ok).length, failed:out.filter(r=>!r.ok).map(r=>({slug:r.slug,error:r.error,status:r.status}))},null,2));
})().catch(e=>{console.error(e); process.exit(1)});
