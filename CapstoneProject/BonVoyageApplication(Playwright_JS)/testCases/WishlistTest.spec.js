import { test, expect } from '@playwright/test';
import { LoginPage } from "../page-Objects/LoginPage.js";
import { PackagesPage } from "../page-Objects/PackagesPage.js";
import { WishlistPage } from "../page-Objects/WishlistPage.js";
import authData from "../auth/testData.json";

test.describe('Wishlist Functionality Tests', () => {
    let packagesPage;
    let wishlistPage;

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        packagesPage = new PackagesPage(page);
        wishlistPage = new WishlistPage(page);

        await loginPage.navigate();
        await loginPage.login(authData.validUser.email, authData.validUser.password);
        await loginPage.verifyLogoutOption();
    });

    test('Add a package to wishlist and then remove it', async ({ page }) => {
        const pkgCardName = authData.pkgCardName.targetPackage;

        // 1. Add to wishlist from Packages Page
        await packagesPage.clickPackageLink();
        await packagesPage.selectPackageToWishlist(pkgCardName);

        // 2. Navigate to Wishlist Page
        await wishlistPage.navigate();
        await expect(wishlistPage.pageTitle).toBeVisible();

        // 3. Verify the package is listed
        await wishlistPage.verifyPackageIsPresent(pkgCardName);

        // 4. Remove the package using the DeleteIcon
        await wishlistPage.removePackage(pkgCardName);

        // 5. Verify the card is removed from the UI
        await wishlistPage.verifyPackageIsRemoved(pkgCardName);
    });
});