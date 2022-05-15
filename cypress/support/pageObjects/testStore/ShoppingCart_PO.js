class ShoppingCart_PO {
    static mainText() {
        return cy.get(".maintext")
    }
    static mainTextIsVisible() {
        return cy.get(".maintext").should("be.visible").and("contain", "Shopping Cart")
    }
    static productName() {
        return cy.get("tbody > :nth-child(2) > :nth-child(2) > a")
    }
    static checkoutButton() {
        return cy.get("#cart_checkout1")
    }
    static clickCheckoutButton() {
        this.checkoutButton().click()
    }
    static productIsVisibleInCart(product) {
        this.productName().should("be.visible").and("contain", product)
    }

} export default ShoppingCart_PO