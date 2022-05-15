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
    static productColour() {
        return cy.get(":nth-child(2) > :nth-child(2) > div > small")
    }
    static quantityOfProduct() {
        return cy.get("#cart_quantity11841f16db428e112176d38819667a1fac1")
    }
    static CheckQuantityOfProduct(quantity) {
        this.quantityOfProduct().invoke('attr', 'value').should('eq', quantity)
    }
    static checkProductColour(colour) {
        this.productColour().should("contain", "Colour " + colour)
    }
    static clickCheckoutButton() {
        this.checkoutButton().click()
    }
    static productIsVisibleInCart(product) {
        this.productName().should("be.visible").and("contain", product)
    }

} export default ShoppingCart_PO