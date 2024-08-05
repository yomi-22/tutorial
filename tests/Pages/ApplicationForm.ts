import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { url } from 'inspector';
import { webkit, chromium, firefox } from 'playwright'

export default class ApplicationForm {
   // locators
   nameLocator = "#name";
   emailLocator = "#email";
   phoneLocator = "#phone";
   addressLocator = "#textarea";
   
   page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async navigate(url: string) {
      await this.page.goto(url);
   }

   async Name(name: string) {
      await this.page.locator(this.nameLocator).fill(name);
   }

   async Email(email: string) {
      await this.page.locator(this.emailLocator).fill(email);
   }

   async Phone(phone: string) {
      await this.page.locator(this.phoneLocator).fill(phone);
   }

   async Address(address: string) {
      await this.page.locator(this.addressLocator).fill(address);
   }
}