import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'


test('Window handling', async () => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext();
  const page = await context.newPage();

  const homePage = await page.$("#home");
  await page.goto("https://letcode.in/windows");
  // tab/tab created
  const newPage = await context.waitForEvent('page')
  //  const [newWindow] = await Promise.all([
  //     context.waitForEvent("page"),
  await homePage?.click()
  //])
  //  const url =newWindow.url();

  await newPage.waitForLoadState();
  const url = newPage.url()
  expect(url).toBe("https://letcode.in/test");


})