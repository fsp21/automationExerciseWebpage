import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.beforeEach('Navigate to the page', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Automation Exercise');
});

test('Sign Up Testing', async ({ page })  => {
  await page.getByText('Signup / Login').click();
  await page.waitForURL('https://automationexercise.com/login')
  await page.getByPlaceholder('Name').fill('Test Name')
  await page.locator('.signup-form').getByPlaceholder('Email Address').fill('test@address.io')
  await page.getByRole('button', {name: 'Signup'}).click()
})