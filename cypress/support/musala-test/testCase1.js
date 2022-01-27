/// <reference types="cypress" />

Cypress.Commands.add('visitMusalaSoft', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    });
    cy.visit('/')
});

Cypress.Commands.add('verifyErrorMessage', () => {
    cy.get('[type="button"]').contains('Contact us').scrollIntoView();
    cy.get('[type="button"]', { timeout: 10000 }).contains('Contact us').should('be.visible');
    cy.get('[type="button"]').contains('Contact us').click();
});

Cypress.Commands.add('fillUpApplication', () => {
    cy.get('#id1-text-cf').contains('Name');
    cy.fixture('testData').then(function(regdata){
        this.regdata=regdata
        cy.get('#id1-text-cf').contains('Name').type(this.regdata.name1);
        cy.get('#id3-text-cf').contains('Mobile').type(this.regdata.mobile1);
        cy.get('#id4-text-cf').contains('Subject').type(this.regdata.subject1);
        cy.get('#id5-text-cf').contains('Your Message').type(this.regdata.message1);
        cy.get('#id2-text-cf').contains('Email').type(this.regdata.email1);
        cy.get('[type="submit"]').contains('Send').click();
        cy.get('.wpcf7-response-output').contains('One or more fields have an error. Please check and try again.').should('be.visible');
        cy.get('#fancybox-close').click();
    }); 
});


