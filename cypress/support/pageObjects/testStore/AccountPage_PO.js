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
    static logOffButton() {
        return cy.get('.side_account_list').contains("Logoff")
    }
    static logoutHeader() {
        return cy.get('.maintext')
    }
    static userName() {
        return cy.get('.subtext')
    }
} export default AccountPage_PO
