describe("Exoplanet Transit Graphs", function() {
  beforeEach(() => {
    // Given a user visits exoplanet transit graph site
    cy.visit("https://localhost:3000");
  });

  xit("Deactivate active transit period calculation", function() {
    // When they click on an active transit
    cy.contains("type").click();

    // Then, the transit is removed from calculation period
    cy.url().should("include", "");
  });
  xit("Add transit period calculation", function() {
    // When they click on a deactived transit
    cy.contains("type").click();

    // Then, the transit is added to the transit period calculation
    cy.url().should("include", "");
  });
  xit("Deactivate active transit period calculation", function() {
    // Given a single exoplanet view

    // When they click on the observation button
    cy.contains("type").click();

    // Then, all the observations are visible
    cy.url().should("include", "");
  });
});
