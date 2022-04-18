/// <reference types="Cypress" />

describe('sign up test', () => {
    let randomString = Math.random().toString(30).substring(2)
    let username = "testUser" + randomString
    let email = username + "@gmail.com"
    let password = "test1"
    it('sign up test Example', () => {
        cy.intercept("POST", "**/*.realworld.io/api/users").as("newUser")
        cy.visit("http://localhost:4200/")

        cy.get(".nav").contains("Sign up").click()
        cy.get('[placeholder="Username"]').type(username)
        cy.get('[placeholder="Email"]').type(email)
        cy.get('[placeholder="Password"]').type(password)
        cy.get(".btn").contains("Sign up").click()

        cy.wait("@newUser").should(({ request, response }) => {
            cy.log("request: " + JSON.stringify(request))
            cy.log("response: " + JSON.stringify(response))

            cy.log("statusCode: " + response.statusCode)
            expect(response.statusCode).to.eq(200)

            cy.log("username: " + request.body.user.username)
            expect(request.body.user.username).to.eq(username)
            cy.log("emaila: " + request.body.user.email)
            expect(request.body.user.email).to.eq(email)
        })
    })
    it("Login and Mock Tags Test", () => {
        cy.intercept("GET", "**/tags", {fixture: "popularTags.json"})
        cy.visit("http://localhost:4200/")
        cy.get(".nav").contains("Sign in").click()
        cy.get('[placeholder="Email"]').type(email)
        cy.get('[placeholder="Password"]').type(password)
        cy.get(".btn").contains("Sign in").click()
        cy.get(':nth-child(4) > .nav-link').contains(username)

        cy.get(".tag-list").should("contain", "JS").and("contain", "Cypress")
    })
    it("Mock Data Test", () => {
        cy.intercept("GET", "**/api/articles*", {fixture: "mockData.json"}).as("articles")
        cy.visit("http://localhost:4200/")
        cy.get(".nav").contains("Sign in").click()
        cy.get('[placeholder="Email"]').type(email)
        cy.get('[placeholder="Password"]').type(password)
        cy.get(".btn").contains("Sign in").click()
        cy.get(':nth-child(4) > .nav-link').contains(username)
        cy.wait("@articles")
        cy.get(".feed-toggle > .nav > :nth-child(2) > .nav-link").click()
    
    })
})