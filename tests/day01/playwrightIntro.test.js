import {test} from '@playwright/test';

test('Search for playwright on google',async({page})=> {

   await page.goto('http://google.com/');
  
   const searchInput = await page.locator("//textarea[@id='APjFqb']");
 
   //await searchInput.type('Playwright Automation');
   await searchInput.fill('Playwright Automation');
   
   await searchInput.press('Enter');
   
   await page.waitForTimeout(2000); //pause for 2 seconds 
   

  });
