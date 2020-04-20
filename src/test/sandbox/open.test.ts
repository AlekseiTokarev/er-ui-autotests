import {sum} from './sumts'
import {chromium} from "playwright";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


it('my first ', async () => {

    const browser = await chromium.launch({"headless": false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://jestjs.io/');
    const title = await page.title();
    expect(title).toBe("Jest · 🃏 Delightful JavaScript Testing");
    await page.type('#search_input_react', 'type script');
    await page.keyboard.press('Enter');
    await page.screenshot({path: `./output/jestjs.png`});
    browser.close();
}, 300000);
