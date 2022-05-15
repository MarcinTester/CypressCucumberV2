import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage_PO from '../../../support/pageObjects/testStore/HomePage_PO'
import Plp_PO from '../../../support/pageObjects/testStore/Plp_PO'
import RegistrationPage_PO from '../../../support/pageObjects/testStore/RegistrationPage_PO'
import AccountPage_PO from '../../../support/pageObjects/testStore/AccountPage_PO'
import ContentPage_PO from '../../../support/pageObjects/testStore/ContentPage_PO'
import ShoppingCart_PO from '../../../support/pageObjects/testStore/ShoppingCart_PO'
import CheckoutPage_PO from '../../../support/pageObjects/testStore/CheckoutPage_PO'
import Ppd_PO from '../../../support/pageObjects/testStore/Ppd_PO'
/// <reference types="Cypress" />

Given('I open automationteststore.com Page', function () {
    HomePage_PO.visitHomePage()
})
Given('I am using {word}', function (preset) {
    cy.viewport(preset)
})
Then('I land on home page', function () {
    HomePage_PO.homePageElementsCheck()
})
Then('Login or register option is visible', function () {
    HomePage_PO.loginOrRegisterButton().should("be.visible").and("contain", "Login or register")
})
Given('Navigate to Login or register page', function () {
    HomePage_PO.loginOrRegisterButton().click()
    RegistrationPage_PO.continueButton().click()
})
When('I register new account', function () {
    HomePage_PO.loginOrRegisterButton().click()
    RegistrationPage_PO.continueButton().click()
    RegistrationPage_PO.registerRandomUserAccount()
})
Then('New account is created', function () {
    RegistrationPage_PO.confirmationText().should("contain", "Your Account Has Been Created!")
})
And('I am logged into new account', function () {
    AccountPage_PO.continueButton().click()
    AccountPage_PO.myAccountHeader().should("be.visible").and("contain", "My Account")
    AccountPage_PO.accountOptions().its('length').should('eq', 9)
})
And('I can use dropdown menu to select categories', function () {
    HomePage_PO.SelectCategoryDropDown("Cart")
    ShoppingCart_PO.mainTextIsVisible()
})
And('I sign up with user', function (table) {
    HomePage_PO.signIn(table)
})
Then('I\'m logged into account', function () {
    AccountPage_PO.myAccountHeader().should("be.visible").and("contain", "My Account")
    AccountPage_PO.accountOptions().its('length').should('eq', 9)
    AccountPage_PO.userName().should("be.visible").and("contain", "test")
})
And('I can log out from account', function () {
    AccountPage_PO.logOffButton().click()
    AccountPage_PO.logoutHeader().should("be.visible").and("contain", "Account Logout")
})
Then('I can see error message: {string}', function (errorMessage) {
    RegistrationPage_PO.invalidUserErrorMessageCheck(errorMessage)
})
When('I search for {word}', function (product) {
    HomePage_PO.searchForProduct(product)
})
Then('I can see PLP with results', function () {
    Plp_PO.products().should("be.visible").and('have.length.above', 1)
    Plp_PO.searchCriteriaTextField().should("be.visible")
    Plp_PO.productsCheck()
})
Then('Footer contains all expected option', function (table) {
    table.hashes().forEach(row => {
        HomePage_PO.footer().contains(row.headers).should("be.visible")
    })
})
And('Footer options leads to proper content', function (table) {
    table.hashes().forEach(row => {
        HomePage_PO.footer().contains(row.headers).should("be.visible").click()
        ContentPage_PO.mainText().should("contain.text", row.headers).and("be.visible")
        cy.go("back")
    })
})
Then('Test Should randomly fail', function () {
    cy.randomTestFail()
})
And('Search for {string}', function (product) {
    HomePage_PO.searchForProduct(product)
})
When('I click add to cart button', function () {
    Ppd_PO.clickAddToCart()
    ShoppingCart_PO.mainTextIsVisible()
})
Then('{string} is visible in cart', function (product) {
    ShoppingCart_PO.productIsVisibleInCart(product)
})
And('I go to checkout and confrim order', function () {
    ShoppingCart_PO.clickCheckoutButton()
    CheckoutPage_PO.clickConfirmOrder()
})
Then('My order is processed', function () {
    CheckoutPage_PO.mainTextisVisible()
})
And('I can go back to home page', function () {
    CheckoutPage_PO.clickContinueButton()
    HomePage_PO.homePageElementsCheck()
})
And('Choose product {string} colour', function (colour) {
    Ppd_PO.chooseColourRadioButtons(colour)
})
And('Colour {string} is selected', function (colour) {
    ShoppingCart_PO.checkProductColour(colour)
})
And('Choose quantity: {string}', function (quantity) {
    Ppd_PO.chooseQuantity(quantity)
})
And('Quantity {string} is selected', function (quantity) {
    ShoppingCart_PO.CheckQuantityOfProduct(quantity)
})