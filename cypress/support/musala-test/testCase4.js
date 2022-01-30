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
    cy.get('#get_location').select('Sofia');
});

Cypress.Commands.add('verifyListofJobs', (jobtitle) => {
    cy.get('.card-jobsHot__title');
    const log = Cypress.log({
        name: 'verifyListofJobs',
        displayName: 'Open Positions',
        message: `${jobtitle}`,
        consoleProps: () => {
            return {
                Title: jobtitle
            }
        },
    });
});