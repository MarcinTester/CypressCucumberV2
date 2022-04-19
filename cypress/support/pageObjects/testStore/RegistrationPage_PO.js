class RegistrationPage_PO {
    static registerRandomUserAccount() {
        let FirstName = "test_" + Math.random().toString(30).substring(2)
        let LastName = "test_" + Math.random().toString(30).substring(2)
        let Email = FirstName + "@gmail.com"
        this.firstNameTextField().type(FirstName)
        this.lastNameTextField().type(LastName)
        this.emailTextField().type(Email)
        this.addressTextField().type("Address")
        this.cityTextField().type("City")
        this.regionTextField().select("Durham")
        this.postalCodeTextField().type("123")
        this.loginNameTextField().type(FirstName)
        this.passwordTextField().type("test1")
        this.confirmPasswordTextField().type("test1")
        this.privacyPolicyCheck().check()
        cy.get('.btn').contains("Continue").click()
    }
    static firstNameTextField() {
        return cy.get('#AccountFrm_firstname')
    }
    static lastNameTextField() {
        return cy.get('#AccountFrm_lastname')
    }
    static emailTextField() {
        return cy.get('#AccountFrm_email')
    }
    static addressTextField() {
        return cy.get('#AccountFrm_address_1')
    }
    static cityTextField() {
        return cy.get('#AccountFrm_city')
    }
    static regionTextField() {
        return cy.get('#AccountFrm_zone_id')
    }
    static postalCodeTextField() {
        return cy.get('#AccountFrm_postcode')
    }
    static loginNameTextField() {
        return cy.get('#AccountFrm_loginname')
    }
    static passwordTextField() {
        return cy.get('#AccountFrm_password')
    }
    static confirmPasswordTextField() {
        return cy.get('#AccountFrm_confirm')
    }
    static privacyPolicyCheck() {
        return cy.get('#AccountFrm_agree')
    }
    static continueButton() {
        return cy.get('[title="Continue"]')
    }
    static confirmationText() {
        return cy.get(".maintext")
    }
    static invalidUserErrorMessage() {
        return cy.get(".alert")
    }
    static invalidUserErrorMessageCheck(errorMessage) {
        cy.get(".alert").should("be.visible").and("contain", errorMessage)
    }
} export default RegistrationPage_PO
