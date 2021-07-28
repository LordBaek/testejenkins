/// <reference types="cypress" />

import{When,Then} from 'cypress-cucumber-preprocessor/steps'
import{ServeRest} from '../../services/produtos.service'

When(`post the user of type {string}`, (user_type) => {
    ServeRest.post_login_by_type(user_type).then(post_response => {
        cy.wrap(post_response).as('Response')
    })
});


Then(`must be responsed the schema {string} with status {int}`, (schema, status) => {
    cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});
