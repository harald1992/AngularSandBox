import { Order } from './order.po';
import { Testdata } from './order.testdata';
// import { DataProvider } from '@jasmine-data-provider';

describe('workspace-project App', () => {
  beforeEach(() => {
    order = new Order();
    testdata = new Testdata();
  });
});

describe('Search for a product and determine the quantity based on the product price: ', () => {
  let order: Order;
  let testdata: Testdata;

  beforeEach(function() {
    // Set Angular flag
    // isAngular(true);
    order = new Order();
    testdata = new Testdata();
    // Go to the given URL
    this.order.navigateTo();
  });

  afterEach(function() {
    // Clear all cookies
  });

  // Testdata
  function plusProvider() {
    // Zo kan je dezelfde test meer keer uitvoeren met elke keer andere testdata.
    return this.testdata;
  }

  it('Test if a test runs and works', () => {
    expect(2).toEqual(2);
  });

  DataProvider(plusProvider, function(data) {
    // voert de acties in deze statement uit per item in de plusProvider.
    it('should search for a product and order the amount based on the product price', function() {
      // Input a product in the search input field
      // NOTE: your element might have a different name then 'inputSearch'!
      this.order.inputSearch.sendKeys(data.product);

      // Click on the search button
      this.order.buttonSearch.click();

      // Click on the product
      this.order.linkProduct.click();

      // Get the product price and put it in the 'productPriceText' object
      let productPrice = this.order.textProductPrice;

      // Remove the '£' from the productPriceText object
      productPrice = this.productPriceText
        .substring(this.productPriceText.indexOf('£') + 1)
        .then(
          // Parse the object to float, so calculations can be done
          (productPrice = parseFloat(productPrice))
        )
        .then(
          // Make input quantity empty
          this.order.inputQuantity.clear()
        );

      /*
                Finish the determineQuantity function.
                The function should return a promise and the quantity should be
                put in the 'quantity' object
                */

      this.order
        .determineQuantity()
        .then((quantity: any) => {
          const quantity = quantity;
        })
        .then(
          // Use result from the promise to fill the input field of quantity
          this.order.inputQuantity.sendKeys(quantity)
        );

      // Wait for the add to basket button is displayed and click
      if (buttonAddToBasket) {
        buttonAddToBasket.click();
      }
      // Click on the cart button
      buttonProductAddToBasket.click();

      // Expect the order summary amount of items text to contain the quantity
      expect(textOrderSummaryAmountOfItems.getText()).toEqual('1 item');
    });
  });
});
