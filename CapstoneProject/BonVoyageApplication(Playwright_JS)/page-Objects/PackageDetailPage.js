import { expect } from "@playwright/test";
import { BasePage } from "../util/BasePage.js";

export class PackageDetailPage extends BasePage{
    constructor(page){
        super(page);
        //Detail page
        this.packageDetailHeaderName = page.locator("//div[contains(@class,'MuiCardHeader-content')]/span");
        this.bookNowBtn = page.locator("//a[contains(@href,'/book-package/')]");
        this.txt_name = page.locator("//input[@name='name']");
        this.txt_phone = page.locator("//input[@name='phone']");
        this.txt_email = page.locator("//input[@name='email']");
        this.txt_address = page.locator("//input[@name='address']");
        this.txt_totalGuest = page.locator("//input[@name='person']");
        this.txt_rooms = page.locator("//input[@name='roomd']");
        this.confrmBookingBtn = page.locator("//button[text()='Confirm Booking']");
        this.confrmMessage = page.locator("//div[contains(@class, 'MuiStack-root')]/child::p");
    }

    // Navigate to the package detail page
    async navigateToDetailPage(){
        await expect(this.packageDetailHeaderName).toBeVisible();
        await expect(this.page).toHaveURL(/.*packages\/.*/); // Matches /packages/123      
    }

    // Booking package and verify confirmation message
    async bookingPackage(){
       await expect(this.bookNowBtn).toBeEnabled();
       await this.bookNowBtn.first().click();

       //traveller information
       await this.txt_name.fill("David");
       await this.txt_phone.fill("8976566788");
       await this.txt_email.fill("david@gmail.com");
       await this.txt_address.fill("Gurgram, India");
       await this.txt_totalGuest.fill("2");
       await this.txt_rooms.fill("1");
       await this.confrmBookingBtn.click();

       //fetch and verify confirmation message
       const msg = await this.confrmMessage.textContent();
       console.log("Confirmation msg: ", msg);
       await expect(msg).toBe("Thank You. Your booking order is confirmed now.");
       
    }
}