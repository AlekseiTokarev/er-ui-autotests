import {chromium} from "playwright";

const sum = require('./sum');
const openSite = require('./base')


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('open site', () => {

    (async () => {
        const browser = await chromium.launch();
        const page = await openSite();
        await page.screenshot({ path: `example.png` });
        // const b = await page.browser();
        // b.close();
    })();
})
