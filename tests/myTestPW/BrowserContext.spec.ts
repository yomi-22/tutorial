import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('user login', async () => {
   const browser: Browser = await chromium.launch({ headless: false });
   // browserContext1 
   const browserContext1: BrowserContext = await browser.newContext();
   const browserContext1Page = await browserContext1.newPage();

   await browserContext1Page.goto("https://naveenautomationlabs.com/opencart/index.php?rout=account/login");
   const userDropdown: Locator = await browserContext1Page.locator("a[title='My Account']");
   const userLink: Locator = await browserContext1Page.locator("li.dropdown.open > ul > li:nth-child(2) > a");

   const emailField: Locator = await browserContext1Page.locator("input[name='email']");
   const passwordField: Locator = await browserContext1Page.locator("input[name='password']");
   const submitBtn: Locator = await browserContext1Page.locator("input[type='submit']");
   // enter text in the email field

   userDropdown.click();
   userLink.click();

   await emailField.fill("testing@gmail.com");
   await passwordField.fill("Testing22!");
   await submitBtn.click();

   const pageTitle: string = await browserContext1Page.title();
   expect(pageTitle).toEqual("My Account");



     // browserContext2 
     const browserContext2: BrowserContext = await browser.newContext();
     const browserContext1Page2 = await browserContext2.newPage();
  
     await browserContext1Page2.goto("https://naveenautomationlabs.com/opencart/index.php?rout=account/login");
     
   // enter text in the email field
  
     userDropdown.click();
     userLink.click();
  
     await emailField.fill("ymex202@yahoo.com");
     await passwordField.fill("Testing22!");
     await submitBtn.click();
  
     const pageTitle2: string = await browserContext1Page2.title();
     expect(pageTitle2).toEqual("My Account");

  // browser.close();









})