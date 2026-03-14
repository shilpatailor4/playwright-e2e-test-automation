import { test, expect } from '@playwright/test'
import { APIController } from '../../src/api/APIController'
import { createRandomUser } from '../../src/util/helper'

test.describe('Package API Suite', () => {
  let api
  const userData = createRandomUser()

  test.beforeEach(({ request }) => {
    api = new APIController(request)
  })

  test('Package booking flow', async () => {
    // 1. Register User using the new class method
    const userRes = await api.registerNewUser(userData)
    expect(userRes.status()).toBe(201)
    const userDetails = await userRes.json()

    // 2. Find Package
    const packageRes = await api.getPackageByLocation('London')
    const packages = await packageRes.json()
    const selectedID = packages[0].packageID

    // 3. Create Booking
    const bookingRes = await api.createBooking({
      userID: userDetails.id,
      bookingID: selectedID,
      bookingDate: '01/01/2026',
      bookingPerson: userData.username,
      bookingRooms: 2,
    })

    expect(bookingRes.ok()).toBeTruthy()
  })
})
