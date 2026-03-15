import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";
import { faker } from "@faker-js/faker";

export class SignupPage extends BasePage {
  constructor(page) {
    super(page);
    this.txt_username = page.getByLabel("Name", { exact: true });
    this.txt_useremail = page.getByLabel("Email", { exact: true });
    this.txt_userphone = page.getByLabel("Phone", { exact: true });
    this.txt_password = page.getByLabel("Password", { exact: true });
    this.txt_confrmpassword = page.getByLabel("Confirm Password");
    this.txt_address = page.getByLabel("Address");
    this.registerBtn = page.getByRole("button", {
      name: "Register",
      exact: true,
    });
  }

  async register(userData) {
    await this.txt_username.fill(userData.username);
    await this.txt_useremail.fill(userData.email);
    await this.txt_userphone.fill(userData.phone);
    await this.txt_password.fill(userData.password);
    await this.txt_confrmpassword.fill(userData.password);
    await this.txt_address.fill(userData.address);
  }

  async clickSignupButton() {
    await this.registerBtn.click();
    await this.page.waitForURL(/.*signin/, { timeout: 10000 });
  }
}
