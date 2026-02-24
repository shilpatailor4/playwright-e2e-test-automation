import { test, expect } from '@playwright/test'
import { HomePage } from '../../src/pages/HomePage'

test.describe('Home Page Validation Tests', () => {
  let homePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.navigate()
  })

  test('Verify Sign Up link is visible', async () => {
    //navigate to the home page when click logo
    await homePage.navigate()

    // Display 'View Package' button
    await homePage.displayedViewPackagesBtn()

    //Login/Signup button visible
    await homePage.clickLoginSignupLink()
  })
})
