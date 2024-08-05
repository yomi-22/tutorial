import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { url } from 'inspector';
import { describe } from 'node:test';
import { webkit, chromium, firefox } from 'playwright'

// describe.skip will  all the tests in this group

describe.skip('Group Tests Together 1', ()=>
{
  test('Single select options', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    // browserContext1 
    const browserContext1: BrowserContext = await browser.newContext();
    const page = await browserContext1.newPage();
  
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");
    const countryDropdown = 'select#Contact_CountryCode';
  
    // select dropdown option using label/visible text option
    // const uk = await page.selectOption(countryDropdown, { label: 'United Kingdom' });
  
    // select dropdown option using value option
    // const ae = await page.selectOption(countryDropdown, { value: 'AE' });
  
    // select dropdown option using index option
    // const index = await page.selectOption(countryDropdown, { index: 5 })
  
    // get all available options 
    const allCountriesDropdown = 'select#Contact_CountryCode > option';
    const allOptions = await page.$$(allCountriesDropdown);
    console.log(allOptions.length);
  
    for (const cy of allOptions) {
      const country = await cy.textContent();
      if (country === 'Yemen') {
        await page.selectOption(countryDropdown, { label: country })
      }
    }
  
    await page.waitForTimeout(3000);
  
    // browser.close();
  })

  test('Testing 1', async()=>
  {
    console.log('Testing 1 in group 1 ')
  })

  
  test('Test 2', async()=>
    {
      console.log('Testing 2 in group 1 ')
    })
})
// describe.only will only execute tests in this group and ignore the rests of the tests
describe.only('Group 2', async()=>
{
  test('Test 1', async()=>
  {
    console.log("Testing in group 2");
  })

  test('Multiple select options', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    // browserContext1 
    const browserContext1: BrowserContext = await browser.newContext();
    const page = await browserContext1.newPage();
  
    await page.goto("https://letcode.in/dropdowns");
    const heros = 'select#superheros';
  
    const herosOption = await page.$(heros);
    await herosOption?.selectOption([{label:'Aquaman'},{value:'bt'},{index:6}])
  
      await page.waitForTimeout(3000);
  
    // browser.close();
  })
  
  test('Get select text from dropdown options', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    // browserContext1 
    const browserContext1: BrowserContext = await browser.newContext();
    const page = await browserContext1.newPage();
  
    await page.goto("https://letcode.in/dropdowns");
    const fruits = 'select#fruits';
  
    const selectedOption = await page.$(fruits);
    const op =await selectedOption?.selectOption({label:'Orange'});
    const text = await page.$eval<string, HTMLSelectElement>(fruits, el => el.value);
    console.log(text);
  
    expect(text).toBe('2');
  
  
  
      await page.waitForTimeout(3000);
  
    // browser.close();
  })
  
})