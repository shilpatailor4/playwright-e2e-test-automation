import {test, expect} from '@playwright/test'
import {LoginPage} from '../page-Objects/LoginPage'
import {HomePage} from '../page-Objects/HomePage'

test.describe.serial('Validate Home page', async () =>{
    
    test("Navigate to the package page", async ({page}) => {
        await page.goto("http://localhost:3001/");
        const homepge = new HomePage(page);
        await homepge.gotoPackages();
        const packagePageCurrentUrl = await page.url();
        expect(await packagePageCurrentUrl).toBe("http://localhost:3001/all-packages");      
    });


    
});