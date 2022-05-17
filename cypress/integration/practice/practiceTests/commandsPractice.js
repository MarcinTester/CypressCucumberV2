/// <reference types="Cypress" />
describe('Coommandspractice', function () {
  it('contain case', function () {
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
  it('My FirstTest case', function () {
    cy.visit("https://automationteststore.com/")
    cy.get(".dropdown").each((element, index, $list) => {
      cy.log(element.text())
      cy.log(index)
      if (element.text().includes("Shipping")) {
        cy.wrap(element).click()
      }
    })
  })
  it('My FirstTest case', function () {
    cy.visit("https://automationteststore.com/")
    cy.get(".nav-pills > li").contains("Makeup").click()
  })
  it('Random fail test', function () {
    cy.visit("https://automationteststore.com/")
    const n = () => Cypress._.random(0, 1 )
    const x = n()
    cy.log(x)
    if (x != 1) {
      throw new Error("test fails here")
    }
  })
  it('Locators', function () {
    cy.visit("https://automationteststore.com/")
   cy.get("ul[class='dropdown-menu currency']").invoke('show')
   cy.get("ul[class='dropdown-menu currency'] > li").contains('€ Euro').click()
   cy.get("ul[class='dropdown-menu currency']").invoke('show')
   cy.get("ul[class='dropdown-menu currency'] > li").contains('£ Pound Sterling').click()
   cy.get("ul[class='dropdown-menu currency']").invoke('show')
   cy.get("ul[class='dropdown-menu currency'] > li").contains('$ US Dollar').click()
   cy.wait(3000)
  })
  it.only('My FirstTest case', function () {
    cy.visit("https://www.facebook.com/")
    cy.origin("https://automationteststore.com/", () => {
    cy.visit("https://automationteststore.com/")
    cy.get(".nav-pills > li").contains("Makeup").click()
  })
  })
})