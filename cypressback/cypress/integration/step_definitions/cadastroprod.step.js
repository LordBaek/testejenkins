/// <reference types="cypress" />

import{When,Then} from 'cypress-cucumber-preprocessor/steps'
import{ServeRest} from '../../services/produtos.service'

When(`post the product of type "<type>" from /produtos`, () => {
	ServeRest.post_products_by_type(produto_type).then(post_response => {
        cy.wrap(post_response).as('Response')
});
})

Then(`must be responsed the schema {string} with status <status>`, (schema, status) => {
    cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true

 })
})
});