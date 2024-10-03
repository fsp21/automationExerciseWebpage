import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

  let email = faker.internet.email();
  let password = faker.internet.password();
  let firstName = faker.person.firstName();
  let lastName = faker.person.lastName();
  let fullName = `${firstName} ${lastName}`;

test('Check if the first item from Brands list is visible', async ({ page }) => {

    // Navigate to website
  await page.goto('https://automationexercise.com');
  await expect(page).toHaveTitle('Automation Exercise');

  await page.locator('.container').getByText('Products').click();
  expect(page.url()).toEqual('https://automationexercise.com/products');

  const listOfBrands = await page.locator('.brands_products').getByRole('listitem').all();
  await expect(listOfBrands[0]).toBeVisible();

})
  