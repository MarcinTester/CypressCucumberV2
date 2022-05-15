class Ppd_PO {
    static addToCartButton() {
        return cy.get(".cart")
    }
    static colourRadioButtons() {
        return cy.get(".input-group > label")
    }
    static chooseColourRadioButtons(colour) {
        this.colourRadioButtons().contains(colour).click()
    }
    static clickAddToCart() {
        return cy.get(".cart").click()
    }
    static quantitySelector() {
        return cy.get("#product_quantity")
    }
    static chooseQuantity(quantity) {
        cy.get("#product_quantity").clear().type(quantity)
    }
} export default Ppd_PO