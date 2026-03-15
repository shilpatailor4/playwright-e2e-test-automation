import { expect } from "@playwright/test";
import { BasePage } from "../../src/util/BasePage";

export class FAQPage extends BasePage {
  constructor(page) {
    super(page);
    this.faqTab = page.getByRole("link", { name: "FAQ" }).first();
    this.pageTitle = page.getByText("FAQ", { exact: true }).first();
    this.frequentQuestionsTitle = page.locator("//p[text()='Frequent Asked']");

    // Accordion Locators
    this.accordions = this.page.locator(".MuiAccordion-root");
    //Store selectors as STRINGS for use inside loops
    this.accordionContentSelector = ".MuiAccordionSummary-content";
    this.accordionDetailsSelector = ".MuiAccordionDetails-root";
  }

  async naviagte() {
    await this.open("/faq");
    await this.page.waitForLoadState("networkidle");
    await expect(this.faqTab).toBeVisible();
  }

  async verifyPageTitle() {
    await expect(this.pageTitle).toBeVisible();
  }

  async validateAllAccordions() {
    // 1. Get all accordion elements
    const accordionList = await this.accordions.all();
    console.log(`Found ${accordionList.length} FAQ items.`);

    for (const accordion of accordionList) {
      // 2. Get the question text for logging/identification
      const questionText = await accordion
        .locator(this.accordionContentSelector)
        .innerText();

      // 3. Click to expand
      await accordion.click();

      // 4. Validate the answer section becomes visible
      const answerSection = accordion.locator(this.accordionDetailsSelector);
      await expect(answerSection).toBeVisible();

      // 5. Validate the answer contains text (is not empty)
      const answerText = await answerSection.innerText();
      expect(answerText.length).toBeGreaterThan(0);

      console.log(`Verified: ${questionText}`);
    }
  }
}
