import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Locators', async () => {
  const browser:Browser = await chromium.launch({headless:false});
  const page:Page= await browser.newPage();
  await page.goto("https://www.amazon.co.uk/");

  //xpath
  const searchbar = page.locator("//input[@id='twotabsearchtextbox' and @name='field-keywords']");

  //CSS  #nav-search-submit-button
  const searchbtn:Locator = page.locator("#nav-search-submit-button");
  // text
  const newRelease:Locator = page.locator("text=New Releases");

  // getByTestId is used to locate web element/locator if the contains attribute data-testid
  //page.getByTestId("").

  await searchbar.fill("mobile phones");
  await searchbtn.click();
  await newRelease.click();

   // locate weblement using getByRole 
   await expect(page.getByRole('link', { name: 'GBP - Pounds' })).toBeVisible();
 // await expect(page.getByRole('link', { name: 'Fashion' })).toBeVisible();


  

  
  await new Promise(()=>{});
 browser.close();










})