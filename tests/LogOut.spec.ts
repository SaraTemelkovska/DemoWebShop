import { test, expect } from '@playwright/test';


test('log in and out', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByLabel('Email').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Password').fill('test123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();

});
