import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config("./.env");

test('Library Login', async ({ page }) => {
  
    //go to https://library2.cydeo.com/
    await page.goto(process.env.LIBRARY_URL);

    const username = await page.locator("//input[@id='inputEmail']");

    const password = await page.locator("//input[@id='inputPassword']");

    //create a locator variable named singInBtn with this xpath //button[text()='Sign in']
    const singInBtn = await page.locator("//button[text()='Sign in']");

    await username.fill(process.env.LIBRARY_STUDENT_USERNAME);
    await password.fill(process.env.LIBRARY_STUDENT_PASSWORD);
    await singInBtn.click();

    await page.waitForTimeout(2000);


});