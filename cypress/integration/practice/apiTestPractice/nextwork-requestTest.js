/// <reference types="Cypress" />

describe('Network Requests', () => {
    let message = "ERROR!!!"
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/network-requests")
    })
    it("GET Request", () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/*",
        },
            {
                body: {
                    "postId": 1,
                    "id": 1,
                    "name": "test name",
                    "email": "test email",
                    "body": "test body"
                }
            }).as("getComment")
        cy.get(".network-btn").click()
        cy.wait("@getComment").its("response.statusCode").should("eq", 200)
        cy.get(".network-comment").should("contain", "test body")

    })
    it("POST Request", () => {
        cy.intercept("POST", "https://jsonplaceholder.cypress.io/comments").as("postComment")
        cy.get(".network-post").click()
        cy.wait("@postComment").should(({ request, response }) => {
            console.log("request:")
            console.log(request)
            expect(request.body).to.include("email")
            console.log("response:")
            console.log(response)
            expect(response.body).to.have.property("name", "Using POST in cy.intercept()")

            expect(request.headers).to.have.property("content-type")
            expect(request.headers).to.have.property("referer", "https://example.cypress.io/")
        })
    })
    it("PUT Request", () => {
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        },
            {
                statusCode: 404,
                body: { error: message },
                delay: 500
            }).as("putComment")
        cy.get(".network-put").click()
        cy.wait("@putComment")
        cy.get(".network-put-comment").should("contain", message)
    })
})