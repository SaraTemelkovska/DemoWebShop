import { test, expect } from '@playwright/test';

test('filtering', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('saratemmmmm@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('test123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByRole('link', { name: 'Electronics' }).first().click();
  await page.getByRole('link', { name: 'Picture for category Camera,' }).click();
  await page.locator('#products-orderby').selectOption('https://demowebshop.tricentis.com/camera-photo?orderby=10');
  await page.locator('#products-orderby').selectOption('https://demowebshop.tricentis.com/camera-photo?orderby=5');
  await page.locator('#products-orderby').selectOption('https://demowebshop.tricentis.com/camera-photo?orderby=6');
  await page.locator('#products-pagesize').selectOption('https://demowebshop.tricentis.com/camera-photo?orderby=6&pagesize=4');
});