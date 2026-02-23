import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test.describe('Home Page Validation Tests', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });
});
