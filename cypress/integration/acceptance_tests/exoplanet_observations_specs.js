describe('Exoplanet Observations', function() {
  beforeEach(() => {
    // Given a user visits exoplanet observations site
    cy.visit('https://localhost:8080')
  })

  xit('Add transit observation data', function() {
    // When they click on "add view observations"
    cy.contains('type').click()

    // Then, they can add transit observation data
    cy.url().should('include', '')
  })
})
