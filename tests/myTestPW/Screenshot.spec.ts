import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { url } from 'inspector';
import { describe } from 'node:test';
import { webkit, chromium, firefox } from 'playwright'

// 
  test('Screenshot', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    // browserContext1 
    const browserContext1: BrowserContext = await browser.newContext();
    const page = await browserContext1.newPage();
  
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");
    const countryDropdown = 'select#Contact_CountryCode';
  
    //screenshot of only display page
    await page.screenshot({path:'tests\ScreenshotStorage' + Date.now() + 'DisplaySceenshot.png'})
  
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
    // screenshot of a full page
    await page.screenshot({path:'tests\ScreenshotStorage' + Date.now()+'Full Screen.png', fullPage: true})
  
    // screenshot of a specific images/pics on the screen
    await page.goto("https://www.magupdate.co.uk");
    await page.locator("#magazines > div:nth-child(1)").screenshot({path:'tests\ScreenshotStorage'+Date.now()+'SpecificScreenshot.png'})
    
    /**
     *   // Screenshot
     * To take a screenshot of all tests when test run-> goto ‘playwright/config.ts’ then look for ‘use’ then add screenshot:on. 
     * Screenshot will be taken for all tests and save under ‘test result’ folder in Visual Studio code. You can also view the
     * screenshot of the tests via the test report e.g run this command npx playwright show-report
     *    // Video
     * To take a video of all tests when test run-> goto ‘playwright/config.ts’ then look for ‘use’ then add video:"on" or you can specify
     * another option e.g.  video:"retain-on-failure"
     * Videos will be taken for all tests and save under ‘test result’ folder in Visual Studio code. You can also view the
     * Videos of the tests via the test report e.g run this command npx playwright show-report
    **/
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

// describe.only will only execute tests in this group and ignore the rests of the tests
describe('Group 2', async()=>
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