/// <reference types="Cypress" />

describe('comment Test', () => {
    var comments = new Array()
    let randomBody = Math.random().toString(30).substring(1) + Math.random().toString(30).substring(1)
    let randomPostId = Math.floor(Math.random() * 1000 + 1)
    it('comment Test Example', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: {
                "body": randomBody,
                "postId": randomPostId
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })
    it('assert Test Example', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/comments",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(function (item) {
                comments.push(item["body"])
                expect(response.status).to.eql(200)
            })
        }).then(() => {
            var lastestComment = comments[comments.length - 1]
            cy.log(lastestComment)
            expect(lastestComment).to.eq(randomBody)
        })
    })
    it('delete Test Example', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/" + comments.length
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})