import { test, expect } from '@playwright/test';

test('checkout', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Email:').press('Tab');
  await page.getByLabel('Password:').fill('test123');
  await page.getByLabel('Password:').press('Enter');

   await page.click("[id='topcartlink']");
  await page.locator('#termsofservice').check();
  
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByLabel('Select a billing address from').selectOption('3690101');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Select a shipping address').selectOption('3690101');
  await page.locator('#shipping-buttons-container').click();

  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('#checkout-shipping-method-load').getByRole('list').locator('div').filter({ hasText: 'Next Day Air (0.00)' }).click();
  await page.getByLabel('Next Day Air (0.00)').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Check / Money Order (5.00)').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});