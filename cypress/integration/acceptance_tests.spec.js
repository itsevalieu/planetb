describe("Exoplanet List", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
    
  it("View exoplanet transit graphs", function() {
    cy.get("div")
      .contains("CoRoT-10 b")
      .wait(2000)
      .click()
  
    // Should be on a new URL which includes 'exoplanet-transit-graphs'
    cy.url().should("include", "observations/5cc50b981a320ef75edeb18f") //temporary spec
      .wait(2000)
    // real spec
    // cy.url().should("include", "transits/5cc50b981a320ef75edeb18f");
    // cy.get("p").contains("O-C");
    // cy.get("p").contains("Duration");
    // cy.get("p").contains("Depth");
  });
});
  
describe("Exoplanet Observations", function() {
  beforeEach(() => {
    // Given a user visits exoplanet observations site
    cy.visit("http://localhost:3000/observations/5cc50b981a320ef75edeb18f");
  });
  
  xit("Add transit observation data", function() {
    // When they click on "add view observations"
    // action
  
    // Then, they can add transit observation data
    // result
  });
});
  
describe("Exoplanet Transit Graphs", function() {
  beforeEach(() => {
    // Given a user visits exoplanet transit graph site
    cy.visit("http://localhost:3000/transits/5cc50b981a320ef75edeb18f");
  });
  
  xit("Deactivate active transit period calculation", function() {
    // When they click on an active transit
    // action
  
    // Then, the transit is removed from calculation period
    // result
  });
  xit("Add transit period calculation", function() {
    // When they click on a deactived transit
    // action

    // Then, the transit is added to the transit period calculation
    // result
  });
  xit("Deactivate active transit period calculation", function() {
    // Given a single exoplanet view

    // When they click on the observation button
    // action
  
    // Then, all the observations are visible
    // result
  });
});
    