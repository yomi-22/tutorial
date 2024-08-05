import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

test('Keyboard Operation', async () => {
    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill("#name", "testing123")
    // select texts inside the textbox Control+A
    await page.keyboard.press("Control+A");
    // Copy texts from textbox
    await page.keyboard.press("Control+C");

    // move to next tab using tab key
    await page.keyboard.down('Tab');
    // paste copy text
    await page.keyboard.press("Control+V");
 // delete the entered text
    await page.keyboard.press('Backspace');
    // enter new value
   await page.keyboard.type("test@gmail.com")

    await page.waitForTimeout(3000);



})