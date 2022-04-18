/// <reference types="Cypress" />

describe('practice', function () {

  it('My FirstTest case', function () {


    cy.visit("https://www.booking.com/")

    cy.get('.bui-calendar').then(element => {

      if (element.not(':visible')) {
        cy.log(element.not(':visible'))
        cy.get("div[class='xp__dates xp__group']").click()
      }
    })

  })
})




