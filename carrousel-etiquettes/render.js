const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + path.join(__dirname, 'slides.html'));
  await p.evaluate(() => document.fonts.ready);
  for (let i = 1; i <= 7; i++) {
    await p.locator('#s' + i).screenshot({ path: path.join(__dirname, `slide-${i}.png`) });
  }
  await b.close();
})();
