/// <reference types="Cypress" />
require('cypress-plugin-tab')


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Pageup", ()=> {

    it("Tab", () => {
       cy.visit("https://demoqa.com/automation-practice-form")
       cy.title().should("eq", "DEMOQA")

       cy.get('#firstName').type("Manuel").tab().
       type("Reales").tab().
       type("man@mail.com")
       


    })

})