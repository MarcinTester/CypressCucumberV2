//obsolete
import HomePage_PO from '../../../support/pageObjects/booking/HomePage_PO'
import SearchPage_PO from '../../../support/pageObjects/booking/SearchPage_PO'
import RegisterPage_PO from '../../../support/pageObjects/booking/RegisterPage_PO'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />
const homePage = new HomePage_PO()
const searchPage = new SearchPage_PO()
const registerPage = new RegisterPage_PO()

Given('I open booking.com Page', function () {
  homePage.visitHomePage()
})
Then('I land on home page', function () {
  homePage.homeButton().should('be.visible')
  homePage.currencyButton().should('be.visible')
  homePage.searchButton().should('be.visible')
  homePage.searchBox().should('be.visible')
  homePage.datePicker().should('be.visible')
})
When('I provide destination {word}', function (destination) {
  homePage.selectDestination(destination)
})
And('Arrival {word} and departure day {word}', function (arrivalDay, departureDay) {
  homePage.selectArrivalDay(arrivalDay)
  homePage.selectDepartureDay(departureDay)
})
And('Number of guests and rooms {word} {word} {word}', function (numberOfAdults, numberOfChildren, numberOfRooms) {
  homePage.selectNumberOfAdults(numberOfAdults)
  homePage.selectNumberOfChildren(numberOfChildren)
  homePage.selectAgeOfChildren(this.data.ageOfChildren)
  homePage.selectNumberOfRooms(numberOfRooms)
})
And('Click search button', function () {
  homePage.searchButton().click()
})
Then('I can see proper search results {word}', function (destination) {
  searchPage.searchResultHeader().should('be.visible').and('include.text', destination)
  console.log("arrivalDay")
})
Then('See availability buttons', function () {
  searchPage.seeAvailabilitybuttons().should('be.visible').and('include.text', 'See availability').should('have.length.above', 20)
})
And('I can see Show prices button', function () {
  searchPage.showPriceButton().should('be.visible').and('include.text', 'Show prices')
})
And('Click Show prices button', function () {
  searchPage.showPriceButton().click()
})
And('I stay in search page', function () {
  searchPage.getUrl().should('include', 'searchresults')
})
Then('Calendar is visible', function () {
  searchPage.calendar().should('be.visible')
})
And('I click Register button', function () {
  homePage.registerButton().click()
})
And('Provide invalid email', function (table) {
  table.hashes().forEach(row => {
    registerPage.emailTextBox().type(row.email)
  })
})
And('Click Continue with email', function () {
  registerPage.continueWithEmailButton().click()
})
Then('I can see error message {string}', function (errorMessage) {
  registerPage.incorrectEmailErrorMessage().should('be.visible').and('include.text', errorMessage)
})
And('I\'m still on Register page', function () {
  registerPage.emailTextBox().should('be.visible')
  registerPage.continueWithEmailButton().should('be.visible')
  registerPage.incorrectEmailErrorMessage().should('be.visible')
})
Then('I can see all important page elements', function () {
  //to do: add POs
  homePage.homeButton().should('be.visible')
  homePage.currencyButton().should('be.visible')
  cy.get('svg[class="bk-icon -streamline-question_mark_circle"]').should('be.visible')
  cy.get('a[class="bui-button bui-button--light bui-traveller-header__product-action"] > span').should('be.visible').then(($e1) => {
    const text = $e1.text()
    console.log(text)
    expect(text).to.includes('List your property')
  })
  cy.get("a[class='bui-button bui-button--secondary js-header-login-link']").eq(0).should('be.visible').then(($e1) => {
    const text = $e1.text()
    console.log(text)
    expect(text).to.includes('Register')
    console.log(expect(text).to.includes('Register'))
  })
  cy.get("a[class='bui-button bui-button--secondary js-header-login-link']").eq(1).should('be.visible').then(($e1) => {
    const signInText = $e1.text()
    console.log(signInText)
    expect(signInText).to.includes('Sign in')
  })
  cy.get('a[aria-current="page"]').should('be.visible').then(($e1) => {
    const text = $e1.text()
    console.log(text)
    expect(text).to.includes('Stays')
    expect($e1.text()).to.includes('Stays')
  })
  cy.get('a[class="bui-tab__link"]').should('be.visible').each(($e1, index, $list) => {
    console.log($e1.text())
  })
  cy.get('a[class="bui-tab__link"]').should('be.visible').then(($e1) => {
    expect($e1.eq(0).text()).to.includes('Flights')
    expect($e1.eq(1).text()).to.includes('Flight + Hotel')
    expect($e1.eq(2).text()).to.includes('Car rental')
    expect($e1.eq(3).text()).to.includes('Attractions')
    expect($e1.eq(4).text()).to.includes('Airport taxis')
  })
})
