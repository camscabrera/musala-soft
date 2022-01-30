/**
 * Name: Maria Camille Cabrera
 * 
 */
//*************************************************/

/**
 * Name: Musala Soft Test Case 1
 */
 beforeEach(() => {
    cy.visitMusalaSoft();
  });

  describe('Validate the error message', () => {
    it('Should check the error message for incorrect email address', () => {
      cy.clickContactUs();
      cy.fillUpApplication();
    });
  });

  /**Test Case 2 */
  describe('Validate the Company menu', () => {
    it('Should check the leadership section', () => {
      cy.clickCompany();
      cy.checkLeadership();
      cy.clickFacebook();
    });
  });

  /**Test Case 3 */
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