import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Non Incognito browser', async () => {
   //const browser: Browser = await chromium.launch({ headless: false });
   // open browser in non incognito mode
   const browser: BrowserContext = await chromium.launchPersistentContext('',{ headless: false });
   // browserContext1 
   //const page: Page = await browser.newPage();
   const pages:Page[] =browser.pages();
   const mypage=pages[0];


   await mypage.goto("https://amazon.co.uk");
   // enter text in the email field
  // browser.close();









})