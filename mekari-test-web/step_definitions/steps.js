const { I, loginPage, checkoutPage } = inject();

// Login step swaglabs
Given('I an on the home page', async () => {
  I.amOnPage('/')
  await loginPage.validateHomePage();
});

Then('I validate the tittle of the page along with the elements', () => {
  loginPage.verifyHomePageElements();
});

When(/^I enter the (.*) and (.*)$/, (username,password) => {
  loginPage.enterUserNameAndPassword(username,password);
});

Then('I click on login button',() => {
  loginPage.clickLoginButton();
});

Then('I should be able to login successfully', () => {
  loginPage.verifyLoginSuccessfully()
});

Then('I should not be able to log in', () => {
  loginPage.verifyNotLoginSuccessfully()
});

// checkout step swaglabs
Given('I go to the cart page', async () => {
  I.amOnPage('/cart.html')
  await checkoutPage.verifyCheckoutPage();
});

Given('I add the first item to the cart', () => {
  checkoutPage.clickAddToChartFirstItem();
});

Given('I verify that the product has been successfully added to the cart', async () => {
  await checkoutPage.verifyAddItemCheckoutPage();
});

Given('I remove product from cart', () => {
  checkoutPage.clickRemoveItem();
});

Given('I verify that the product has been successfully remove to the cart', async() => {
  await checkoutPage.verifyRemoveItemCheckoutPage();
});

Given('I click checkout button', () => {
  checkoutPage.clickCheckout();
});

Given('I am on checkout proccess page', () => {
  checkoutPage.verifyCheckoutProccessPage();
});


Given('I click cancel checkout proccess', () => {
  checkoutPage.clickCancelCheckout();
});

Given('I am on chart page', () => {
  checkoutPage.verifyCheckoutPage();
});

When(/^I fill information (.*) for checkout proccess$/, (condition) => {
  let firstName = 'Hartanto';
  let lastName = 'Setiawan';
  let postalCode = '63217';
  
  if (condition === 'empty_firstname') {
    firstName = 'empty';
  }
  if (condition === 'empty_lastname') {
    lastName = 'empty';
  }
  if (condition === 'empty_postalcode') {
    postalCode = 'empty';
  }
  if (condition === 'empty_all') {
    firstName = 'empty';
    lastName = 'empty';
    postalCode = 'empty';
  }
  checkoutPage.fillCheckoutProccessPage(firstName, lastName, postalCode);
});

Given('I click continue in checkout proccess page', () => {
  checkoutPage.clickContinueButton();
});

Given('I am on checkout confirmation page', () => {
  checkoutPage.verifyCheckoutConfirmationPage();
});

Given('I click finish checkout', () => {
  checkoutPage.clickFinishCheckout();
});

// API Step 
Given('the Reqres API endpoint', async () => {
  I.amOnPage('https://reqres.in/')
});

Given('I send a GET request to the users endpoint', async () => {
  I.amOnPage('/api/users?page=2')
});

