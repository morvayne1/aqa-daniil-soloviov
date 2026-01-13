import { test, expect } from '@playwright/test'
import { authToken } from '../helpers/auth-token'
import { createRoom } from '../helpers/create-room'

test('delete created room and check if it deleted', async ({request}) => {
    const token = await authToken(request)
    const roomId = await createRoom(request)
    
    const deleteResponse = await request.delete(`https://automationintesting.online/api/room/${roomId}`, {
        headers: {
            'Content-type': 'application/json',
            'Cookie': `token=${token}`
        }
    })
    expect(deleteResponse.status()).toBe(200)
    const roomResponse = await request.get('https://automationintesting.online/api/room')
    const rooms = await roomResponse.json()

    const deletedRoom = rooms.rooms.find(
      (room: any) => room.roomName === 'Tester'
    )
    console.log(deletedRoom)
    expect(deletedRoom).toBeFalsy()
})