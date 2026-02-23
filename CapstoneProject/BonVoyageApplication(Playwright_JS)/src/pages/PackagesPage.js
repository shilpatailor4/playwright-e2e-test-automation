import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class PackagesPage extends BasePage{
    constructor(page){
        super(page);
        this.packagesLink = page.locator("//a[text()='Packages']");
        // page.getByRole("link", {'name: Packages'});
        this.viewDetailBtn = page.locator("a:has-text('View Detail')");

        this.packageCards = page.locator("//div[contains(@class,'MuiPaper-root')]");
        this.packageName = "//div[contains(@class,'MuiCardContent-root')]/child::div[2]";
        this.packageDays = "//div[contains(@class,'MuiCardContent-root')]/child::div[1]";
        this.packageLocation = "//div[contains(@class,'MuiCardContent-root')]/child::div[3]";
        this.packagePrice = "//div[contains(@class,'MuiCardContent-root')]/child::div[4]";
        this.wishlistAdded = page.locator("//div[text()='Package added to your wishlist']");
    }

    async clickPackageLink(){
        await this.packagesLink.click();
       
        await this.page.waitForLoadState('networkidle');
        await super.wait(10000);

    }

    // Fetch the selected package values
    async getCardValues(targetName) {
    // 1. Get all cards
    const cards = await this.packageCards.all();

    for (const packageCard of cards) {
        // 2. Fetch the title to check if it's the one we want
        const title = await packageCard.locator(this.packageName).innerText();

        // 3. Check if the title matches (using includes or match)
        if (title.includes(targetName)) {
            // 4. Fetch the rest of the data
            const days = await packageCard.locator(this.packageDays).innerText();
            const location = await packageCard.locator(this.packageLocation).innerText();
            const price = await packageCard.locator(this.packagePrice).innerText();

            // 5. IMPORTANT: Return the data object to the test
            return {
                title: title,
                days: days,
                location: location,
                price: price
            };
        }
    }
    // Throw error if no package was found
    throw new Error(`Package with name "${targetName}" not found!`);
}

    // Package added to the wishslist
     async selectPackageToWishlist(targetPackage){

        // const wishlistPackageName = /Paris Elegance Unveiled/;

        const cards = await this.packageCards.all();
        for(const packageCard of cards){
            const title = await packageCard.locator(this.packageName).innerText();
            if(title.match(targetPackage)){
                 await packageCard.getByLabel('Add to Wishlist').click();               
                 break; // Stop looping once found
            }
        }
        //verify the message - wishlist added
        await expect(this.wishlistAdded).toHaveText("Package added to your wishlist");
    }

    //Package - click on 'View Detail' and navigate to the detail page
    async selectPackageAndGoToDetails(targetPackage){

        // const cardPackageName = /London Extravaganza/;

        const cards = await this.packageCards.all();
        for(const packageCard of cards){
            const title = await packageCard.locator(this.packageName).innerText();
            if(title.match(targetPackage)){          
                 await packageCard.locator(this.viewDetailBtn).click();
                 break; // Stop looping once found
            }
        }
    }
}
