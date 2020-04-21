import {Page} from 'playwright-core/types/types';
import {Browser} from 'playwright-core/types/types';

const url = 'https://jestjs.io/';
export const login = (async (browser:Browser):Promise<Page> => {
    const page = await browser.newPage();
    await page.goto(url);
    return page;
});



