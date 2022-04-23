/// <reference types="Cypress" />
describe('Coommandspractice', function () {
  it('My FirstTest case', function () {
    cy.visit("https://automationteststore.com/")
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then(function (itemHeader) {
      console.log("selected item: " + itemHeader.text())
    })
    cy.get("#customer_menu_top").then(element => {
      const text = element.text()
      expect(text).to.contain("Login or register")
      console.log(text)
    })
    console.log("test")
  })
  it.only('My FirstTest case', function () {
    cy.visit("https://automationteststore.com/")
    cy.get(".dropdown").each((element, index, $list) => {
      cy.log(element.text())
      cy.log(index)
      if (element.text().includes("Shipping")) {
        cy.wrap(element).click()
      }
    })
  })
})




