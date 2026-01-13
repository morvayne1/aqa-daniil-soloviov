import { test, expect } from '@playwright/test'
import { authToken } from '../helpers/auth-token'
import { createRoom } from '../helpers/create-room'

test('create room and check if it is created', async ({request}) => {
    const token = await authToken(request)
    const creatingRoom = await createRoom(request)
    console.log(creatingRoom)
    
    const roomResponse = await request.get('https://automationintesting.online/api/room')
    const roomsData = await roomResponse.json()
    console.log(roomsData)
    const createdRoom = roomsData.rooms.find(
      (room: any) => room.roomName === 'Tester'
    )

    expect(createdRoom).toBeTruthy()
})