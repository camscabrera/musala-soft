/**
 * Name: Maria Camille Cabrera
 * 
 */
//*************************************************/

/**
 * Name: Musala Soft Test Case 3
 */
 beforeEach(() => {
    cy.visitMusalaSoft();
  });

  describe('Validate the Career menu', () => {
    it('Should open the Careers portal page', () => {
      cy.clickCareers();
      cy.filterByLocation();
      cy.experiencedAutomationQa();
      cy.verifyFourMainSection();
      cy.verifyApplyButton();
      cy.fillUpApplicationForm();
    });
  });