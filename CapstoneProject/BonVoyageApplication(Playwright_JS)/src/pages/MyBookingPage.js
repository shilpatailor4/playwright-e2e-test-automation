import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class MyBookingPage extends BasePage{
    constructor(page){
        super(page);
        this.pageTitle = page.locator("//p[text()='My Bookings']");
    }

     async navigate(){
        await this.open("/mybooking");
        await this.page.waitForLoadState('networkidle');
    }

    async verifyPageTitle(){
        await expect(this.pageTitle).toBeVisible();
    }

    //Bug: After booking package, no pakage displayed in the MyBooking page
    async verifyNoBooking(){
        await expect(this.page.getByText("You have not booked any packages yet !!")).toBeVisible();
    }
}