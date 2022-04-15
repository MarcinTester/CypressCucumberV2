@regression
Feature: booking testing
    Scenario: Invalid email
        Given I open booking.com Page
        And I click Register button
        And Provide invalid email
            | email |
            | qwer  |
        And Click Continue with email
        Then I can see error message "Make sure the email address you entered is correct."
        And I'm still on Register page
    @smoke
    Scenario: HomePage visible elements test
        Given I open booking.com Page
        Then I can see all important page elements

    Scenario Outline: Full search test
        Given I open booking.com Page
        When I provide destination <destination>
        And Arrival <arrivalDay> and departure day <departureDay>
        And Number of guests and rooms <numberOfAdults> <numberOfChildren> <numberOfRooms>
        And Click search button
        Then I can see proper search results <destination>
        And See availability buttons
        Examples:
            | destination | arrivalDay | departureDay | numberOfAdults | numberOfChildren | numberOfRooms |
            | Warsaw      | 10         | 11           | 5              | 4                | 4             |
            | Karpacz     | 14         | 22           | 5              | 5                | 5             |
            | Zakopane    | 9          | 15           | 1              | 2                | 2             |


    Scenario Outline: No arrival Data search test
        Given I open booking.com Page
        And I provide destination <destination>
        And Click search button
        And Click Show prices button
        Then Calendar is visible
        And I stay in search page
        Examples:
            | destination |
            | Warsaw      |
            | Karpacz     |
    @inProgress
    Scenario Outline: Destination search test
        Given I open booking.com Page
        And I provide destination <destination>
        And Click search button
        Then I can see proper search results <destination>
        And I can see Show prices button
        Examples:
            | destination |
            | Warsaw      |
            | Karpacz     |




# Scenario Outline: Full search test
# Given I open booking.com Page
# When I provide destination <destination>
# And Arrival <arrivalDay> and departure day <departureDay>
# And Number of guests and rooms <numberOfAdults> <numberOfRooms>
# And Age of Children
# |Age|
# |1|
# |2|
# |3|
# And Click search button
# Then I can see proper search results <destination>
# And See availability buttons
# Examples:
#     | destination | arrivalDay | departureDay | numberOfAdults | numberOfChildren | numberOfRooms |
#     | Warsaw      | 10         | 11           | 5              | 4                | 4             |

