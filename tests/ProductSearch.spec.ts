import { test, expect } from '@playwright/test';

test('search product', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('test123');
  await page.getByLabel('Password:').press('Enter');
  
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('book');
  await page.getByRole('button', { name: 'Search' }).click();
});