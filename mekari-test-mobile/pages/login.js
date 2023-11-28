const { I } = inject();

module.exports = {
  elements:{
    pageTitle:'.login_logo',
    username:'[id=user-name]',
    password:'[id=password]',
    loginButton:'#login-button',
    productPageTitle:'span.title'
  },
  async validateHomePage(){
    // let title = await I.grabTextFrom(this.elements.pageTitle);
    // I.seeTextEquals(title,"Swag Labs")
  },
  async verifyHomePageElements(){
    I.seeElement(this.elements.username,5);
    I.seeElement(this.elements.password,5);
    I.seeElement(this.elements.loginButton,5);
  },
  enterUserNameAndPassword(username,password){
    I.amOnPage('/')
    I.wait(10)
    I.clearField(this.elements.username)
    I.clearField(this.elements.password)
    if (username !== 'empty') {
      I.clearField(this.elements.username);
      I.fillField(this.elements.username, username);
    }
    if (password !== 'empty') {
      I.clearField(this.elements.password);
      I.fillField(this.elements.password, password);
    }
  },
  clickLoginButton(){
    I.click(this.elements.loginButton)
  },
  verifyLoginSuccessfully(){
    I.seeElement(this.elements.productPageTitle,10);
  },
  verifyNotLoginSuccessfully(){
    I.dontSeeElement(this.elements.productPageTitle,10);
  }
}
