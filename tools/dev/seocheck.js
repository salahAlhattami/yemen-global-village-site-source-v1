const puppeteer=require('puppeteer-core');
const fs=require('fs');
const BASE=process.argv[2]||'http://localhost:8734';
const PATHS=[['ar','/'],['en','/en/'],['zh','/zh/'],['ja','/ja/'],['ko','/ko/'],['fr','/fr/'],['de','/de/'],['es','/es/'],['ru','/ru/']];
function findChrome(){for(const p of["C:/Program Files/Google/Chrome/Application/chrome.exe","C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"]){try{if(fs.statSync(p).isFile())return p}catch{}}}
(async()=>{
  const b=await puppeteer.launch({executablePath:findChrome(),headless:'new',args:['--no-sandbox','--ignore-certificate-errors']});
  let bad=0;
  for(const [code,p] of PATHS){
    const page=await b.newPage();
    const errs=[];
    page.on('pageerror',e=>errs.push(e.message));
    page.on('response',r=>{if(r.status()>=400)errs.push(r.status()+' '+r.url())});
    await page.setViewport({width:1440,height:900});
    await page.goto(BASE+p,{waitUntil:'networkidle0',timeout:60000});
    await page.evaluate(()=>document.fonts.ready);
    await page.evaluate(()=>document.querySelectorAll("img[loading=lazy]").forEach(i=>i.loading="eager"));
    await page.evaluate(async()=>{const h=document.body.scrollHeight;for(let y=0;y<h;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,40))}window.scrollTo(0,0)});
    await new Promise(r=>setTimeout(r,2000));
    const i=await page.evaluate(()=>({
      lang:document.documentElement.lang,dir:document.documentElement.dir,
      pre:document.documentElement.dataset.prerendered,
      pending:document.documentElement.hasAttribute('data-i18n-pending'),
      title:document.title.slice(0,40),
      canonical:document.querySelector('link[rel=canonical]')?.getAttribute('href'),
      hreflang:document.querySelectorAll('link[rel=alternate][hreflang]').length,
      h1:document.querySelector('.atlas-hero h1')?.innerText.replace(/\n/g,' ').slice(0,42),
      langLinks:[...document.querySelectorAll('#langMenu a')].map(a=>a.getAttribute('href')).join(','),
      imgs:document.querySelectorAll('img').length,
      loaded:[...document.querySelectorAll('img')].filter(x=>x.complete&&x.naturalWidth>0).length,
      overflow:document.documentElement.scrollWidth>window.innerWidth
    }));
    const ok = !i.pending && !i.overflow && i.hreflang===10 && i.imgs===i.loaded && !errs.length && i.pre===code;
    if(!ok)bad++;
    console.log(`${ok?'ok  ':'FAIL'} ${p.padEnd(5)} lang=${i.lang.padEnd(7)} pre=${i.pre} hreflang=${i.hreflang} imgs=${i.loaded}/${i.imgs} canon=${i.canonical?.replace('https://www.yemenglobalvillage.com','')}`);
    console.log(`       h1="${i.h1}"`);
    if(errs.length)console.log('       errors:',errs.slice(0,3).join(' | '));
    await page.close();
  }
  console.log(bad?`\n${bad} FAILED`:'\nALL PAGES OK');
  await b.close();
})().catch(e=>{console.error(e.message);process.exit(1)});
