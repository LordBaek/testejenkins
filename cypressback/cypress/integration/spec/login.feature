Feature: Login na api
Scenario Outline: Login 
    When post the user of type "<type>" 
    Then must be responsed the schema "post-login" with status <status>
    Examples:
            | type    | status |
            | valid   | 200    |
            | invalid | 400    |