import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class LoginPage extends BasePage{

    constructor(page){
        super(page);
        this.emailInput = page.locator("//input[@name='email']");
        this.passwordInput = page.locator("//input[@name='password']");
        this.signInBtn = page.locator("//button[text()='Sign In']");
        this.signUpLink = page.locator("//a[contains(text(),'Sign Up')]");
        this.loginSignupBtn = page.locator("//button[text()='Login / SignUp']");
        this.logoutOption = page.getByRole('button', { name: 'Logout' })
    }

    async navigate() {
        await this.open();
    }

    async clickLoginSignUp() {
        await this.loginSignupBtn.click();
    }

    async verifySignUpLinkVisible() {
        await expect(this.signUpLink).toBeVisible();
    }

    async login(email, password){
        await this.clickLoginSignUp();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInBtn.click();
    }

    async verifyLogoutOption(){       
        await expect(this.logoutOption).toBeVisible({ timeout: 10000 });
    }
}