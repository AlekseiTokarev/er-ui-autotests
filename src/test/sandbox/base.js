const playwright = require('playwright');

async function openSite() {
    const browser = await playwright['chromium'].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://whatsmyuseragent.org/');
    return page;
}
module.exports = openSite;
