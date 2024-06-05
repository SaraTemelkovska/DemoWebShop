import { test, expect } from '@playwright/test';

test('add new address', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('test123');
  await page.getByLabel('Password:').press('Enter');

  await page.getByRole('link', { name: 'saratemmmmm@gmail.com' }).click();
  await page.getByRole('link', { name: 'Addresses' }).first().click();
  await page.getByRole('button', { name: 'Add new' }).click();
  await page.getByLabel('First name:').click();
  await page.getByLabel('First name:').fill('Test Address');
  await page.getByLabel('First name:').press('Tab');
  await page.getByLabel('Last name:').fill('Test');
  await page.getByLabel('Last name:').press('Tab');
  await page.getByLabel('Email:').fill('testing@gmail.com');
  await page.getByLabel('Country:').selectOption('159');
  await page.getByLabel('City:').click();
  await page.getByLabel('City:').fill('Bitola');
  await page.getByLabel('Address 1:').click();
  await page.getByLabel('Address 1:').fill('Pitu Guli');
  await page.getByLabel('Zip / postal code:').click();
  await page.getByLabel('Zip / postal code:').fill('1000');
  await page.getByLabel('Phone number:').click();
  await page.getByLabel('Phone number:').fill('+387569998');
  await page.getByRole('button', { name: 'Save' }).click();
});