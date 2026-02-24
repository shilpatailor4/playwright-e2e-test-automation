import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loginSignupBtn = page.getByRole("button", { name: "LOGIN / SIGNUP" });
    this.emailInput = page.getByRole("textbox", { name: "Email", exact: true });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.signInBtn = page.getByRole("button", { name: "SIGN IN" });
    this.signUpLink = page.getByRole("link", { name: "Sign Up" });
    this.logoutOption = page.getByRole("button", { name: "LOGOUT" });
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

  async login(email, password) {
    await this.clickLoginSignUp();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }

  async verifyLogoutOption() {
    await expect(this.logoutOption).toBeVisible({ timeout: 10000 });
  }
}
