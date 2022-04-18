/// <reference types="Cypress" />

describe('PUTTest', () => {
    it('PUTTest Example', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                "title": "updated title",
                "body": "updated body"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})