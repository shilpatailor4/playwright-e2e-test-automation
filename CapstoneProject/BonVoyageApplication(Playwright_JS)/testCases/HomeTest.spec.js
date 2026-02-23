import { test, expect } from '@playwright/test';
import { HomePage } from '../page-Objects/HomePage';

test.describe('Home Page Validation Tests', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });
});
