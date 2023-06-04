Feature: Raffle Word

    Raffle words to improve your vocabulary

    Scenario: Raffle word
        Given I am on the home page
        When I raffle a word
        Then I should see a new word