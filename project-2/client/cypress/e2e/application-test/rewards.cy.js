/// <reference types="cypress" />

describe("Rewards Dashboard", () => {
  beforeEach(() => {
    const elements = Cypress.env('elements');
    // cy.visit("/rewards");
  });

  it("Should display a list of rewards", () => {
    cy.visit("/rewards");
    cy.get("ul")
      .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
      .and("contain", "850 points for fasting for 5 days straight");
  })

  it("Should display a list of rewards with mock", () => {
    cy.intercept("GET", "http://localhost:4000/rewards*", {
      fixture: "/rewards.json",
    })

    // visit have to come after cy.intercept
    cy.visit("/rewards");

    cy.get("ul")
      .should("contain", "Test 500 points for drinking 8 cups of water for 7 straight days")
      .and("contain", "Test 850 points for fasting for 5 days straight");
  })
});
