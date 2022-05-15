class CheckoutPage_PO {
    static confirmOrder() {
        return cy.get("#checkout_btn")
    }
    static mainText() {
        return cy.get(".maintext")
    }
    static continueButton() {
        return cy.get("a[title='Continue']")
    }
    static clickContinueButton() {
        this.continueButton().click()
    }
    static mainTextisVisible() {
        this.mainText().should("be.visible").and("contain", "Your Order Has Been Processed!")
    }
    static clickConfirmOrder() {
        this.confirmOrder().click()
    }
} export default CheckoutPage_PO
