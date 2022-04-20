class Plp_PO {
    static products() {
        return cy.get(".thumbnails > div")
    }
    static productsCheck() {
        this.products().should("be.visible").and('have.length.above', 1)
        this.productPrices().each((element, index, $list) => {
            cy.log(index)
            const text = cy.get('select[name="age"]').eq(index).text()
            cy.log(text)

        })
    }
    static searchCriteriaTextField() {
        return cy.get("#keyword")
    }
    static productPrices() {
        return cy.get(".oneprice")
    }
} export default Plp_PO