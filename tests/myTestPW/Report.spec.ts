import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Report options', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  // browserContext1 
  const browserContext1: BrowserContext = await browser.newContext();
  const page = await browserContext1.newPage();

  await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");
  const countryDropdown = 'select#Contact_CountryCode';

  /**
   *  Ty
   */

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
