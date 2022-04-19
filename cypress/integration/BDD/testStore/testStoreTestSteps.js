import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

/// <reference types="Cypress" />

Given('I open Automationteststore.com Page', function () {
    cy.visit("https://automationteststore.com/")
})
Then('Login or register option is visible', function () {
    cy.get(".navbar").contains("Login or register").should("be.visible")
})
When('I Click Login or register', function () {
    cy.get(".navbar").contains("Login or register").click()
})
When('I register new user account', function () {
    cy.get(".navbar").contains("Login or register").click()
    cy.get('[title="Continue"]').click()
    let userFirstName = "test_" + Math.random().toString(30).substring(2)
    let userLastName = "test_" + Math.random().toString(30).substring(2)
    let userEmail = userFirstName + "@gmail.com"
    cy.get('#AccountFrm_firstname').type(userFirstName)
    cy.get('#AccountFrm_lastname').type(userLastName)
    cy.get('#AccountFrm_email').type(userEmail)
    cy.get('#AccountFrm_address_1').type("Address")
    cy.get('#AccountFrm_city').type("City")
    cy.get('#AccountFrm_zone_id').select("Durham")
    cy.get('#AccountFrm_postcode').type("123")
    cy.get('#AccountFrm_loginname').type(userFirstName)
    cy.get('#AccountFrm_password').type("test1")
    cy.get('#AccountFrm_confirm').type("test1")
    cy.get('#AccountFrm_agree').check()
    cy.get('.btn').contains("Continue").click()
})
Then('New account is created', function () {
    cy.get(".maintext").should("contain", "Your Account Has Been Created!")
})
And('I am logged into new account', function () {
    cy.get('.btn').contains("Continue").click()
    cy.get('.maintext').should("be.visible").and("contain", "My Account")
    cy.get('.heading2 > span').should("be.visible").and("contain", "My Account")
    cy.get('.nav-dash > li').its('length').should('eq', 9)
})
And('Click continue button on Login or register page', function () {
    cy.get('[title="Continue"]').click()
})
And('Provide all required Personal Details', function () {
    let userName = "test_" + Math.random().toString(30).substring(2)
    cy.get('#AccountFrm_firstname').type(userName)
})
And('I sign up with existing user', function (table) {
    cy.get(".navbar").contains("Login or register").click()
    // cy.get("#loginFrm_loginname").type("test129129129")
    // cy.get("#loginFrm_password").type("test1")
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