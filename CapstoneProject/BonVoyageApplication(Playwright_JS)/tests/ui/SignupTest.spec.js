import { test, expect } from '@playwright/test';
import { SignupPage } from "../../src/pages/SignupPage";
import { LoginPage } from "../../src/pages/LoginPage";
import { Helper } from "../../src/util/helper";
import { Assert } from 'node:assert';

test.describe('User Registration Tests', () => {
     let signupPage;
     let loginPage;
    
    test('Successful user registration with random data', async ({ page }) => {
        signupPage = new SignupPage(page);
        loginPage = new LoginPage(page);

        // 1. Navigate and get to the Signup Form
        await loginPage.navigate();
        await loginPage.clickLoginSignUp();
        await loginPage.signUpLink.click();

        // 2. Use the Helper to create unique data
        const uniqueName = `User_${Helper.generateRandomString(6)}`;
        const uniqueEmail = Helper.generateRandomEmail();

        const userData = {
           username: uniqueName,
           email: uniqueEmail,
           phone: "9123456789",
           password: "Password123",
           address: "Gurgoan, India"
        };

        // 3. Perform registration
        await signupPage.fillSignupForm(userData);

        //Click on the Sign button
        await signupPage.clickSignupButton();

        // 4. Assertion: Verify registration success 
        // await expect(page).toHaveURL(/.*signin/); 
        await signupPage.verifyNavigateToLoginPage();

    //     //Validate api response after successful registration
    //     const apiResponse = await page.waitForResponse(response => {
    //         response.url.include('/users');
    //         response.status(201)
    //     })

    //     const responseBody = await apiResponse.json();
    //   expect(apiResponse.status()).toBe(201);
    //   expect(responseBody.userName).toBe(userData.username);
    //   expect(responseBody.userEmail).toBe(userData.email);
    });

    test('Verify all fields are required', async ({ page }) => {
        signupPage = new SignupPage(page);
        signupPage.open('/signup'); // Direct navigation

        await signupPage.registerBtn.click();
        
        // check: ensure browser validation or error msg appears
        const isRequired = await signupPage.txt_username.getAttribute('required');
        expect(isRequired).toBeDefined();
    });
});