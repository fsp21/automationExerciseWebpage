import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.beforeEach('Navigate to the page', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Automation Exercise');
});

test('Sign Up Testing', async ({ page })  => {

  // Navigate to the signup page and add credentials
  await page.getByText('Signup / Login').click();
  await page.waitForURL('https://automationexercise.com/login')
  await page.getByPlaceholder('Name').fill('Malenia, Blade of Miquella')
  await page.locator('.signup-form').getByPlaceholder('Email Address').fill('malenia@eldenring.boss')
  await page.getByRole('button', {name: 'Signup'}).click()
  expect(page.url()).toEqual('https://automationexercise.com/signup')

  // Fill in account information form
  await expect(page.getByLabel('Name *', { exact: true })).toHaveValue('Malenia, Blade of Miquella')
  await expect(page.getByLabel('Email *', { exact: true })).toHaveValue('malenia@eldenring.boss')
  await page.getByRole('radio', {name: 'Mr.'}).check()
  await page.getByLabel('Password *', { exact: true }).fill('strong-passWorD1')


})