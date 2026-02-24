import { test, expect } from '@playwright/test'
import { APIController } from '../../src/api/APIController'
import { createRandomUser } from '../../src/util/helper'

test.describe('Package API Suite', () => {
  let api
  // This generates the data once using your helper keys
  const userData = createRandomUser()

  test.beforeEach(({ request }) => {
    api = new APIController(request)
  })

  test('Complex Flow: Register, Find, and Book', async () => {
    // 1. Register User
    const userRes = await api.createUser({
      userName: userData.username,
      userEmail: userData.email,
      userPhone: userData.phone,
      userPassword: userData.password,
      userAddress: userData.address,
      userRole: 'user',
    })

    expect(userRes.status()).toBe(201)
    const registeredUser = await userRes.json()
    console.log('_________Registration Successful_____________')
    console.log(registeredUser)
    console.log('================================')

    // // 2. SEARCH USING THE CAPTURED EMAIL
    const searchRes = await api.getUsersByEmail(userData.email)
    const searchResult = await searchRes.json()
    console.log('_________Get User Data by Email_____________')
    console.log(searchResult)
    console.log('================================')
  })
})
