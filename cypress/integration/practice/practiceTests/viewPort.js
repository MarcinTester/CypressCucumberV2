/// <reference types="Cypress" />
describe('Viewport', function () {
    before(function() {
        cy.viewport(550, 750)
    })
    it('My FirstTest case', function () {
        cy.visit("https://automationteststore.com/")

    })
})