Feature: Listar Produtos

Scenario Outline: Postar produto 
    When post the product of type "<type>" from /produtos
    Then must be responsed the schema "post-produtos" with status <status>
    Examples:
    | type    | status |
    | valid   | 201    |
    | inval   | 400    | 
    | empty   | 401    |