import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Hover then click', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
 
  const browserContext1: BrowserContext = await browser.newContext();
  const page = await browserContext1.newPage();

  await page.goto("https://www.bigbasket.com/");
  const shopcategory = "//button[@id='headlessui-menu-button-:R5bab6:']";
  await page.locator(shopcategory).click();
  await page.getByText('Beverages').first().hover();
  await page.getByText('Tea').first().hover();
  await page.getByText('Tea Bags').click();

  


  

  await page.waitForTimeout(3000);

  // browser.close();
})
