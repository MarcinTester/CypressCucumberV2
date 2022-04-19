@regression
Feature: automationteststore testing
    @smoke
    Scenario: Register new user
        Given I open Automationteststore.com Page
        And Navigate to Login or register page
        When I register new account
        Then New account is created
        And I am logged into new account

    # Scenario: Login into account
    #     Given I open Automationteststore.com Page
    #     When I sign up with existing user
    #         | userLogin     | password | userName |
    #         | test129129129 | test1    | test     |
    #     Then I'm logged in into accunt
    #     And I can log out from account
