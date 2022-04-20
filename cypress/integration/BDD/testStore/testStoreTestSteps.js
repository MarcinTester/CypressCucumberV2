import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage_PO from '../../../support/pageObjects/testStore/HomePage_PO'
import RegistrationPage_PO from '../../../support/pageObjects/testStore/RegistrationPage_PO'
import AccountPage_PO from '../../../support/pageObjects/testStore/AccountPage_PO'
/// <reference types="Cypress" />

Given('I open automationteststore.com Page', function () {
    HomePage_PO.visitHomePage()
})
Then('I land on home page', function () {
    HomePage_PO.homePageElementsCheck
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