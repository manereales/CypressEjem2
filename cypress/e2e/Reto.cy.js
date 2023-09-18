/// <reference types="Cypress" />
require('cypress-plugin-tab')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Funciones type", ()=> {



    it("Search", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq", "DEMOQA")

        cy.get('#searchBox').should("be.visible").type("Alden{enter}")
        cy.get('#searchBox').should("be.visible").clear()

    })

    it("Form", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq", "DEMOQA")

        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').should("be.visible").should("be.enabled").type("Manuel").tab().
        should("be.visible").should("be.enabled").type("Reales").tab().
        should("be.visible").should("be.enabled").type("man@mail.com").tab().
        should("be.visible").should("be.enabled").type("20").tab().
        should("be.visible").should("be.enabled").type("300").tab().
        should("be.visible").should("be.enabled").type("San Salvador")
        cy.get('#submit').should("be.visible").click()

        cy.get('#searchBox').should("be.visible").type("Manuel{enter}")
        //cy.get('#searchBox').should("be.visible").clear()
    })


    it.only("Edit", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq", "DEMOQA")

        cy.get('#searchBox').should("be.visible").type("Alden{enter}")
        cy.get("#edit-record-2 > svg").click()
        cy.get('#salary').should("be.visible").clear().type("5000")
        cy.get('#submit').click()

        cy.get("#delete-record-2 > svg > path").click();

        cy.get('#searchBox').type('{pageup}')
    })




})
