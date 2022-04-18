/// <reference types="Cypress" />

describe('DELETE test', () => {
    it('DELETE test Example', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/3"
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})