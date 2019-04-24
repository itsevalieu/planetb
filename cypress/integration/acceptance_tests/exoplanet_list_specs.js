describe("Exoplanet List", function() {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });

  xit("View exoplanet transit graphs", function() {
    cy.get("div")
      .contains("CoRoT-1b")
      .click();

    // Should be on a new URL which includes 'exoplanet-transit-graphs'
    cy.url().should("include", "exoplanet-uuid");
    cy.get("p").should("The OC");
    cy.get("p").should("The Duration");
    cy.get("p").should("The Depth");
  });
});
