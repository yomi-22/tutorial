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

  // getByTestId is used to locate web element/locator if the contains attribute
   // data-testid page.getByTestId("").

  // await searchbar.fill("mobile phones");
  // ANother way of  writing the code above. 
  await page.fill("//input[@id='twotabsearchtextbox' and @name='field-keywords']", 'mobile phones'); // passing both locator and value at the same time

  // await searchbtn.click();
    // ANother way of  writing the click code above.
  await page.click('#nav-search-submit-button')
  await newRelease.click();

   // locate weblement using getByRole 
   await expect(page.getByRole('link', { name: 'GBP - Pounds' })).toBeVisible();
 // await expect(page.getByRole('link', { name: 'Fashion' })).toBeVisible();

 // by text
   // await page.getByText("Name of the text displayed")

   // getByLabel: use when a page has a label attribute
   // await page.getByLabel("label Value")

   // getByTitle
   await page.getByTitle("Search in").fill("headset")
  

  
  await new Promise(()=>{});
 browser.close();










})