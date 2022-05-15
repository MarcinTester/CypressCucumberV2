class Ppd_PO {
    static addToCartButton() {
        return cy.get(".cart")
    }
    static clickAddToCart() {
        return cy.get(".cart").click()
    }

} export default Ppd_PO