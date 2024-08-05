import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Date Picker', async () => {
    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    // pick a date by direct entery
    //  let time = "06/18/2022";
    // await page.locator("#datepicker").fill(time);

    // Pick a date from the date picker

    const year = "2027";
    const month = "June";
    const day = "10";

    await page.click("#datepicker");
    // const displayYear = await page.locator("span[class='ui-datepicker-year']").textContent();
    // const displayMonth = await page.locator("span[class='ui-datepicker-month']").textContent();
    // const nextButton = page.locator("a[title='Next']");
   
    while (true) {

        const displayYear = await page.locator("span[class='ui-datepicker-year']").textContent();
        const displayMonth = await page.locator("span[class='ui-datepicker-month']").textContent();
        const nextButton = page.locator("a[title='Next']");

        if (displayYear == year && displayMonth == month) {
            break;
        }
        await nextButton.click();

    }

    // pass the date directly comparing the text user enters
      //  await page.locator(`//a[@class='ui-state-default'] [text()=${day}]`).click();
    // Another option is by get all the days in the calendar and loop through until the matches the the user enter
     // a[class="ui-state-default"]
     const dates = page.$$("a[class='ui-state-default']");

     for(const date of await dates)
        {
            if (await date.textContent() == day)
                {
                    await date.click();
                }

        }
    await page.waitForTimeout(3000);
})