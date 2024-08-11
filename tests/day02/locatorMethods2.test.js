import { test } from '@playwright/test';

test('InnerText method test', async ({ page }) => {
    // go to https://practice.cydeo.com/
    await page.goto('https://practice.cydeo.com/');

    // locating web element and assing it to abTesting value
    const abTesting = await page.locator("text='A/B Testing'");

    await abTesting.click();

    await page.waitForTimeout(1600);

    const paragraph = await page.locator("//p[contains(text(), 'Also known as split testing')]");

    const innerText = await paragraph.innerText();

    console.log(innerText);


});

test('inputValue Method test: only works with <input> or <textarea> or <select>', async ({ page }) => {

    // go to https://practice.cydeo.com/inputs
    await page.goto('https://practice.cydeo.com/inputs');

    // create locator variable named inpoutBox with xpath //input[@type='number']
    const inputBox = await page.locator("//input[@type='number']");

    await inputBox.fill("1200");

    await page.waitForTimeout(1600);

    const inputValue = await inputBox.inputValue();

    console.log(inputValue);




});

test('getAttribute method test: can get the value of an attribute of the element', async ({ page }) => {

    // go to https://practice.cydeo.com/inputs
    await page.goto('https://practice.cydeo.com/inputs');

    const cydeo = await page.locator("text='CYDEO'");

    const cydeoLink = await cydeo.getAttribute('href');

    console.log(cydeoLink);

//<a target="_blank" href="https://cydeo.com/">CYDEO</a>





});