import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import StoreHomePage_PO from '../../../support/pageObjects/testStore/StoreHomePage_PO'
import RegistrationPage_PO from '../../../support/pageObjects/testStore/RegistrationPage_PO'
import AccountPage_PO from '../../../support/pageObjects/testStore/AccountPage_PO'
/// <reference types="Cypress" />

Given('I open Automationteststore.com Page', function () {
    StoreHomePage_PO.visitHomePage()
})
Then('Login or register option is visible', function () {
    StoreHomePage_PO.loginOrRegisterButton().should("be.visible").and("contain", "Login or register")
})
When('Navigate to Login or register page', function () {
    StoreHomePage_PO.loginOrRegisterButton().click()
    RegistrationPage_PO.continueButton().click()
})
When('I register new account', function () {
    RegistrationPage_PO.registerRandomUserAccount()
})
Then('New account is created', function () {
    cy.get(".maintext").should("contain", "Your Account Has Been Created!")
})
And('I am logged into new account', function () {
    AccountPage_PO.continueButton().click()
    AccountPage_PO.myAccountHeader().should("be.visible").and("contain", "My Account")
    AccountPage_PO.accountOptions().its('length').should('eq', 9)
})
And('Click continue button on Login or register page', function () {
    cy.get('[title="Continue"]').click()
})
And('I sign up with existing user', function (table) {
    cy.get(".navbar").contains("Login or register").click()
    table.hashes().forEach(row => {
        cy.get("#loginFrm_loginname").type(row.userLogin)
        cy.get("#loginFrm_password").type(row.password)
    })
    cy.get(".btn").contains("Login").click()
})
Then('I\'m logged in into accunt', function () {
    cy.get('.maintext').should("be.visible").and("contain", "My Account")
    cy.get('.heading2 > span').should("be.visible").and("contain", "My Account")
    cy.get('.nav-dash > li').its('length').should('eq', 9)
})
And('I can log out from account', function () {
    cy.get('.side_account_list').contains("Logoff").click()
    cy.get('.maintext').should("be.visible").and("contain", "Account Logout")
})