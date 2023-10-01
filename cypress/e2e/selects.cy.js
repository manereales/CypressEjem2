/// <reference types="Cypress" />
require('cypress-plugin-tab')


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Selects", ()=> {

    it("select", () => {
       cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
       cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")

       cy.get('#select-demo').should("be.visible").select("Sunday").should("have.value", "Sunday")
       cy.wait(2000)
       cy.get('#select-demo').should("be.visible").select("Friday").should("have.value", "Friday")
    })


    it("select 2", () => {
        cy.visit("https://www.google.com/?hl=es")
        //cy.title().should("eq", "")
 
        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        cy.wait(1500)
     })

     it.only("select multiselect", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")


        cy.get('#multi-select').should("be.visible").select(["California","Ohio", "Pennsylvania"]).then(() =>{
            cy.get('#printMe').should("be.visible").click()
        })
     })
})