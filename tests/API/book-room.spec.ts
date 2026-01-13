import {test, expect} from '@playwright/test'
import { authToken } from '../helpers/auth-token'
import { createBooking } from '../helpers/create-booking'

test('book room and check if it booked', async ({request}) => {
     const token = await authToken(request)
    const booking = await createBooking(request)
         
    const bookingsResponse = await request.get('https://automationintesting.online/api/booking?roomid=3', {
        headers : {
            'Content-type': 'application/json',
            'Cookie': `token=${token}`
        }
    })
     
    const bookingsData = await bookingsResponse.json()
     
    const checkBooking = bookingsData.bookings.find((booking: any) => 
        booking.firstname === 'Tester'
    )
         
         
})