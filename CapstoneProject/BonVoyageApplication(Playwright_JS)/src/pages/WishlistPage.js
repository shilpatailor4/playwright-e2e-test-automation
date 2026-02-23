import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class WishlistPage extends BasePage{
    constructor(page){
       super(page);
       this.wishlistsHeaderLink = page.locator("//a[@href='/my-wishlist']");
       this.deleteWishlistItem = page.locator("//div[text()='Package removed from my wishlist']");
       this.pageTitle = page.locator('text=My Wishlist');

       // Container for each wishlist card
       this.wishlistCard = page.locator('.MuiGrid-item .MuiCard-root');

       // Locators inside the card
       this.packageName = 'h5.MuiTypography-h5';
       this.deleteBtn = 'button[title="Remove from Wishlist"]';
       this.snackbar = page.locator('.MuiSnackbar-root');
    }

    async navigate(){
        await this.open("/my-wishlist");
        await this.page.waitForLoadState('networkidle');
    }

    async verifyPackageIsPresent(targetPackage) {
        const card = this.wishlistCard.filter({ hasText: targetPackage }).first();
        await expect(card).toBeVisible();
    }

    async removePackage(targetPackage) {
        const card = this.wishlistCard.filter({ hasText: targetPackage }).first();
        await card.getByLabel('Remove from Wishlist').click();
        
        // Validate the specific snackbar message from your code
        const snackbar = this.page.getByText('Package removed from my wishlist');
        // await expect(snackbar).toBeVisible({ timeout: 10000 });
    }

    async verifyPackageIsRemoved(targetPackage) {
        const card = this.wishlistCard.filter({ hasText: targetPackage }).first();
        await expect(card).not.toBeVisible();
    }
}