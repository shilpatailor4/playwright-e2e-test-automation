import {test, expect} from '@playwright/test'
import { MyBookingPage } from '../page-Objects/MyBookingPage';
const {LoginPage} = require("../page-Objects/LoginPage")
import authData from "../auth/testData.json";

test.describe('MyBooking functionality test', () => {

    let myBookingPage;

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        myBookingPage = new MyBookingPage(page);

        await loginPage.navigate();
        await loginPage.login(authData.validUser.email, authData.validUser.password);
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
