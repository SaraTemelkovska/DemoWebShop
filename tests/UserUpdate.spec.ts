import { test, expect } from '@playwright/test';

test('user update', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Email:').press('Tab');
  await page.getByLabel('Password:').fill('test123');
  await page.getByLabel('Password:').press('Enter');
  await page.getByRole('link', { name: 'saratemmmmm@gmail.com' }).click();
  await page.getByLabel('First name:').click();
  await page.getByLabel('First name:').fill('Sarahhh');
  await page.getByRole('button', { name: 'Save' }).click();
});