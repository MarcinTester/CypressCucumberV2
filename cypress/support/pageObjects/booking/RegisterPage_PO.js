//obsolete
class RegisterPage_PO {
    emailTextBox() {
        return cy.get("input[type='email']")
    }
    continueWithEmailButton() {
        return cy.get("button[type='submit']")
    }
    incorrectEmailErrorMessage() {
        return cy.get("div[id='username-note']")
    }
} export default RegisterPage_PO
