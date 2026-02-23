import { test } from '@playwright/test';
import { FAQPage  } from '../../src/pages/FAQPage';

test.describe('FAQ Bulk Validation', () => {

    let faqPage;
    test('User should be able to expand every question and see an answer', async ({ page }) => {
        faqPage = new FAQPage(page);
        
        // 1. Navigate to the page
        await faqPage.naviagte();

        // 2. Verify page title
        await faqPage.verifyPageTitle();

        // 3. Run the bulk validation loop
        await faqPage.validateAllAccordions();
    });
});