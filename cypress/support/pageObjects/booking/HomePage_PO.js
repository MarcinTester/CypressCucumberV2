//obsolete
import { times } from 'lodash'
class HomePage_PO {
    visitHomePage() {
        cy.visit("https://www.booking.com/")
    }
    searchButton() {
        return cy.get('button[class="sb-searchbox__button "]')
    }
    homeButton() {
        return cy.get('svg[class="bk-icon -streamline-booking_logo_dark_bg_mono"]')
    }
    currencyButton() {
        return cy.get('button[data-modal-header-async-type="currencyDesktop"]')
    }
    registerButton() {
        return cy.get("a[class='bui-button bui-button--secondary js-header-login-link']").eq(0)
    }
    searchBox() {
        return cy.get("#ss")
    }
    datePicker() {
        return cy.get(".xp__dates")
    }
    selectDestination(destination) {
        cy.get("input[id='ss']").type(destination)
        cy.wait(2000)
        cy.log(destination)
        cy.get('ul[class="c-autocomplete__list sb-autocomplete__list sb-autocomplete__list-with_photos -visible"] > li').each(($e1, index, $list) => {
            console.log(index)
            cy.log($e1.text())
            if ($e1.text().includes(destination)) {
                cy.wrap($e1).click()
                return false
            }
        })
    }
    selectArrivalDay(arrivalDay) {
        cy.get('.bui-calendar').then(element => {
            if (element.not(':visible')) {
                cy.get("div[class='xp__dates xp__group']").click()
            }
        })
        cy.get('td[class="bui-calendar__date"]').each(($e1, index, $list) => {
            console.log(index)
            console.log($e1.text())

            if ($e1.text().includes(arrivalDay)) {
                 cy.wrap($e1).click({ force: true })
                return false
            }
        })
    }
    selectDepartureDay(departureDay) {
        console.log(departureDay)
        cy.get('td[class="bui-calendar__date"]').each(($e1, index, $list3) => {
            console.log(index)
            console.log($e1.text())
            if ($e1.text().includes(departureDay)) {
                cy.wrap($e1).click({ force: true })
                return false
            }
        })
    }
    selectNumberOfAdults(numberOfAdults) {
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
    }
    selectNumberOfChildren(numberOfChildren) {
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
    }
    selectAgeOfChildren(ageOfChildren) {
        cy.get('span[class="bui-stepper__display"]').eq(1).then((element) => {
            const numberOfChildren = element.text()
            times(numberOfChildren, (index) => {
                console.log("index: " + index)
                cy.get('select[name="age"]').eq(index).select(ageOfChildren[index])
            })
        })
    }
    selectAge(Age) {
        cy.get('span[class="bui-stepper__display"]').eq(1).then((element) => {
            const numberOfChildren = element.text()
            times(numberOfChildren, (index) => {
                console.log("index: " + index)
                cy.get('select[name="age"]').eq(index).select(Age[index])
            })
        })
    }
    selectNumberOfRooms(numberOfRooms) {
        cy.get('span[class="bui-stepper__display"]').eq(2).then((element) => {
            const currentNumber = element.text()
            times(numberOfRooms - currentNumber, () => {
                cy.get('.sb-group__field-rooms > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__add-button').click()
            })
        })
    }
} export default HomePage_PO
