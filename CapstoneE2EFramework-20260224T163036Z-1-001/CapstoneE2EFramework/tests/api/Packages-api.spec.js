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

  test('Find package by location', async () => {
    // Find Package in by location='London'
    const packageLocationRes = await api.getPackageByLocation('London')
    const packagesLoc = await packageLocationRes.json()
    expect(packagesLoc.length).toBeGreaterThan(0)
    expect(packagesLoc[0].packageCity).toBe('London')
    const selectedID = packagesLoc[0].packageID
  })
})
