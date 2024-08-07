import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('user login', async () => {
   const browser: Browser = await chromium.launch({ headless: false });
   const page: Page = await browser.newPage();
   await page.goto("https://naveenautomationlabs.com/opencart/index.php?rout=account/login");
   
   const pageUrl = page.url()
   console.log(pageUrl)
   expect(pageUrl).toBe('https://naveenautomationlabs.com/opencart/index.php?rout=account/login')
   const userDropdown: Locator = await page.locator("a[title='My Account']");
   const userLink: Locator = await page.locator("li.dropdown.open > ul > li:nth-child(2) > a");

   const emailField: Locator = await page.locator("input[name='email']");
   const passwordField: Locator = await page.locator("input[name='password']");
   const submitBtn: Locator = await page.locator("input[type='submit']");
   // enter text in the email field

   userDropdown.click();
   userLink.click();

   await emailField.fill("pwtest@opencart.com");
   await passwordField.fill("playwright@123");
   await submitBtn.click();

   const pageTitle:string = await page.title();
   //expect(pageTitle).toEqual("My Account");

   browser.close();









})