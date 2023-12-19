@tst
Feature: Login Functionality
    @tests
    Scenario: Verify login functionality is working correctly
        Given he is on login page
        When he enter valid credentials and submit the form
        Then he should be logged in successfully

    @test
    Scenario: Verify login functionality is working correctly 2
        Given he is on login page
        When he enter valid credentials and submit the form
        Then he should be logged in successfully


