class AccountPage_PO {
    static myAccountHeader() {
        return cy.get('.maintext')
    }
    static accountOptions() {
        return cy.get('.nav-dash > li')
    }
    static continueButton() {
        return cy.get('.btn').contains("Continue")
    }
} export default AccountPage_PO
