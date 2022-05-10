const puppeteer = require('puppeteer');
const browser = puppeteer.launch();
const page = browser.newPage();
page.goto('https://itero-myitero-e3.dv.itero.cloud/login');
page.click('#SycHERvz2US9');
// await page.screenshot({ path: 'example.png' });
browser.close();