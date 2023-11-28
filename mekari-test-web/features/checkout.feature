@checkout
Feature: Checkout Feature

  @negative
  Scenario Outline: User remove item
    When I enter the <username> and <password>
    Then I click on login button
    Then I should be able to login successfully
    When I add the first item to the cart
    And I go to the cart page
    Then I verify that the product has been successfully added to the cart
    And I remove product from cart
    Then I verify that the product has been successfully remove to the cart
    Examples:
        | username | password |
        | standard_user | secret_sauce |

  @negative
  Scenario Outline: User checkout and cancel the process
    When I enter the <username> and <password>
    Then I click on login button
    Then I should be able to login successfully
    When I add the first item to the cart
    And I go to the cart page
    Then I verify that the product has been successfully added to the cart
    And I click checkout button
    Then I am on checkout proccess page
    And I click cancel checkout proccess
    Then I am on chart page
    Examples:
        | username | password |
        | standard_user | secret_sauce |

  @positive
  Scenario Outline: User finished the checkout process
    When I enter the <username> and <password>
    Then I click on login button
    Then I should be able to login successfully
    When I add the first item to the cart
    And I go to the cart page
    Then I verify that the product has been successfully added to the cart
    And I click checkout button
    Then I am on checkout proccess page
    When I fill information data for checkout proccess 
    And I click continue in checkout proccess page
    Then I am on checkout confirmation page
    And I click finish checkout
    Examples:
        | username | password |
        | standard_user | secret_sauce |

  @negative
  Scenario Outline: User cannot next the checkout process with <condition>
    When I enter the <username> and <password>
    Then I click on login button
    Then I should be able to login successfully
    When I add the first item to the cart
    And I go to the cart page
    Then I verify that the product has been successfully added to the cart
    And I click checkout button
    Then I am on checkout proccess page
    When I fill information <condition> for checkout proccess 
    And I click continue in checkout proccess page
    Then I am on checkout proccess page
    Examples:
        | condition | username | password |
        | empty_firstname | standard_user | secret_sauce |
        | empty_lastname | standard_user | secret_sauce |
        | empty_postalcode | standard_user | secret_sauce |
        | empty_all | standard_user | secret_sauce |
