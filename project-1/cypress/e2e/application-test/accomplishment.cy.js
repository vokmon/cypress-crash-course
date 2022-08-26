/// <reference types="cypress" />

describe("Accomplishment Dashboard ", () => {
  beforeEach(() => {
    const elements = Cypress.env('elements');
    cy.visit("/accomplishments");
  });

  it("Should showcase error if information is missing", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment");
    cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row");
    cy.contains("Submit Accomplishment").click();
    cy.contains("Complete the items above to continue").should("be.visible");
  });

  it("Should display validation component if all information is input", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment");
    cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row");
    // cy.get("[data-cy='accomplishment-checkbox'")
    cy.get("[type='checkbox']").click()
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should("be.visible");
  });

  it("Should return back to accomplishment dashboard with empty inputs when Go Back button is clicked", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment");
    cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row");
    // cy.get("[data-cy='accomplishment-checkbox'")
    cy.get("[type='checkbox']").click()
    cy.contains("Submit Accomplishment").click();
    cy.contains("This Accomplisment was Successfully Submitted").should("be.visible");
    cy.contains("Go Back").click();
    cy.contains("h2", "Accomplishment").should("be.visible");

    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-checkbox'").should("not.be.checked");
  });
});
