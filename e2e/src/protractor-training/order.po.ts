import { browser, by, element, protractor } from 'protractor';

export class Order {
  register = {
    // Add elements and/or functions here
    buttonLogin: element(by.css('#login')),
    buttonLogout: element(by.css('#logout'))
  };

  order = {
    // On header
    inputSearch: element(by.css('#search')),
    buttonSearch: element(by.css('[data-test="header-search-submit-button"]')),
    amountOfProducts: element(by.css('.UI.KIT-badge')),
    checkoutButton: element(by.css('[href="/basket"]')),
    amountOfArticlesText: element(by.css('.h-bol-subtext-color.mini_details')),

    // On Product screen
    linkProduct: element(by.css('[data-test="link-to-bop"]')),
    textProductPrice: element(by.css('.product__price strong')),
    inputQuantity: element(
      by.css('.KIT-bop__form__buy-box__basket-form-input')
    ),
    buttonAddToBasket: element(by.css('[data-test="fop-add-to-basket"]')),
    buttonProductAddToBasket: element(
      by.css('[data-test="add-to-basket-button"]')
    ),

    // On cart screen
    removeProduct: element.all(by.css('.KIT-button--close')),
    textOrderSummaryAmountOfItems: element(
      by.css('[data-test="order-summary-subtotal-label"]')
    ),

    login: function(email, password) {
      // go to login screen
      this.register.linkMyAccount.click();
      this.register.buttonLogin.click();

      // fill out existing user fields
      this.register.inputLoginEmail.sendKeys(email);
      this.register.inputLoginPassword.sendKeys(password);

      // submit form
      this.register.buttonLoginSubmit.click();
    },

    emptyCart: function() {
      // Click on the cart button
      this.checkoutButton.click();

      // Add all the 'remove product' buttons to the array and click on all of them by using a promise
      this.removeProduct.then(function(elementArray) {
        for (let i = 0; i < elementArray.length; i++) {
          elementArray[i].click().then(function() {
            browser.waitForAngular();
            browser.sleep(100);
          });
        }
      });
    },

    determineQuantity: function(productPrice) {
      const deferred = protractor.promise.defer();
      let quantity = 0;
      // Input quantity based on product price
      if (productPrice < 5) {
        quantity = 3;
      } else if (productPrice >= 5 && productPrice <= 10) {
        quantity = 2;
      } else {
        quantity = 1;
      }
      deferred.fulfill(quantity);
      return deferred.promise;
    }
  };
  navigateTo() {
    return browser.get('https://www.fetch.co.uk');
  }
}
