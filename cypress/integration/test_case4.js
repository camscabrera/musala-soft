/**
 * Name: Maria Camille Cabrera
 * 
 */
//*************************************************/

/**
 * Name: Musala Soft Test Case 4
 */
 beforeEach(() => {
    cy.visitMusalaSoft();
  });

  describe('Validate the list of available jobs', () => {
    it('Should display the list of available jobs per location', () => {
      cy.clickCareers();
      cy.verifyListofJobs();
    });
  });