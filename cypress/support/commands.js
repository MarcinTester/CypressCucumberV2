//to be deleted soon

import { times } from 'lodash'

Cypress.Commands.add('testCommand', (text) => {
    console.log(text)
    console.log(text)
    console.log(text)
    console.log(text)
})
Cypress.Commands.add("acceptCookies", (productName) => {
    cy.get("button[id='onetrust-accept-btn-handler']").then(element => {
        if (element.not(':visible')) {
            cy.get("button[id='onetrust-accept-btn-handler']").click()
        }
    })
})
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.get('button.btn.btn-info').eq(index).click()
        }

    })
})
Cypress.Commands.add("LoginAPI", () => {

    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/client/auth/login",
        { "userEmail": "rahulshetty@gmail.com", "userPassword": "Iamking@00" }).then(function (response) {
            expect(response.status).to.eq(200)
            Cypress.env('token', response.body.token);
        })
})
Cypress.Commands.add('selectDestination', (destination, fullDestination) => {
    console.log(destination)
    console.log(fullDestination)
    cy.get('input[type="search"]').type(destination)
    cy.get('ul[class="c-autocomplete__list sb-autocomplete__list sb-autocomplete__list-with_photos -visible"] > li').each(($e1, index, $list) => {
        console.log(index)
        console.log($e1.text())
        if ($e1.text().includes(fullDestination)) {
            cy.wrap($e1).click()
        }
    })
})
Cypress.Commands.add('selectArrivalDay', (arrivalDay) => {
    console.log(arrivalDay)
    cy.get('.bui-calendar__control--next > svg').click()
    cy.get('td[class="bui-calendar__date"]').each(($e1, index, $list) => {
        console.log(index)
        console.log($e1.text())

        if ($e1.text().includes(arrivalDay)) {
            cy.wrap($e1).click()
            return false
        }
    })
})
Cypress.Commands.add('selectDepartureDay', (departureDay) => {
    console.log(departureDay)
    cy.get('td[class="bui-calendar__date"]').each(($e1, index, $list) => {
        console.log(index)
        console.log($e1.text())
        if ($e1.text().includes(departureDay)) {
            cy.wrap($e1).click()
            return false
        }
    })
})
Cypress.Commands.add('selectNumberOfAdults', (numberOfAdults) => {
    cy.get('span[class="bui-stepper__display"]').then((element) => {
        if (!element.is(':visible')) {
            cy.get('label[id="xp__guests__toggle"]').click()
        }
    })
    console.log(numberOfAdults)
    cy.get('span[class="bui-stepper__display"]').eq(0).then((element) => {
        const currentNumber = element.text()
        console.log("current: " + currentNumber)
        if (currentNumber > numberOfAdults) {
            times(currentNumber - numberOfAdults, () => {
                cy.get('.sb-group__field-adults > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__subtract-button').click()
            })
        } else {
            times(numberOfAdults - currentNumber, () => {
                cy.get('.sb-group__field-adults > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__add-button').click()
            })
        }
    })
})
Cypress.Commands.add('selectNumberOfChildren', (numberOfChildren) => {
    cy.get('span[class="bui-stepper__display"]').eq(1).then((element) => {
        if (!element.is(':visible')) {
            cy.get('label[id="xp__guests__toggle"]').click()
        }
    })
    console.log(numberOfChildren)
    cy.get('span[class="bui-stepper__display"]').eq(1).then((element) => {
        const currentNumber = element.text()
        console.log("current: " + currentNumber)
        if (currentNumber > numberOfChildren) {
            times(currentNumber - numberOfChildren, () => {
                cy.get('.sb-group-children > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__subtract-button').click()
            })
        } else {
            times(numberOfChildren - currentNumber, () => {
                cy.get('.sb-group-children > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__add-button').click()
            })
        }
    })
})
Cypress.Commands.add('selectAgeOfChildren', (ageOfChildren) => {
    cy.get('span[class="bui-stepper__display"]').eq(1).then((element) => {
        const numberOfChildren = element.text()
        times(numberOfChildren, (index) => {
            console.log("index: " + index)
            cy.get('select[name="age"]').eq(index).select(ageOfChildren[index])
        })
    })
})
Cypress.Commands.add('selectNumberOfRooms', (numberOfRooms) => {
    cy.get('span[class="bui-stepper__display"]').eq(2).then((element) => {
        const currentNumber = element.text()
        times(numberOfRooms - currentNumber, () => {
            cy.get('.sb-group__field-rooms > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__add-button').click()
        })
    })
})
