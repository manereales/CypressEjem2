/// <reference types="Cypress" />
require('cypress-plugin-tab')


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Selects", ()=> {

    it("select", () => {
       cy.visit("https://www.automationexercise.com/")
       cy.get('.shop-menu > .nav').should("be.visible").contains("Products")
    })

})