Feature: Calculate a employee salary net based on their postion and base salary

  Scenario: Developer base salary is equal or greater then 3000.00
    Given "Developer" base salary is 3000.00
    When I ask their net salary
    Then I should be told it is 2400.00

  Scenario: Developer base salary is less then 3000.00
    Given "Developer" base salary is 2900.00
    When I ask their net salary
    Then I should be told it is 2610.00

  Scenario: DBA base salary is equal or greater then 2000.00
    Given "DBA" base salary is 5000.00
    When I ask their net salary
    Then I should be told it is 3750.00

  Scenario: DBA base salary is less then 2000.00
    Given "DBA" base salary is 1900.00
    When I ask their net salary
    Then I should be told it is 1615.00