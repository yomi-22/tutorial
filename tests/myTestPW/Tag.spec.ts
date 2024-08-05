import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'


// execute test with tag. 
// execute a command to npx playwright test plus the 
// test path e.g. .\myTestPW\Tag.spec.ts  with --grep  plus tag name e.g.@slow
//npx playwright test .\myTestPW\Tag.spec.ts --grep @slow


test('Tags @slow', async () => {
   const browser: Browser = await chromium.launch({ headless: false });
   const page: Page = await browser.newPage();
   await page.goto("https://letcode.in/alert");
   const alert = await page.$("#accept");
   const confirmAlert = await page.$("#confirm");
   const promptAlert = await page.$("#prompt");


   page.on('dialog', (dialog) => {
     // dialog.accept("Yomi");
     dialog.dismiss();
      const message = dialog.message()
      console.log("Alert type is " + dialog.type());
      console.log(message);
   })
   promptAlert?.click();




   //const pageTitle:string = await page.title();
   //expect(pageTitle).toEqual("My Account");
   await page.waitForTimeout(3000);
   browser.close();

})

test('Tag2@reg@slow', async()=>
   {
console.log("I have many options");
   }
)
