class RegistrationPage_PO {
    static registerRandomUserAccount() {
        let FirstName = "test_" + Math.random().toString(30).substring(2)
        let LastName = "test_" + Math.random().toString(30).substring(2)
        let Email = FirstName + "@gmail.com"
        cy.get('#AccountFrm_firstname').type(FirstName)
        cy.get('#AccountFrm_lastname').type(LastName)
        cy.get('#AccountFrm_email').type(Email)
        cy.get('#AccountFrm_address_1').type("Address")
        cy.get('#AccountFrm_city').type("City")
        cy.get('#AccountFrm_zone_id').select("Durham")
        cy.get('#AccountFrm_postcode').type("123")
        cy.get('#AccountFrm_loginname').type(FirstName)
        cy.get('#AccountFrm_password').type("test1")
        cy.get('#AccountFrm_confirm').type("test1")
        cy.get('#AccountFrm_agree').check()
        cy.get('.btn').contains("Continue").click()
    }
    static continueButton() {
        return cy.get('[title="Continue"]')
    }
} export default RegistrationPage_PO
