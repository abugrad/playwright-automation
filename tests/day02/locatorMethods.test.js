import { test } from '@playwright/test';

test('check method test', async ({ page }) => {

    //go to https://practice.cydeo.com/checkboxes
    await page.goto('https://practice.cydeo.com/checkboxes');

    //create a locator variable named checkBox1 with this xpat //input[@id='box1']
    const checkBox1 = await page.locator("//input[@id='box1']");

   await checkBox1.check();

   //pause the automation for 2 seconds
   await page.waitForTimeout(2000);

    //create a locator variable named checkBox1 with this xpat //input[@id='box1']
    const checkBox2 = await page.locator("//input[@id='box2']");

    await checkBox2.uncheck();

    await page.waitForTimeout(2000);

});


test('selectOptions Method', async ({ page }) => {
  

    // go to https://practice.cydeo.com/dropdown
    await page.goto('https://practice.cydeo.com/dropdown');

    const simpleDropDown = await page.locator("//select[@id='dropdown']");

    await page.waitForTimeout(2000);

    //select by value:
    //await simpleDropDown.selectOption("1");

    // select by index
    //await simpleDropDown.selectOption({ index: 1 });

    // select by text
    await simpleDropDown.selectOption({ label: "Option 1" });
    
    await page.waitForTimeout(2000);

});