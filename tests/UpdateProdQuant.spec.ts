import { test, expect } from '@playwright/test';

test('update product quantity', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Email:').press('Tab');
  await page.getByLabel('Password:').fill('test123');
  await page.getByLabel('Password:').press('Enter');

  await page.click("[id='topcartlink']");
  await page.locator('input[name="itemquantity4349190"]').click();
  await page.locator('input[name="itemquantity4349190"]').fill('3');
  await page.getByRole('button', { name: 'Update shopping cart' }).click();
});