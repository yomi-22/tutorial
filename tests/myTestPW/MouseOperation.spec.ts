import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Hover then click', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
 
  const browserContext1: BrowserContext = await browser.newContext();
  const page = await browserContext1.newPage();

  await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
  const dbcl = "button[ondblclick='myFunction()']";
  // double click
 // await page.locator(dbcl).dblclick();
 // double click using display text
  await page.getByText('Double-Click Me To See Alert').dblclick();

  await page.getByText('right click me').click({button: 'right'});

  // shift + click a[href='/shifting_content/menu']
  page.goto("https://the-internet.herokuapp.com/shifting_content");

  //await page.locator("a[href='/shifting_content/menu']").click({modifiers: ['Shift']});
  await page.getByText('Example 1: Menu Element').click({modifiers: ['Shift']});

  await page.waitForTimeout(3000);
  //drag and drop
  page.goto("https://jqueryui.com/resources/demos/droppable/default.html");
  const dragLocator =page.locator("#draggable");
  const dropLocator =page.locator("#droppable");
  await page.locator("#draggable").dragTo(page.locator("#droppable"));
  // different approach to write the above
  //await dragLocator.dragTo(dropLocator);

  


  

  await page.waitForTimeout(3000);

   browser.close();
})
