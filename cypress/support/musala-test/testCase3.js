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
    cy.url().should('eq', 'https://www.musala.com/careers/join-us/');
});

Cypress.Commands.add('filterByLocation', () => {
    cy.get('#get_location').select('Anywhere');
});

Cypress.Commands.add('experiencedAutomationQa', () => {
    cy.get('h2').contains('Experienced Automation QA Engineer').click();
});

Cypress.Commands.add('verifyFourMainSection', () => {
    cy.get('h2').contains('General description').scrollIntoView();
    cy.get('h2', { timeout: 20000 }).contains('General description').should('be.visible');
    cy.get('h2', { timeout: 20000 }).contains('Requirements').should('be.visible');
    cy.get('h2', { timeout: 20000 }).contains('Responsibilities').should('be.visible');
    cy.get('h2', { timeout: 20000 }).contains('What we offer').should('be.visible');
});

Cypress.Commands.add('verifyApplyButton', () => {
    cy.get('.fancybox > .wpcf7-form-control').scrollIntoView();
    cy.get('.fancybox > .wpcf7-form-control').click();
});

Cypress.Commands.add('fillUpApplicationForm', () => {
    cy.get('#cf-1').contains('Name');
    cy.fixture('testApplicationData').then(function(regdata){
        this.regdata=regdata
        cy.get('#cf-1').type(this.regdata.name);
        cy.get('#cf-2').type(this.regdata.email);
        cy.get('#cf-3').type(this.regdata.mobile);
        cy.get('#cf-5').type(this.regdata.linkedIn);
        cy.get('#cf-6').type(this.regdata.yourmessage);
        cy.get('[type="submit"]').click();
        cy.get('.wpcf7-response-output').contains('One or more fields have an error. Please check and try again.').should('be.visible');
        cy.wait(2000);
        cy.get('.close-form').click();
    });
});