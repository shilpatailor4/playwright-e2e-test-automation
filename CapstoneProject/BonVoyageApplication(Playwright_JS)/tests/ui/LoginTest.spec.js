import {test, expect} from '@playwright/test'
import { LoginPage  } from '../../src/pages/LoginPage';

test.describe('Login Page Assertions', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Verify Sign Up link is visible', async () => {
        await loginPage.clickLoginSignUp();
        await loginPage.verifySignUpLinkVisible();
    });

    test('Successful Login displays Logout option', async () => {
        //Access data using the keys from your JSON file
        await loginPage.login(
         process.env.USER_EMAIL,
         process.env.USER_PASSWORD

        );
        await loginPage.verifyLogoutOption();
    });

    test('Login form should have correct input types', async () => {
        await loginPage.clickLoginSignUp();
        //check: Ensure password field masks characters
        await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
    });

});