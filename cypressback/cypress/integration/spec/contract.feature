Feature: Contract teste with json-schema

@example
      Scenario: Requesting from serverest api and validating contract
         When request all the users from /usuarios
         Then must be responsed the schema "get-user" with status 200

         
      Scenario Outline: Postin users on serverest API and validating Contract
         When post the user of type "<type>"
         Then must be responsed the schema "post-user" with status <status>
         Examples:
               | type    | status |
               | invalid | 400    |
               | valid   | 201    |
 