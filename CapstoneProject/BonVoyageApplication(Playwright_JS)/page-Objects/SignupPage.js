import { expect } from "@playwright/test";
import { BasePage } from "../util/BasePage";

export class SignupPage extends BasePage{
    constructor(page) {
        super(page);
        this.txt_username = page.locator("//input[@name='userName']");
        this.txt_useremail = page.locator("//input[@name='userEmail']");
        this.txt_userphone = page.locator("//input[@name='userPhone']");
        this.txt_password = page.locator("//input[@name='userPassword']");
        this.txt_confrmpassword = page.locator("//input[@name='confirmPassword']");
        this.txt_address = page.locator("//textarea[@name='userAddress']");
        this.registerBtn = page.locator("//button[text()='Register']");
    }

    async fillSignupForm(details) {
        await this.txt_username.fill(details.username);
        await this.txt_useremail.fill(details.email);
        await this.txt_userphone.fill(details.phone);
        await this.txt_password.fill(details.password);
        await this.txt_confrmpassword.fill(details.password);
        await this.txt_address.fill(details.address);
    }

    async clickSignupButton(){
        await this.registerBtn.click();
        await this.page.waitForURL(/.*signin/, { timeout: 10000 });
    }

    //Verify after signup navigate to signin page
    async verifyNavigateToLoginPage(){
        await expect(this.page).toHaveURL(/.*signin/); 
    }
}