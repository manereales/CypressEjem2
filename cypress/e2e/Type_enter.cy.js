/*/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});*/

describe("Funciones type", ()=> {

    it("Type Enter", () => {
        cy.visit("https://www.google.com/?hl=es")
        cy.title().should("eq", "Google")
        cy.wait(1500)

        cy.get('#APjFqb').type("Cypress io {enter}")
        cy.get('[href="https://www.cypress.io/"] > .LC20lb').click();

        cy.log("todo está bien")
    })

})


