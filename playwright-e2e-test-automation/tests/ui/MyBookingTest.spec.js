import { test, expect } from '@playwright/test'
import { MyBookingPage } from '../../src/pages/MyBookingPage'
import { LoginPage } from '../../src/pages/LoginPage'
import { PackagesPage } from '../../src/pages/PackagesPage'
import { PackageDetailPage } from '../../src/pages/PackageDetailPage'
import authData from '../../src/testData/testData.json'

test.describe('MyBooking functionality test', () => {
  let myBookingPage
  let packagesPage
  let packageDetailPage

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    myBookingPage = new MyBookingPage(page)
    packagesPage = new PackagesPage(page)
    packageDetailPage = new PackageDetailPage(page)

    await loginPage.navigate()
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD)
    await loginPage.verifyLogoutOption()
  })

  test('Verify booking or no booking', async ({ page }) => {
    const packageName = authData.pkgCardName.targetPackage

    //Navigate to the MyBookingPage
    await myBookingPage.navigate()

    //Verify page title
    await myBookingPage.verifyPageTitle()

    // Pass the variable into the verification method
    await myBookingPage.verifyBookingStatus(packageName)
  })
})
