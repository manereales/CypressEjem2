/// <reference types="Cypress" />
require('cypress-plugin-tab')


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Fechas", ()=> {

    it("fechas", () => {
       cy.visit("https://demoqa.com/automation-practice-form")
       cy.title().should("eq", "DEMOQA")


       cy.get('#userNumber').type("{pageup}")

       cy.get('#dateOfBirthInput').should("be.visible").click()
       cy.get("#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(3) > div.react-datepicker__day.react-datepicker__day--013").click()

        cy.get("#hobbies-checkbox-1").check({force:true})


    })

})