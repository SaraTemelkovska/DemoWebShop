import { test, expect } from '@playwright/test';


test('register', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Register' }).click();

  await page.getByLabel('Female').click();
  await page.getByLabel('First Name').fill('Sarah');
  await page.getByLabel('Last Name').fill('Tem');
  await page.getByLabel('Email').fill('testisfunnn12345@gmail.com');

  await page.getByLabel('Password:', { exact: true }).fill('test12345');
  await page.getByLabel('Confirm password:').fill('test12345');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
});