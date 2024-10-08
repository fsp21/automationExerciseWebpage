import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

  let email = faker.internet.email();
  let password = faker.internet.password();
  let firstName = faker.person.firstName();
  let lastName = faker.person.lastName();
  let fullName = `${firstName} ${lastName}`;
  
test('Signup Flow', async ({ page })  => {

  // Navigate to website
  await page.goto('https://automationexercise.com');
  await expect(page).toHaveTitle('Automation Exercise');

  // Navigate to the signup page and add credentials
  await page.getByText('Signup / Login').click();
  await page.waitForURL('https://automationexercise.com/login')
  await page.getByPlaceholder('Name').fill(fullName)
  await page.locator('.signup-form').getByPlaceholder('Email Address').fill(email)
  await page.getByRole('button', {name: 'Signup'}).click()
  expect(page.url()).toEqual('https://automationexercise.com/signup')

  // Fill in account information form
  await expect(page.getByLabel('Name *', { exact: true })).toHaveValue(fullName)
  await expect(page.getByLabel('Email *', { exact: true })).toHaveValue(email)
  await page.getByRole('radio', {name: 'Mr.'}).check()
  await page.getByLabel('Password *', { exact: true }).fill(password)
  await page.locator('#days').selectOption('1')
  await page.locator('#months').selectOption('February')
  await page.locator('#years').selectOption('1900')
  await page.getByRole('checkbox', {name: 'newsletter'}).check()
  await page.getByLabel('Receive special offers from our partners!').check()
  await page.getByText('First Name').fill(firstName)
  await page.getByText('Last Name').fill(lastName)
  await page.getByText('Address *').fill(faker.location.streetAddress())
  await page.locator('#country').selectOption('New Zealand')
  await page.getByText('State *').fill(faker.location.state())
  await page.getByText('City *').fill(faker.location.city())
  await page.locator('#zipcode').fill(faker.location.zipCode())
  await page.getByText('Mobile Number').fill(String(faker.number.bigInt()))
  await page.getByRole('button', {name: 'Create Account'}).click()
  expect(page.url()).toBe('https://automationexercise.com/account_created')
})
