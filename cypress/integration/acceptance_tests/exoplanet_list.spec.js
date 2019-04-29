describe("Exoplanet List", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("View exoplanet transit graphs", function() {
    cy.get("div")
      .contains("CoRoT-10 b")
      .click();

    // Should be on a new URL which includes 'exoplanet-transit-graphs'
    cy.url().should("include", "5cc50b981a320ef75edeb18f/transit");
    cy.get("p").contains("O-C");
    cy.get("p").contains("Duration");
    cy.get("p").contains("Depth");
  });
});
