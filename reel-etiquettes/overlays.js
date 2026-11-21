const { chromium } = require('playwright'); const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+path.join(__dirname,'overlays.html'));await p.evaluate(()=>document.fonts.ready);
for(const i of [1,2,3]) await p.locator('#o'+i).screenshot({path:path.join(__dirname,`overlay-${i}.png`),omitBackground:true});
await b.close();})();
