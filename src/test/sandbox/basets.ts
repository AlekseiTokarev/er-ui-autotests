import {Browser, Page} from 'playwright-core/types/types';

const url = 'https://jestjs.io/';

export async function login(browser: Browser): Promise<Page> {
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}



