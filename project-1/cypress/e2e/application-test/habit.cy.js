/// <reference types="cypress" />

describe("Habit Dashboard", () => {
  beforeEach(() => {
    const elements = Cypress.env('elements');
    cy.visit("/habits");
  });

  it ("Should display modal when when add button is clicked.", () => {
    cy.contains("button", "Add").click()
    cy.contains("Add a new habit").should("be.visible")
  })

  it ("Should display habit when new habit is added.", () => {
    cy.get("#habit-add-btn").click()
    cy.get("input[placeholder='Habit']").type("Drink a cup of water")
    cy.contains("Save Changes").click()
    cy.contains("Drink a cup of water")
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container")
  })

  it("Should toggle icon when habbit card is clicked.", () => {
    cy.get("#habit-add-btn").click()
    cy.get("input[placeholder='Habit']").type("Drink a cup of water")
    cy.contains("Save Changes").click()
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
    cy.contains("Drink a cup of water").click()
    cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")
  })
})