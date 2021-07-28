/// <reference types="cypress" />

import{When,Then} from 'cypress-cucumber-preprocessor/steps'
import{ServeRest} from '../../services/serverest.service'

When(`forncer lista de produtos /produtos`, () => {
    ServeRest.get_all_products().then( produtos => {
        cy.wrap(produtos).as('Response')
    })
});

Then(`deve ser respondido o schema {string} com status {int}`, (schema, status) => {
    cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});
