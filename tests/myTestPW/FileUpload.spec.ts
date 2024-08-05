import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { url } from 'inspector';
import path from 'path';
import { webkit, chromium, firefox } from 'playwright'

test('File upload ', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
 
  const browserContext1: BrowserContext = await browser.newContext();
  const page = await browserContext1.newPage();

  await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
 
  // upload a single file
  await page.locator("input[name='upfile']").
  setInputFiles("C:/Users/LadokunY/OneDrive - Version 1/Documents/Playwright.docx");
  // different approach to write the above
  //await dragLocator.dragTo(dropLocator);

  // upload a multiple files
  
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles([
      path.join("C:/Users/LadokunY/OneDrive - Version 1/Documents/Playwright.docx"),
      path.join("C:/Users/LadokunY/OneDrive - Version 1/Documents/test.txt"),
    ]);
    // deselected file
    await page.locator("#filesToUpload").setInputFiles([]);

    //upload a file through stream memory and 

    await page.locator("#filesToUpload").focus();
    await page.locator("#filesToUpload").setInputFiles(
      {
        name: 'tomi.doc',
  mimeType: 'text/plain',
  buffer: Buffer.from('Buffer is running now')
      }
    )
    await page.waitForTimeout(3000);
   browser.close();
})
