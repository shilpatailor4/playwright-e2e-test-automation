import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class PackageDetailPage extends BasePage {
  constructor(page) {
    super(page);

    // Header / Titles
    this.packageDetailHeaderName = page.locator(".MuiCardHeader-content span");
    this.travellerInfoHeader = page.getByText("Traveller Information");

    // Action Buttons
    this.bookNowBtn = page.getByRole("link", { name: /book now/i });
    this.confrmBookingBtn = page.getByRole("button", {
      name: "Confirm Booking",
    });

    // Form Fields
    this.txt_name = page.locator('input[name="name"]');
    this.txt_phone = page.locator('input[name="phone"]');
    this.txt_email = page.locator('input[name="email"]');
    this.txt_address = page.locator('input[name="address"]');
    this.txt_date = page.locator('input[name="date"]');

    // These two have clear MUI labels
    this.txt_totalGuest = page.getByLabel(/total guests/i);
    this.txt_rooms = page.getByLabel(/rooms required/i);

    // Success/Confirmation Message
    this.confrmMessage = page.locator(".MuiStack-root p");
  }

  // Navigate to the package detail page
  async navigateToDetailPage() {
    await this.page.waitForURL("**/packages/**");
    await expect(this.packageDetailHeaderName).toBeVisible();
    await expect(this.page).toHaveURL(/.*packages\/.*/); // Matches /packages/123
  }

  // Booking package and verify confirmation message
  async bookingPackage() {
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
    expect(msg).toBe("Thank You. Your booking order is confirmed now.");
  }
}
