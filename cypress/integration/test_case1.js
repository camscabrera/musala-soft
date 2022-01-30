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