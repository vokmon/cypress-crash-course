/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    const elements = Cypress.env('elements');
    cy.visit("/elements");
  });

  it("locating elements with get", () => {
    // Get all elements by tag name
    cy.get("button");
    cy.get("h2");
    cy.get("h3");

    // Get all elements by class name
    cy.get(".btn-with-class")

    // Get all elements with specific classes (extact match)
    cy.get("[class='Elements-btn btn-with-class']")
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

    // Get all elements by id
    cy.get("[id='btn-with-id']")
    cy.get("#btn-with-id")

    // Get elements by specific attributes
    cy.get("[type='submit']");

    // Get all elements by tag name AND class
    cy.get("button.Elements-btn")

    // Get all elements by tag name AND class AND Id
    cy.get("button.Elements-btn#btn-with-id")

    // Get all elements by tag name AND class AND type attributes
    cy.get("button.Elements-btn[type='submit']");

    // Get all elements with specific data test id
    cy.get("[data-cy='btn-id-1']");
    console.log(cy.getByTestId("btn-id-1"));
  })

  it("Locating elements with contains", () => {
    // Only get one element

    // Get element by text
    cy.contains("Unique Text")

    // Get element by text
    cy.contains("Not Unique Text")

    // Get element by text with selector
    cy.contains("[type='submit']", "Not Unique Text")
    cy.contains("form", "Not Unique Text")

    cy.get("[type='submit']").contains("Not Unique Text")
  })

  it("Location elements with find", () => {
    cy.get("#form-1").find(".btn-1")
    cy.get("#form-1").find(".btn-2")
  })
})