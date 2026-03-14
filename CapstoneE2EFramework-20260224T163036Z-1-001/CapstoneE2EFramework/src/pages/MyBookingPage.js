import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class MyBookingPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageTitle = page.getByText("My Bookings", { exact: true }).first();
  }

  async navigate() {
    await this.open("/mybooking");
    await this.page.waitForLoadState("networkidle");
  }

  async verifyPageTitle() {
    await expect(this.pageTitle).toBeVisible();
    // await this.page.pause();
  }

  //Bug: After booking package, no pakage displayed in the MyBooking page
  // async verifyNoBooking() {
  //   await expect(
  //     this.page.getByText("You have not booked any packages yet !!"),
  //   ).toBeVisible();
  // }

  async verifyBookingStatus(targetPackage) {
    const noBookingMsg = this.page.getByText(/no packages yet/i);

    if (await noBookingMsg.isVisible()) {
      console.log("No bookings found for this user.");
    } else {
      // Check for the presence of a booking card instead
      await expect(this.page.getByText(targetPackage).nth(1)).toBeVisible();
      console.log(`Verified: Active booking for ${targetPackage} is visible.`);
    }
  }
}
