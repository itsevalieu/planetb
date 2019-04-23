describe('Exoplanet List', function() {
  beforeEach(() => {
    cy.visit('https://localhost:8080')
  })

  xit('View exoplanet transit graphs', function() {
    cy.contains('type').click()

    // Should be on a new URL which includes 'exoplanet-transit-graphs'
    cy.url().should('include', 'exoplanet-transit-graphs')
  })
})
