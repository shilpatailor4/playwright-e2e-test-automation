import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";
import { LoginPage } from "./LoginPage";
import { PackagesPage } from "./PackagesPage";
import { error } from "node:console";
import { FAQPage } from "./FAQPage";

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginSignupBtn = page.locator("//button[text()='Login / SignUp']");
    this.viewPackagesBtn = page.locator("//a[text()='View Packages']");
    this.searchDestination = page.locator(
      "//input[@placeholder='Search the Destination']",
    );
    this.popularDestinations = page.locator(
      "//p[text()='Popular Destinations']/following-sibling::div//p[2]",
    );
    this.travelTipsAdvice = page.locator(
      "(//p[text()='Travel Tips and Advice']/following::div/following::p)[1]",
    );
    this.travelTipsAuthor = this.travelTipsAdvice.locator(
      "/following-sibling::div/div[2]/child::p",
    );
    this.packagesHeaderLink = page.locator("//a[text()='Packages']");
    this.faqHeaderLink = page.locator("//a[@href='/faq']");
    this.myBookingHeaderLink = page.locator("//a[@href='/mybooking']");
    this.projectLogo = page.locator("//p[text()='BonVoyage']");
  }

  async navigate() {
    await this.page.goto("/");
    await this.page.waitForLoadState("networkidle");
  }

  async searchForDestination(city) {
    await this.searchInput.fill(city);
    await this.page.keyboard.press("Enter");
  }

  async displayedViewPackagesBtn() {
    await this.viewPackagesBtn.click();
    if (await this.page.url().includes("/all-packages")) {
      return new PackagesPage(this.page);
    }
    throw new Error("Page is not navigate to the package page!");
  }

  async clickLoginSignupLink() {
    await this.loginSignupBtn.click();
    if (await this.page.url().includes("/signin")) {
      return new LoginPage(this.page);
    }
    throw new Error("SignIn page is not found!");
  }

  async gotoPackages() {
    this.packagesHeaderLink.click();
    if (this.page.url().includes("/all-packages")) {
      return new PackagesPage(this.page);
    }
    throw new Error("Page is not navigate to the MyBooking page!");
  }

  async gotoMyBooking() {
    this.myBookingHeaderLink.click();
    if (this.page.url().includes("/mybooking")) {
      return new MyBookingPage(this.page);
    }
    throw new Error("Page is not navigate to the MyBooking page!");
  }

  async gotoFAQ() {
    this.faqHeaderLink.click();
    if (this.page.url().includes("/faq")) {
      return new FAQPage(this.page);
    }
    throw new Error("Page is not navigate to the FAQ page!");
  }
}
