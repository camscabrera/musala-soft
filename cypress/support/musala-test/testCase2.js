/// <reference types="cypress" />

Cypress.Commands.add('visitMusalaSoft', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    });
    cy.visit('/')
});

Cypress.Commands.add('clickCompany', () => {
    cy.get('#menu-main-nav-1').contains('Company').click( {force:true} );
    cy.url().should('eq', 'https://www.musala.com/company/');
});

Cypress.Commands.add('checkLeadership', () => {
    cy.get('h2').contains('Leadership').scrollIntoView();
});

Cypress.Commands.add('clickFacebook', () => {
    cy.get('[href="https://www.facebook.com/MusalaSoft?fref=ts"]').click();
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = 'https://www.facebook.com/MusalaSoft?fref=ts';
        }).as("popup");
    });
});



