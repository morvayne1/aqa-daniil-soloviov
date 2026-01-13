import { test, expect } from '@playwright/test';
import { HomePage } from '../page-object/home-page';
import { RoomPage } from '../page-object/room-page';
import { BookingPage } from '../page-object/booking-page';
import { CalendarComponent } from '../page-object/Components/calendar';

test.describe('booking proccesses', () => {
    test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToPage();
   });

    test('booking with valid data', async ({page}) => {
        const homePage = new HomePage(page)
        const roomPage = new RoomPage(page)
        const bookingPage = new BookingPage(page)
        const calendar = new CalendarComponent(page)

        await homePage.goToRooms()
        await roomPage.bookNow()

        await calendar.selectDateRange(20, 25)
        await bookingPage.openBookingForm()   
        
        await bookingPage.fillBookingForm({
            firstName: 'Tester',
            lastName: 'Black',
            email: 'test123@test.com', 
            phone: '01234567890'
        })
        await bookingPage.submitBooking()
        await bookingPage.isBookingConfirmed()
    })
})