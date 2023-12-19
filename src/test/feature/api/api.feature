@test
Feature: validate api functionality

  @api
  Scenario: Verify user is able to read data from api
    When user makes a request to retrieves all users data
    Then user should get a status code 200
    And user should get list of users

  @api
  Scenario: Verify user is able to add data
    When user makes a request to save users data
    Then user should get 201 as status code
    And user should get valid response header