/// <reference types="Cypress" />
require('cypress-plugin-tab')
require('cypress-xpath');
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Formulario checkbox", ()=> {


    it.only("RadioButtoms", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "DEMOQA")

        //formulario
        cy.get('#firstName').should("be.visible").should("be.enabled").type("Manuel").tab().
        should("be.visible").should("be.enabled").type("Reales").tab().
        should("be.visible").should("be.enabled").type("man@mail.com")
        cy.get("#gender-radio-2").check({force:true})
        cy.get('#userNumber').should("be.visible").should("be.enabled").type("70852583{pageup}")
        cy.get('#dateOfBirthInput').should("be.visible").should("be.enabled").click()
        cy.get('.react-datepicker__month-select').select("3")
        cy.get('.react-datepicker__year-select').select("1995")
        cy.get(':nth-child(5) > .react-datepicker__day--027').click()
        cy.get('.subjects-auto-complete__value-container').type("P")
        cy.get('#react-select-2-option-0').click()
        cy.get("#hobbies-checkbox-1").check({force:true})
        cy.get('#currentAddress').type("adress")
        cy.get("#state").should("be.visible").click()
        cy.get("#react-select-3-option-1").click()
        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').should("be.visible").click()
        cy.get('#react-select-4-option-1').click()

        const ruta = 'pruebaAse.jpg' 

        cy.get('#uploadPicture').attachFile(ruta)
        cy.wait(2000)

    })


    it("Autocomplete", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "DEMOQA")

        cy.get('.subjects-auto-complete__value-container').type("P")
        cy.get('#react-select-2-option-0').click()

    })

})