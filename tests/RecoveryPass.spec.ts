import { test, expect } from '@playwright/test';

test('recovery pass', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByLabel('Your email address:').click();
  await page.getByLabel('Your email address:').fill('saratemmmmm@gmail.com');
  await page.getByRole('button', { name: 'Recover' }).click();
  await page.getByLabel('Your email address:').click();
  await page.getByLabel('Your email address:').fill('test@gmail.com');
  await page.getByRole('button', { name: 'Recover' }).click();
});