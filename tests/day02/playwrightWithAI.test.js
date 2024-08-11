import { test, expect } from '@playwright/test';

test('Youtube Test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  const searchBox = await page.locator("//input[@id='search']");
  
  await searchBox.click();

  await searchBox.fill('AI Prompt Engineering');

  await searchBox.press('Enter');

  await page.waitForTimeout(3000); //pause for 5 seconds to allow video to load before checking results

  await page.locator("a.yt-simple-endpoint.inline-block[rel='null'] > yt-image > img[src*='_ZvnD73m40o']").click();

  await page.waitForTimeout(3000); //pause for 5 seconds to allow video to load before

});