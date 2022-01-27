/// <reference types="cypress" />

Cypress.Commands.add('visitMusalaSoft', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    });
    cy.visit('/')
});

Cypress.Commands.add('clickCareers', () => {
    cy.get('#menu-main-nav-1').contains('Careers').click( {force:true} );
    cy.get('[type="button"]').contains('Check our open positions').should('be.visible');
    cy.get('[type="button"]').contains('Check our open positions').click();
    cy.get('select').select('Sofia', {force:true} );
});