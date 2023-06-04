Feature: Simple Search

    Typing a word and search a result

    Scenario: Successful Simple Search
        Given I am on the home page
        When I type <word> into the search bar
        Then I should see <message>

    Examples:
      | word    | message               |
      | teste   | Significado de Teste  |
      | amor    | Significado de Amor   |


    Scenario: Unsuccessful Simple Search
        Given I am on the home page
        When I type <word> into the search bar
        Then I should not see any successful results and <message>

    Examples:
      | word        | message               |
      | fassadfa    | Busca por fassadfa    |
      | snorlax     | Busca por snorlax     |