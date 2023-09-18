/// <reference types="Cypress" />
require('cypress-plugin-tab')


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Asserts", ()=> {

    it("Tab", () => {
       cy.visit("https://demoqa.com/automation-practice-form")
       cy.title().should("eq", "DEMOQA")

      /* cy.get('#firstName').should("be.visible").type("Manuel").tab()
       .type("Reales").tab().
       should("be.visible").
       should("be.enabled").
       type("man@mail.com")*/

       cy.get('#firstName').should("be.visible").type("Manuel")
       cy.get('#lastName').should("be.visible").type("Reales")
       cy.get('#userEmail').should("be.visible").type("reales@mail.com")



    })

})