@tst
Feature: validate home page Functionality

  Background: user in on login page
    Given he is on login page

  Scenario: Verify Home Page data
    Given he is on home page
    When he click on contact us button
    Then send button should be visible


  Scenario: Verify user is able to read excel sheet data
    Given he is on login page
    When he enter valid credentials and submit the form
    Then he should able to see excel sheet data