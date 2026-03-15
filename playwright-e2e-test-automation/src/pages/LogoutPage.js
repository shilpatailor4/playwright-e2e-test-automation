import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class LogoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.logoutOption = page.getByRole("button", { name: "LOGOUT" });
  }

  async logoutToApp() {
    await this.logoutOption.click();
  }
}
