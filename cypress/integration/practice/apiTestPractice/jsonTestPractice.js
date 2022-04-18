/// <reference types="Cypress" />

describe('jsonTestPractice', function () {
    it('Json Object Example', function () {
        const example = { "name": "Bob", "name2": "Tom" }
        const exampleArray = ["Anna", "Tim", "Rose"]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }
        cy.log(example["name"])
        cy.log(example["name2"])
        cy.log(example.name2)
        cy.log("---------------------------")
        cy.log(exampleArray[0])
        cy.log(exampleArray[1])
        cy.log("---------------------------")
        cy.log(users.Students[0].lastName)

    })
})




