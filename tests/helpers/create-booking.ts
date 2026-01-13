import { APIRequestContext } from "@playwright/test";
import { authToken } from "./auth-token";

export async function createBooking (request: APIRequestContext) {
    const token = await authToken(request)

    await request.post('https://automationintesting.online/api/booking', {
        headers : {
            'Content-type': 'application/json',
            'Cookie': `token=${token}`
        },
        data: {
          "roomid":3,
          "firstname":"Tester",
          "lastname":"Black",
          "depositpaid":false,
          "bookingdates":
              {
                "checkin":"2026-01-13",
                "checkout":"2026-01-14"
              },
          "email":"test@test.com",
          "phone":"12345690012"
      }
      }
    )
}