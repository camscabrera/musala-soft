/**
 * Name: Maria Camille Cabrera
 * 
 */
//*************************************************/

/**
 * Name: Musala Soft Test Case 2
 */
 beforeEach(() => {
    cy.visitMusalaSoft();
  });

  describe('Validate the Company menu', () => {
    it('Should check the leadership section', () => {
      cy.clickCompany();
      cy.checkLeadership();
      cy.clickFacebook();
    });
  });