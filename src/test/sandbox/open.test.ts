import {sum} from './sumts'
import {login} from './basets'
import {chromium} from "playwright";

let browser;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('open jestjs', async () => {

    // const browser = await chromium.launch({"headless": false});
    // await page.goto('https://jestjs.io/');
    let page = await login(browser);
    const title = await page.title();
    expect(title).toBe("Jest · 🃏 Delightful JavaScript Testing");
    await page.type('#search_input_react', 'type script000');
    await page.keyboard.press('Backspace');
    await page.screenshot({path: `./output/jestjs.png`});
});

beforeEach(async () => {
    browser = await chromium.launch({headless: false});
    // page = await browser.newPage();
});

afterEach(async () => {
    await browser.close();
});


