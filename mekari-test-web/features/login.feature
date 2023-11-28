@login
Feature: Login Swag Labs Feature
  
  Scenario: Validate the Home page
    Given I an on the home page
    Then I validate the tittle of the page along with the elements

  @positive
  Scenario Outline: Enter the creds and login to the application
    When I enter the <username> and <password>
    Then I click on login button
    Then I should be able to login successfully
    Examples:
        | username | password |
        | standard_user | secret_sauce |
        | problem_user | secret_sauce |
        | error_user | secret_sauce |
        | visual_user | secret_sauce |
  
  @negative
  Scenario Outline: Enter with invalid creds and login to the application
    When I enter the <username> and <password>
    Then I click on login button
    Then I should not be able to log in
    Examples:
        | username | password |
        | test_user | test_pass |
        | standard_user | empty |
        | empty | secret_sauce |
        | empty | empty |
        | locked_out_user | secret_sauce |
        # | performance_glitch_user | secret_sauce |