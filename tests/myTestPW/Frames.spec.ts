import { test, expect, Browser, Page, Locator, Frame } from '@playwright/test'
import { lookupService } from 'dns';
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Frames', async () => {
   const browser = await chromium.launch({ headless: false })
   const page = await browser.newPage();
   await page.goto("https://letcode.in/frame");


   const totalFrames = page.frames();
   console.log("Total frames " + totalFrames.length);
   // Approach 1 using frame locator
   // frameLocator = page.frameLocator("#firstFr").locator(frameFirstNameField).fill("Hello");

   // Approach 2 using frame name

   //  const frame = page.frame('firstFr');

   // Approach 3 using frame url
   const frame = page.frame({ url: "https://letcode.in/frameUI" });
   frame?.waitForLoadState();
   const frameFirstNameField = "input[name='fname']";
   const frameSeconfNameField = "input[name='lname']";

   // Approach 3 using frame locator
   // frameLocator = page.frameLocator("#firstFr").locator(frameFirstNameField).fill("Hello");

   if (frame != null) {
      await frame?.fill(frameFirstNameField, "Yomi");
      await frame?.fill(frameSeconfNameField, "Abass");
   }
   else {
      console.log("frame is empty");
   }
   // total frames

   // inner frames
   const innerFrames = await frame?.childFrames()
   console.log("Inner frames are ", innerFrames?.length)
   // if (innerFrames != null) {
    //  await innerFrames[0].locator("input[name='email']").fill("Azzez");
   //    // switch back to parent frame
   //    const parent = innerFrames[0].parentFrame();
   //   await parent?.fill(frameSeconfNameField, "Saucer")
   // }

   const frame2  = await page.frame({url:"https://letcode.in/innerFrame"});
   await frame2?.locator("input[name='email']").fill("Azzez");

   await page.waitForTimeout(2000);
})