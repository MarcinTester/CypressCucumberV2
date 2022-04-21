/// <reference types="Cypress" />

describe('PostTest', () => {
    let randomTitle = Math.random().toString(30).substring(1) + Math.random().toString(30).substring(1)
    let randomBody = Math.random().toString(30).substring(1) + Math.random().toString(30).substring(1)
    var titleOfPosts = new Array()
    it('PostTest Example', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "title": randomTitle,
                "body": randomBody
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })
    it('Validate title', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(function (item) {
                titleOfPosts.push(item["title"])
                expect(response.status).to.eql(200)
            })
        }).then(() => {
            var lastestPost = titleOfPosts[titleOfPosts.length - 1]
            cy.log(lastestPost)
            expect(lastestPost).to.eq(randomTitle)
        })
    })
})

