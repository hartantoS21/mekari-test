@users
Feature: Users API

  @positive  
  Scenario: GET list of users
    Given I send a GET request to the users endpoint
    Then the response status should be 200
    And the response should contain a list of users

  @positive
  Scenario: GET one user
    Given I send a GET request to the user endpoint with id 2
    Then the response status should be 200
    And the response should contain details of the user with id 2

  @positive
  Scenario: POST to create a new user
    Given the request body for creating a new user
    And I send a POST request to create a new user with valid data
    Then the response status should be 201
    And the response should contain details of the created user
