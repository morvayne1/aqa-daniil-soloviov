import { Page, Locator } from '@playwright/test'

export class BookingPage {
    readonly page: Page
    readonly reserveButton: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly emailInput: Locator
    readonly phoneInput: Locator
    readonly nextMonth: Locator
    readonly isConfirmed: Locator

    constructor(page: Page) {
    this.page = page
    this.reserveButton = page.getByRole('button', { name: 'Reserve Now' })
    this.firstNameInput = page.getByPlaceholder('Firstname')
    this.lastNameInput = page.getByPlaceholder('Lastname')
    this.emailInput = page.getByPlaceholder('Email')
    this.phoneInput = page.getByPlaceholder('Phone')
    this.nextMonth = page.getByRole('button', {name: "Next"})
    this.isConfirmed = page.locator('h2', { hasText: 'Booking Confirmed' })
  }

  async openBookingForm() {
    await this.reserveButton.click()
  }

  async fillBookingForm(data: { firstName: string; lastName: string; email: string; phone: string }) {
    await this.firstNameInput.fill(data.firstName)
    await this.lastNameInput.fill(data.lastName)
    await this.emailInput.fill(data.email)
    await this.phoneInput.fill(data.phone)
  }

  async submitBooking() {
    await this.reserveButton.click()
  }

  async goToNextMonth() {
    await this.nextMonth.click()
  }
}