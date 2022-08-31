/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
  beforeEach(() => {
    // const elements = Cypress.env('elements');
    // cy.visit("/accomplishments");
  });

  it("It should inappropriate content error when text or accomplishment includes giraffe", () => {
    cy.visit("/accomplishments");
    cy.get("[data-cy='accomplishment-title-input']").type("This is my accomplishment");
    cy.get("[data-cy='accomplishment-input']").type("I pet a giraffe");
    cy.get("[data-cy='accomplishment-checkbox']").click();
    cy.get("button").click();
    cy.contains("Your content is not appropriate").should("be.visible");
  });

  it("It should inappropriate content error when text or accomplishment includes giraffe with mock", () => {
    cy.intercept('POST', 'http://localhost:4000', (req) => {
      req.reply((res) => {
        res.send(406,
          {
            msg: "Your content is not appropriate from mock"
          })
      });
    });
    cy.visit("/accomplishments");
    cy.get("[data-cy='accomplishment-title-input']").type("This is my accomplishment");
    cy.get("[data-cy='accomplishment-input']").type("I pet a something");
    cy.get("[data-cy='accomplishment-checkbox']").click();
    cy.get("button").click();
    cy.contains("Your content is not appropriate from mock").should("be.visible");
  });
});
