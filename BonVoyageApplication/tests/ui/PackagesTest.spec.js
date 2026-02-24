import { test, expect } from '@playwright/test'
import { LoginPage } from '../../src/pages/LoginPage'
import { PackagesPage } from '../../src/pages/PackagesPage'
import { PackageDetailPage } from '../../src/pages/PackageDetailPage'
import authData from '../../src/testData/testData.json'

test.describe('Packages Comparison Tests', () => {
  let loginPage
  let packagesPage
  let packageDetailPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    packagesPage = new PackagesPage(page)
    packageDetailPage = new PackageDetailPage(page)

    // 1. Login to the application first
    await loginPage.navigate()

    // 2. Access data using the keys from your JSON file
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD)

    // 3. Verify the user is loggedIn
    await loginPage.verifyLogoutOption()
  })

  test('Navigate to packages and view detail for a specific package', async ({ page }) => {
    //Set the card package name and value get from json file
    const pkgName = authData.pkgCardName.targetPackage

    // 4. Go to Packages page
    await packagesPage.clickPackageLink()

    // 5. Fetch the values
    // const cardPackageName = 'London Extravaganza';
    const cardData = await packagesPage.getCardValues(pkgName)

    // 1. Log them for debugging
    // cardData is now the object returned from the loop above
    console.log(
      `Package: ${cardData.title}, Price: ${cardData.price}, Location: ${cardData.location}, Days: ${cardData.days}`,
    )

    // 2. Assertions
    expect(cardData.price).toContain('$')
    expect(cardData.location).toContain('France')
    // Use .days because that is the key we returned in the page class
    expect(cardData.days).toContain('Days')

    // // 4. Package added to the wishlist
    // await packagesPage.selectPackageToWishlist(pkgName);

    // 5. Select the package by name and navigate to package detail page
    await packagesPage.selectPackageAndGoToDetails(pkgName)

    // 6. Assertion: Verify we are on the detail page
    await packageDetailPage.navigateToDetailPage()

    //Book Package and verify confirmation message
    await packageDetailPage.bookingPackage()
  })
})
