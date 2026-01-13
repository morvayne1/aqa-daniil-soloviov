import { APIRequestContext } from "@playwright/test";

export async function authToken (request: APIRequestContext) {
    const loginResponse = await request.post('https://automationintesting.online/api/auth/login', {
        data: {
          username: 'admin',
          password: 'password'
        }
      }
    )

    const loginData = await loginResponse.json()
    const token = loginData.token

    return token;
}