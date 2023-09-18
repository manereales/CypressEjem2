// <reference types="Cypress" />
require('cypress-plugin-tab')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Funciones type", ()=> {



    it("Selector por ID", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq", "DEMOQA")

        

    })

})
