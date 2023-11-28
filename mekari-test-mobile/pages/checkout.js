const { I } = inject();

module.exports = {
  elements:{
    addToChartFirstItem:'[id=add-to-cart-sauce-labs-backpack]',
    chartPageTitle:'span.title',
    quantityProduct:'div.cart_quantity',
    labelProduct:'div.cart_item_label',
    removeProduct:'[id=remove-sauce-labs-backpack]',
    checkoutButton:'[id=checkout]',
    continueShoppingButton:'[id=continue-shopping]',
    firstName:'[id=first-name]',
    lastName:'[id=last-name]',
    postalCode: '[id=postal-code]',
    continueButton:'[id=continue]',
    cancelCheckout: '[id=cancel]',
    summaryInfo:'div.summary_info',
    finishButton:'[id=finish]'
  },
  verifyCheckoutPage(){
    I.seeElement(this.elements.checkoutButton,10);
    I.seeElement(this.elements.continueShoppingButton,10);
  },
  verifyAddItemCheckoutPage(){
    I.seeElement(this.elements.quantityProduct,10);
    I.seeElement(this.elements.labelProduct,10);
    I.seeElement(this.elements.removeProduct,10);
  },
  verifyRemoveItemCheckoutPage(){
    I.dontSeeElement(this.elements.quantityProduct,10);
    I.dontSeeElement(this.elements.labelProduct,10);
    I.dontSeeElement(this.elements.removeProduct,10);
  },
  clickAddToChartFirstItem(){
    I.click(this.elements.addToChartFirstItem)
  },
  clickRemoveItem(){
    I.click(this.elements.removeProduct)
  },
  clickCheckout(){
    I.click(this.elements.checkoutButton)
  },
  clickContinueShopping(){
    I.click(this.elements.continueShoppingButton)
  },
  verifyCheckoutProccessPage(){
    I.seeElement(this.elements.firstName,10);
    I.seeElement(this.elements.lastName,10);
    I.seeElement(this.elements.postalCode,10);
  },
  clickCancelCheckout(){
    I.click(this.elements.cancelCheckout)
  },
  fillCheckoutProccessPage(firstName, lastName, postalCode){
    if (firstName !== 'empty') {
      I.fillField(this.elements.firstName, firstName);
    }
  
    if (lastName !== 'empty') {
      I.fillField(this.elements.lastName, lastName);
    }
  
    if (postalCode !== 'empty') {
      I.fillField(this.elements.postalCode, postalCode);
    }
  },
  clickContinueButton(){
    I.click(this.elements.continueButton)
  },
  verifyCheckoutConfirmationPage(){
    I.seeElement(this.elements.summaryInfo,10)
  },
  clickFinishCheckout(){
    I.click(this.elements.finishButton)
  }
}
