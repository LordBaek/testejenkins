Feature: Listar Produtos

Scenario: Listar produtos cadastrados
   When forncer lista de produtos /produtos
   Then deve ser respondido o schema "get-produtos" com status 200

