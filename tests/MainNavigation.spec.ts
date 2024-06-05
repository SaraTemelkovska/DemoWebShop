import { test, expect } from '@playwright/test';


test('navigation', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Books' }).first().click();
  await page.getByRole('link', { name: 'Electronics' }).first().click();
  await page.getByRole('link', { name: 'Digital Downloads' }).first().click();
  await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
  await page.getByRole('link', { name: 'Tricentis', exact: true }).click();
  await page.getByRole('link', { name: 'Gift Cards' }).first().click();

});