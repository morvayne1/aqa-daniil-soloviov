import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page
  readonly rooms: Locator

  constructor(page: Page) {
    this.page = page
    this.rooms = page.locator('.nav-link').filter({ hasText: 'Rooms' })
  }
  
  async goToPage() {
    await this.page.goto('https://automationintesting.online/');
  }

  async goToRooms() {
    await this.rooms.click()
  }
}