import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('user login', async () => {
   const browser: Browser = await chromium.launch({ headless: false });
   const page: Page = await browser.newPage();
   await page.goto("https://letcode.in/edit");
   const fullName: Locator = await page.locator("#fullName");
   //const append = page.$("#join")


    // enter text in the email field

   
   //userLink.click();
  // enter full name
   await fullName.fill("Test Automation");

   // Append word to the last
   
   const append = await page.$("#join");
   await append?.focus();
   await page.keyboard.press("End")
   await append?.type(" person");

   // attribute value
const text = await page.getAttribute("#getMe", "value");
console.log(text);
expect(text).toBe("ortonikc");



   //const pageTitle:string = await page.title();
   //expect(pageTitle).toEqual("My Account");
await page.waitForTimeout(3000);
   browser.close();









})