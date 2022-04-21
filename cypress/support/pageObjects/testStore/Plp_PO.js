class Plp_PO {
    static products() {
        return cy.get(".thumbnails > div")
    }
    static productsCheck() {
        this.products().should("be.visible").and('have.length.above', 1)
        this.productPrices().first().should('include.text', "$")
        this.productPrices().each((element, index, $list) => {
            cy.wrap(element).should("contain.text", "$")
        })
    }
    static searchCriteriaTextField() {
        return cy.get("#keyword")
    }
    static productPrices() {
        return cy.get(".oneprice")
    }
} export default Plp_PO