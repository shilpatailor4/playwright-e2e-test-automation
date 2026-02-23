// util/BasePage.js
import { expect } from "@playwright/test";

export class BasePage {
    constructor(page) {
        this.page = page;
        // Elements that appear on EVERY page (like a header or footer)
        this.logo = page.locator("//p[text()='BonVoyage']/ancestor::a");
        // this.footer = page.locator('footer');
    }

    // Shared method to navigate
    async open(path = "") {
        await this.page.goto(`http://localhost:3001${path}`);
    }

    // Shared method to wait for an element and click
    async waitAndClick(locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    // Common assertion
    async verifyPageTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async wait(ms) {
        await this.page.waitForTimeout(ms);
    }
}