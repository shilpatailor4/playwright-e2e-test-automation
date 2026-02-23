import {test, expect} from '@playwright/test'
import { MyBookingPage } from '../../src/pages/MyBookingPage';
import {LoginPage} from "../../src/pages/LoginPage";
import authData from "../../src/testData/testData.json";

test.describe('MyBooking functionality test', () => {

    let myBookingPage;

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        myBookingPage = new MyBookingPage(page);

        await loginPage.navigate();
        await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        await loginPage.verifyLogoutOption();
    });

    test('Verify booking or no booking', async ({ page }) => {

        //Navigate to the MyBookingPage
        await myBookingPage.navigate();

        //Verify page title
        await myBookingPage.verifyPageTitle();

        //Verify no booking is there
        await myBookingPage.verifyNoBooking();
    });

});
