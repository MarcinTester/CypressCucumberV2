@regression
Feature: automationteststore.com testing
    @smoke
    Scenario: Open Home Page
        Given I open automationteststore.com Page
        Then I land on home page
    @smoke
    Scenario Outline:
        Given I open automationteststore.com Page
        When I search for <product>
        Then I can see PLP with results
        Examples:
            | product |
            | Men     |
            | Skin    |
    @smoke
    Scenario: Login into account
        Given I open automationteststore.com Page
        When I sign up with user
            | userLogin     | password |
            | test129129129 | test1    |
        Then I'm logged into account
        And I can log out from account

    Scenario: Footer Test
        Given I open automationteststore.com Page
        Then Footer contains all expected option
            | headers        |
            | About Us       |
            | Privacy Policy |
            | Return Policy  |
            | Shipping       |
            | Contact Us     |
            | Site Map       |
            | Login          |
        And Footer options leads to proper content
            | headers        |
            | About Us       |
            | Privacy Policy |
            | Return Policy  |
            | Shipping       |
            | Contact Us     |
            | Site Map       |
            | Login          |

    Scenario: Open Home Page
        Given I open automationteststore.com Page
        Then I land on home page

    Scenario: Login into account with invalid user
        Given I open automationteststore.com Page
        When I sign up with user
            | userLogin   | password |
            | invalidUser | test1    |
        Then I can see error message: "Error: Incorrect login or password provided"

    Scenario: Register new user
        Given I open automationteststore.com Page
        When I register new account
        Then New account is created
        And I am logged into new account
