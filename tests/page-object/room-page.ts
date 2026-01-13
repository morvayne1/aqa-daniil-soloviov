import { Page, Locator } from '@playwright/test'

export class RoomPage {
    readonly page: Page
    readonly roomCard: Locator
    readonly bookBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.roomCard = page.locator('.col-md-6', { hasText: 'Single' })
        this.bookBtn = this.roomCard.getByRole('link', { name: 'Book Now' })
    }

    async bookNow() {
        await this.bookBtn.click()
    }
}