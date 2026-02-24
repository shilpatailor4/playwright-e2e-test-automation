// import { test, expect } from '@playwright/test'
// import { APIController } from '../../src/api/APIController'
// import { createRandomUser } from '../../src/util/helper'

// test.describe('Package API Suite', () => {
//   let api
//   // This generates the data once using your helper keys
//   const userData = createRandomUser()

//   test.beforeEach(({ request }) => {
//     api = new APIController(request)
//   })

//   test('Complex Flow: Register, Find, and Book', async () => {
//     // 1. Register User
//     const userRes = await api.registerNewUser(userData)
//     expect(userRes.status()).toBe(201)
//     const registeredUser = await userRes.json()
//     // const emailFromResponse = registeredUser.userEmail
//     console.log(registeredUser)
//     console.log('================================')

//     // 2. SEARCH USING THE CAPTURED EMAIL
//     const searchRes = await api.getUsersByEmail(userData.email)
//     const searchResult = await searchRes.json()
//     console.log(searchResult)

//     // 3. Find Package in London
//     const packageLocationRes = await api.getPackageByLocation('London')
//     const packagesLoc = await packageLocationRes.json()

//     expect(packagesLoc.length).toBeGreaterThan(0)
//     expect(packagesLoc[0].packageCity).toBe('London')
//     const selectedID = packagesLoc[0].packageID

//     // 4. Create Booking
//     const bookingRes = await api.createBooking({
//       userID: registeredUser.id,
//       bookingID: selectedID,
//       bookingDate: '01/01/2026',
//       bookingPerson: userData.username, // Using .username from helper
//       bookingRooms: 2,
//     })

//     expect(bookingRes.ok()).toBeTruthy()

//     const bookingDetails = await bookingRes.json()
//     console.log('--- Booking Confirmation ---', bookingDetails)
//   })
// })
