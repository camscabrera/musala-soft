/// <reference types="cypress" />

Cypress.Commands.add('visitMusalaSoft', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    });
    cy.visit('/')
});

Cypress.Commands.add('clickContactUs', () => {
    cy.get('[type="button"]').contains('Contact us').scrollIntoView();
    cy.get('[type="button"]', { timeout: 10000 }).contains('Contact us').should('be.visible');
    cy.get('[type="button"]').contains('Contact us').click();
});

Cypress.Commands.add('fillUpApplication', () => {
    cy.get('#icf-1').contains('Name');
    cy.fixture('testData').then(testdata => {
        testdata.forEach(regdata => {
            cy.get('#cf-1').clear().type(regdata.name);
            cy.get('#cf-3').clear().type(regdata.mobile);
            cy.get('#cf-4').clear().type(regdata.subject);
            cy.get('#cf-5').clear().type(regdata.message);
            cy.get('#cf-2').clear().type(regdata.email);
            cy.get('[type="submit"]').contains('Send').click();
            //cy.get('.wpcf7-not-valid-tip').contains('The e-mail address entered is invalid.').should('be.visible');
            cy.get('.wpcf7-response-output').contains('One or more fields have an error. Please check and try again.').should('be.visible');
        });
    });
    cy.get('#fancybox-close').click();
});