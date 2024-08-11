import { test } from '@playwright/test';

test('Search for KSU on google', async ({ page }) => {
  //go to google website
  await page.goto('http://google.com/');

  //find search box and type 'KSU'
  const searchBox = await page.locator('//textarea[@name="q"]');
  
  await searchBox.fill('KSU');

  await searchBox.press('Enter');

  

 

});