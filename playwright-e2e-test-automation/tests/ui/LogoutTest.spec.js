import { test, expect } from '@playwright/test'
import { LoginPage } from '../../src/pages/LoginPage.js'
import { LogoutPage } from '../../src/pages/LogoutPage.js'

test.describe('Logout Functionality Test', () => {
  let logoutPage
  let loginPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    logoutPage = new LogoutPage(page)

    await loginPage.navigate()
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD)
    await loginPage.verifyLogoutOption()
  })

  test('Logout to the app', async ({ page }) => {
    await logoutPage.logoutToApp()
  })
})
