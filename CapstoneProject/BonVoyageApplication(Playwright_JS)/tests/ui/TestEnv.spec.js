import {test} from '@playwright/test'

test.describe("Test validation", () => {


    test('test', async ({page}) => {
        console.log(process.env.APP_BASE_URL);
     console.log(process.env.USER_EMAIL);

     await page.goto('/');
    })
    


     
    
});