/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Bienvenido al cusro de cypress seccion 1", () => {

   /* it("mi primer test", () => {
        cy.log("Hola mundo")
    })*/

    it("segundo test", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.wait(10000)
        //cy.get('#userName').type("Manuel Reales")  
    })

    it.only("validando titulo", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","DEMOQA")
        

        cy.log("la funcion title funciona bien")
    })

})//cierre de describe