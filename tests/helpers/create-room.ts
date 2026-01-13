import { APIRequestContext } from "@playwright/test";
import { authToken } from "./auth-token";

export async function createRoom (request: APIRequestContext) {
    const token = await authToken(request)
    const createRoomResponse = await request.post('https://automationintesting.online/api/room', {
      headers: {
        'Content-type': 'application/json',
        'Cookie': `token=${token}`
      },
      data: {
        
            "roomName":"Tester",
            "type":"Single",
            "accessible":false,
            "description":"Please enter a description for this room",
            "image":"https://www.mwtestconsultancy.co.uk/img/room1.jpg",
            "roomPrice":"245",
            "features":["WiFi","TV","Radio"]}
      })

    let roomResponse = await request.get('https://automationintesting.online/api/room')
    let rooms = await roomResponse.json()
          
    const createdRoom = rooms.rooms.find(
            (room: any) => room.roomName === 'Tester'
          )
      
    const newRoomId = createdRoom.roomid

    return newRoomId
}