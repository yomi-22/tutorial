import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

let page: Page;

test.beforeEach(async ({ browser }) => {
    await chromium.launch({ headless: false })
    page = await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
    await page.locator("#login2").click();
    await page.fill("#loginusername", "yomi22");
    await page.fill("//input[@id='loginpassword']", "Alhaja22");
    await page.locator("button[onclick='logIn()']").click();

})

test.afterEach(async () => {
    await page.locator("#logout2").click();
})

test('User login', async () => {
    const userName = await page.locator("#nameofuser").textContent();
    expect(userName).toBe("Welcome yomi22");
})

test('Select product', async () => {
    const product = await page.locator("//a[normalize-space()='Samsung galaxy s6']").textContent();
    expect(product).toBe("Samsung galaxy s6");
})