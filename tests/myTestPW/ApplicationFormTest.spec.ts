import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright';
import ApplicationForm from '../Pages/ApplicationForm';

let browser: Browser;
let page: Page;
let form: ApplicationForm;

test.beforeAll('Before test run', async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
})

let applicationUrl = "https://testautomationpractice.blogspot.com/";

test('Page Object Model Test', async () => {
    form = new ApplicationForm(page);
    await form.navigate(applicationUrl);
    await form.Name("Yomi");
    await form.Email("test@test.com");
    await form.Address("7 New street London");
    await form.Phone("071190298710");
})
