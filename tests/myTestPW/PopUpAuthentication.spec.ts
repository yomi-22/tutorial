import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Handling Pop up authentication', async () => {
   const browser: Browser = await chromium.launch({ headless: false });
   // browserContext1 
   const browserContext: BrowserContext = await browser.newContext();
   const page = await browserContext.newPage();

const username ='admin'
const password ='admin'
/*
Btoa-> is a javascript method to get the encrypted authentication e.g.
 btoa(username+password) will generate access token characters
**/
// first approach
let headerAuthentication = 'Basic '+ btoa(username + ':'+password);

//page.setExtraHTTPHeaders({Authorization: headerAuthentication});
page.setExtraHTTPHeaders({Authorization: createHeaderAuthentication(username,password)});
   await page.goto("https://the-internet.herokuapp.com/basic_auth");
   // const expectedMessage = await page.locator("div[class='example'] p").textContent;
  
    // expect(expectedMessage).toMatch("Congratulations! You must have the proper credentials.");

  // browser.close();

  // second approach -> create a function and pass it as a parameter
  function createHeaderAuthentication(username:any, password:any)
  {
   return 'Basic '+ btoa(username + ':'+password)
  }









})