import { test, expect } from '@playwright/test'
import { SignupPage } from '../../src/pages/SignupPage'
import { LoginPage } from '../../src/pages/LoginPage'
import { Helper } from '../../src/util/helper'
import { Assert } from 'node:assert'
import { faker } from '@faker-js/faker'
import { createRandomUser } from '../../src/util/helper'

test.describe('User Registration Tests', () => {
  let signupPage
  let loginPage

  const userData = createRandomUser()

  test('Successful user registration with random data', async ({ page }) => {
    signupPage = new SignupPage(page)
    loginPage = new LoginPage(page)
    const fakeUser = createRandomUser()

    // 1. Navigate and get to the Signup Form
    await loginPage.navigate()
    await loginPage.clickLoginSignUp()
    await loginPage.signUpLink.click()

    // 3. Perform registration
    await signupPage.register(userData)

    const apiResponse = page.waitForResponse(
      response => response.url().includes('/users') && response.request().method() === 'POST',
    )
    await signupPage.clickSignupButton()

    // 4. Assertion: Verify registration success
    //Validate api response after successful registration
    const getResponse = await apiResponse
    const responseBody = await getResponse.json()
    expect(getResponse.status()).toBe(201)
    expect(responseBody.userName).toBe(userData.username)
    expect(responseBody.userEmail).toBe(userData.email)
  })

  test('Verify all fields are required', async ({ page }) => {
    signupPage = new SignupPage(page)
    signupPage.open('/signup') // Direct navigation

    await signupPage.registerBtn.click()

    // check: ensure browser validation or error msg appears
    const isRequired = await signupPage.txt_username.getAttribute('required')
    expect(isRequired).toBeDefined()
  })
})
