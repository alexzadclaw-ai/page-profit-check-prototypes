const fs=require('fs');
const path=require('path');
const { chromium }=require('playwright');
const url='https://logansgutterservic.wixsite.com/website-2';
const outDir='state/2026-05-19-0200-nightly';
const shot='screenshots/2026-05-19-0200-nightly/logans-gutter-services-target.png';
(async()=>{
  const browser=await chromium.launch({executablePath:'/snap/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
  const context=await browser.newContext({viewport:{width:1366,height:768},deviceScaleFactor:1});
  const page=await context.newPage();
  page.setDefaultTimeout(60000);
  const responses=[];
  page.on('response', async res=>{
    const u=res.url();
    if(/\.(png|jpe?g|webp|gif|svg)(\?|$)|static\.wixstatic\.com|static\.parastorage\.com/i.test(u)){
      responses.push({url:u,status:res.status(),contentType:res.headers()['content-type']||'',from:'response'});
    }
  });
  await page.goto(url,{waitUntil:'domcontentloaded',timeout:90000});
  await page.waitForTimeout(6000);
  const height1=await page.evaluate(()=>document.documentElement.scrollHeight);
  for (let y=0; y<height1+1600; y+=500){
    await page.evaluate(y=>window.scrollTo(0,y),y);
    await page.waitForTimeout(450);
  }
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(1500);
  const inspection=await page.evaluate(()=>{
    const abs=(u)=>{try{return new URL(u,location.href).href}catch(e){return u}};
    const clean=(s)=>(s||'').replace(/\s+/g,' ').trim();
    const text=document.body?document.body.innerText:'';
    const title=document.title;
    const meta=[...document.querySelectorAll('meta')].map(m=>({name:m.getAttribute('name'),property:m.getAttribute('property'),content:m.getAttribute('content')})).filter(x=>x.content);
    const links=[...document.querySelectorAll('a[href]')].map(a=>({text:clean(a.innerText||a.getAttribute('aria-label')||''),href:abs(a.getAttribute('href')),target:a.target,rect:(()=>{const r=a.getBoundingClientRect();return {x:Math.round(r.x+scrollX),y:Math.round(r.y+scrollY),w:Math.round(r.width),h:Math.round(r.height)}})()})).filter(l=>l.href);
    const imgs=[];
    [...document.querySelectorAll('img, picture source, [src], [data-src]')].forEach((el,i)=>{
      const raw=el.currentSrc||el.src||el.getAttribute('src')||el.getAttribute('data-src')||el.getAttribute('srcset')||'';
      if(!raw) return;
      const src=raw.split(',')[0].trim().split(' ')[0];
      const r=el.getBoundingClientRect();
      imgs.push({i,tag:el.tagName.toLowerCase(),src:abs(src),raw,alt:el.getAttribute('alt')||'',className:el.className&&String(el.className).slice(0,120),id:el.id,rect:{x:Math.round(r.x+scrollX),y:Math.round(r.y+scrollY),w:Math.round(r.width),h:Math.round(r.height)},visible:r.width>2&&r.height>2});
    });
    const bgElements=[];
    [...document.querySelectorAll('body, body *')].forEach((el,i)=>{
      const cs=getComputedStyle(el); const bg=cs.backgroundImage;
      if(bg && bg!=='none'){
        const urls=[...bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map(m=>abs(m[1]));
        const r=el.getBoundingClientRect();
        bgElements.push({i,tag:el.tagName.toLowerCase(),id:el.id,className:el.className&&String(el.className).slice(0,120),bg,urls,rect:{x:Math.round(r.x+scrollX),y:Math.round(r.y+scrollY),w:Math.round(r.width),h:Math.round(r.height)},visible:r.width>2&&r.height>2,color:cs.backgroundColor});
      }
    });
    const blocks=[...document.querySelectorAll('header,nav,main,section,footer,[id^="comp"],h1,h2,h3,p,button')].map((el,i)=>{
      const r=el.getBoundingClientRect(); const cs=getComputedStyle(el);
      return {i,tag:el.tagName.toLowerCase(),id:el.id,className:el.className&&String(el.className).slice(0,80),text:clean(el.innerText).slice(0,700),rect:{x:Math.round(r.x+scrollX),y:Math.round(r.y+scrollY),w:Math.round(r.width),h:Math.round(r.height)},style:{fontFamily:cs.fontFamily,fontSize:cs.fontSize,fontWeight:cs.fontWeight,color:cs.color,backgroundColor:cs.backgroundColor,backgroundImage:cs.backgroundImage,borderColor:cs.borderColor},visible:r.width>2&&r.height>2};
    }).filter(b=>b.visible || b.text);
    const colors=[];
    [...document.querySelectorAll('body, body *')].slice(0,3000).forEach(el=>{const cs=getComputedStyle(el); ['color','backgroundColor','borderColor'].forEach(k=>{const v=cs[k]; if(v&&v!=='rgba(0, 0, 0, 0)'&&v!=='transparent') colors.push(v)})});
    const count={}; colors.forEach(c=>count[c]=(count[c]||0)+1);
    const topColors=Object.entries(count).sort((a,b)=>b[1]-a[1]).slice(0,40).map(([color,n])=>({color,n}));
    return {url:location.href,title,viewport:{w:innerWidth,h:innerHeight},scrollHeight:document.documentElement.scrollHeight,text,meta,links,imgs,bgElements,blocks,topColors};
  });
  inspection.responses=responses;
  fs.writeFileSync(path.join(outDir,'logans-gutter-services-inspection.json'),JSON.stringify(inspection,null,2));
  fs.writeFileSync(path.join(outDir,'logans-gutter-services-bodytext.txt'),inspection.text);
  await page.screenshot({path:shot,fullPage:true});
  await browser.close();
})();
