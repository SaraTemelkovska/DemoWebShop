import { test, expect } from '@playwright/test';

test('Adding new items to shopping cart', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Password').fill('test123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.click("[id='topcartlink']");
  await page.getByRole('link', { name: 'Books' }).first().click();
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.click("[id='topcartlink']");

});