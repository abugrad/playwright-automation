import { test } from '@playwright/test';

test('', async ({ page }) => {
  
    await page.goto('https://practice.cydeo.com/');

    const autoComplete = await page.locator("text ='Autocomplete'");

    const elementIsDisplayed = await autoComplete.isVisible();
    const elementIsDisabled = await autoComplete.isDisabled();

    console.log(elementIsDisplayed);
    console.log(elementIsDisabled);

});