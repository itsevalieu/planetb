describe("Exoplanet List", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("View exoplanet transit graphs", function() {
    cy.get("div")
      .contains("CoRoT-10 b")
      .click();

    // // Should be on a new URL which includes 'exoplanet-transit-graphs'
    // cy.url().should("include", "exoplanet-uuid");
    // cy.get("p").should("The O-C");
    // cy.get("p").should("The Duration");
    // cy.get("p").should("The Depth");
  });
});
