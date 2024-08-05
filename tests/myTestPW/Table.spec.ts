import { test, expect, Browser, Page, Locator, Frame } from '@playwright/test'
import { lookupService } from 'dns';
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Tables ', async () => {
    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    // get rows and columns
    const table = page.locator("#productTable");
    const columns = await table.locator("thead tr th");
    const rows = await table.locator("tbody tr");
    const totalColumns = await columns.count();
    console.log("Total number of columns are :", totalColumns);
    expect(totalColumns).toBe(4);
    // filter with single product without creating a function
    const totalRows = await rows.count()
    console.log("Total number of rows are :", totalRows);
    expect(totalRows).toBe(5);

    // const matchedRow = rows.filter(
    //     {
    //         has: page.locator('td'),
    //         hasText: 'Product 2'
    //     }
    // )
    // await matchedRow.locator('input').check();

    // select multiple produts
    const products = ["Product 1", "Product 4", "Product 5"];

    for (const product of products) {
        await selectProduct(rows, product, page)
        // page.waitForTimeout(4000);
    }


    // print all data in the table

    // for (let row = 0; row < await rows.count(); row++) {
    //     const eachRow = rows.nth(row);
    //     const td = eachRow.locator('td')

    //     for (let c = 0; c < await td.count() - 1; c++) {
    //         console.log(await td.nth(c).textContent());
    //     }

    // Read data from multiple pages

    const pages = page.locator("#pagination li");
    const totalPages = await pages.count();

    for (let pageNo = 0; pageNo < totalPages; pageNo++) {
        if (pageNo > 0) {
            await pages.nth(pageNo).click();

            for (let row = 0; row < await rows.count(); row++) {
                const eachRow = rows.nth(row);
                const td = eachRow.locator('td')

                for (let c = 0; c < await td.count() - 1; c++) {
                    console.log(await td.nth(c).textContent());
                }
            
            }
        }

    }
    //page.waitForTimeout(4000);
})



async function selectProduct(rows: any, name: any, page: any) {
    const matchedRow = rows.filter(
        {
            has: page.locator('td'),
            hasText: name
        }
    )
    await matchedRow.locator('input').check();
}