/// <reference types="Cypress" />
describe('Coommandspractice', function () {
    it('My FirstTest case', function () {
        cy.visit("https://automationteststore.com/")
        cy.get(".info_links_footer > li").each((element, index, $list) => {
            cy.wrap(element).should("contain", "About Us")
        })
    })
})
