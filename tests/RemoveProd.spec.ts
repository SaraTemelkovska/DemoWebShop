import { test, expect } from '@playwright/test';

test('remove product from cart', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();

  await page.getByLabel('Email:').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Email:').press('Tab');
  await page.getByLabel('Password:').fill('test123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.click("[id='topcartlink']");
  await page.locator('td').filter({ hasText: 'Remove:' }).first()
  await page.getByRole('checkbox',)
  await page.check('input[type=checkbox]:nth-child(2)')
  await page.getByRole('button', { name: 'Update shopping cart' }).click();
});