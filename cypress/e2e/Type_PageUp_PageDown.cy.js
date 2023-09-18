/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Pageup", ()=> {

    it("PageUp", () => {
       cy.visit("https://demoqa.com/text-box")
       cy.title().should("eq", "DEMOQA")

       cy.get('#userName').type('{pageup}')
    })


    it.only("PageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "DEMOQA")
 
        cy.get('#userName').type('{pagedown}')
     })

})
