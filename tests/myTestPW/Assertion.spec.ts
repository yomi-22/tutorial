import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import exp from 'constants';
import { webkit, chromium, firefox } from 'playwright';

test('', async({page})=>
{
    await page.goto("https://www.amazon.co.uk/")
     expect(page.title).toBe("Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more")
await expect(page).toHaveTitle("Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more")
await expect(page).toHaveURL("https://www.amazon.co.uk/")
const amazonLogo = await page.locator("#nav-logo-sprites")
 await expect(amazonLogo).toBeVisible()
 const checkBox = await page.locator("checkboxLocator")
 await expect(checkBox).toBeEnabled()
 // attribut
 await expect(checkBox).toHaveAttribute('type','submit')
 // disabled
 const result = await expect(checkBox).toBeDisabled()
 // getByTex
const today = await page.locator(".nav-a[href='/deals?ref_=nav_cs_gb']")

await expect(today).toHaveText("Today's Deal")

const phones = await page.getByPlaceholder("Search Amazon.co.uk")
phones.fill("Mobile phones")
 expect(phones).toHaveValue("Mobile phones")
 expect(phones).toContainText("Mobile")





    })