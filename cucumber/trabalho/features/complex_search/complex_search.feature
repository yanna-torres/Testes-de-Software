Feature: Complex Search

    A search that allows you to select conditions and receive only words that satisfy them

    Scenario: Search a word that contains something
        Given I am on the complex search page
        When I select <condition> and type <input>
        Then I should see the title <message>

    Examples:
      | condition   | input     | message                       |
      | contem      | a         | Palavras que contêm A         |
      | comecam     | y         | Palavras com Y                |
      | terminadas  | l         | Palavras que Terminam em L    |
