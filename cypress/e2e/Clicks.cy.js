



describe("Pageup", ()=> {

    it("Click sencillo", () => {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.title().should("eq", "OrangeHRM")
       cy.get('.oxd-text--h5').contains("Login")

       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")

       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")

       cy.get('.oxd-button').should("be.visible").click()

       cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()

       cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click()

       cy.get('.oxd-dropdown-menu > :nth-child(1)').should("be.visible").click()


    })



    it("Click Force", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq", "OrangeHRM")
        cy.get('.oxd-text--h5').contains("Login")
 
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
 
        cy.get('.oxd-button').should("be.visible").click()
 
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
 
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click({force: true})
 
        cy.get('.oxd-dropdown-menu > :nth-child(1)').should("be.visible").click()
 
 
     })


     it.only("Click xy", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq", "OrangeHRM")
        cy.get('.oxd-text--h5').contains("Login")
 
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
 
        cy.get('.oxd-button').should("be.visible").click()
 
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(50,5)
 
     })


})