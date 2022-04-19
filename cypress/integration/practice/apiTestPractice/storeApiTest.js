/// <reference types="Cypress" />

describe('Store Test', () => {

    it('Store Test Example', () => {
        cy.visit("https://automationteststore.com/")
        let result = cy.request("https://automationteststore.com/")
        result.its("status").should("equal", 200)
      
    })
})
