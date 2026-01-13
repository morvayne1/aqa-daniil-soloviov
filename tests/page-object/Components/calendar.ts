import { Page, Locator } from '@playwright/test'

export class CalendarComponent {
  readonly page: Page
  readonly dayCells: Locator
  readonly nextMonthButton: Locator

  constructor(page: Page) {
    this.page = page
    this.dayCells = page.locator('.rbc-day-bg')
    this.nextMonthButton = page.getByRole('button', { name: 'Next' })
  }

  async goToNextMonth(times: number = 1) {
    for (let i = 0; i < times; i++) {
      await this.nextMonthButton.click()
    }
  }

  async selectDateRange(startIndex: number, endIndex: number, offsetRatio = 0.3) {
    const startDay = this.dayCells.nth(startIndex)
    const endDay = this.dayCells.nth(endIndex)

    const startBox = await startDay.boundingBox()
    const endBox = await endDay.boundingBox()

    if (!startBox || !endBox) throw new Error('Day not found')

    const offsetY = startBox.height * offsetRatio

    await this.page.mouse.move(
      startBox.x + startBox.width / 2,
      startBox.y + startBox.height / 2 + offsetY
    )
    await this.page.mouse.down()

    await this.page.mouse.move(
      endBox.x + endBox.width / 2,
      endBox.y + endBox.height / 2 + offsetY,
      { steps: 20 }
    )
    await this.page.mouse.up()
  }
}