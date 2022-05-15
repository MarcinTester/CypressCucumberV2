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
    static productIsVisibleInCart(product) {
        ShoppingCart_PO.productName().should("be.visible").and("contain", product)
    }

} export default ShoppingCart_PO