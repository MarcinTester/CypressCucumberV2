/// <reference types="Cypress" />

describe('PUT Test', () => {
    let randomBody = Math.random().toString(30).substring(1) + Math.random().toString(30).substring(1)
    let randomTitle = Math.random().toString(30).substring(1) + Math.random().toString(30).substring(1)
    it('PUT Test Example', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/4",
            body: {
                "title": randomTitle,
                "body": randomBody
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
    it('GET Test Example', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/4",
        }).then(response => {
            expect(response.status).to.eql(200)
            cy.log(response.body.title)
            cy.log(response.body.body)
            expect(response.body.title).to.eq(randomTitle)
            expect(response.body.body).to.eq(randomBody)
        })
    })
})