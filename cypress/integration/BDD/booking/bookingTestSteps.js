import HomePage_PO from '../../../support/pageObjects/booking/HomePage_PO'
import SearchPage_PO from '../../../support/pageObjects/booking/SearchPage_PO'
import RegisterPage_PO from '../../../support/pageObjects/booking/RegisterPage_PO'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { times } from 'lodash'
/// <reference types="Cypress" />

Given('I open booking.com Page', function () {
  const homePage = new HomePage_PO()
  homePage.visitHomePage()
})
When('I provide destination {word}', function (destination) {
  const homePage = new HomePage_PO()
  homePage.selectDestination(destination)
})
And('Arrival {word} and departure day {word}', function (arrivalDay, departureDay) {
  const homePage = new HomePage_PO()
  homePage.selectArrivalDay(arrivalDay)
  homePage.selectDepartureDay(departureDay)
})
And('Number of guests and rooms {word} {word} {word}', function (numberOfAdults, numberOfChildren, numberOfRooms) {
  const homePage = new HomePage_PO()
  homePage.selectNumberOfAdults(numberOfAdults)
  homePage.selectNumberOfChildren(numberOfChildren)
  homePage.selectAgeOfChildren(this.data.ageOfChildren)
  homePage.selectNumberOfRooms(numberOfRooms)
})
// And('Age of Children', function (table) {
//   const homePage = new HomePage_PO()
//   table.hashes().forEach(row =>{
//     cy.get('span[class="bui-stepper__display"]').eq(1).then((element) => {
//       const numberOfChildren = element.text()
//       times(numberOfChildren, (index) => {
//           console.log("index: " + index)
//           cy.get('select[name="age"]').eq(index).select(row.Age[0][1])
//       })
//   })
// })
// })





And('Click search button', function () {
  const homePage = new HomePage_PO()
  homePage.searchButton().click()
})
Then('I can see proper search results {word}', function (destination) {
  const searchPage = new SearchPage_PO()

  searchPage.searchResultHeader().should('be.visible').and('include.text', destination)
  console.log("arrivalDay")
})
Then('See availability buttons', function () {
  const searchPage = new SearchPage_PO()
  searchPage.seeAvailabilitybuttons().should('be.visible').and('include.text', 'See availability').should('have.length.above', 20)
})
And('I can see Show prices button', function () {
  const searchPage = new SearchPage_PO()
  searchPage.showPriceButton().should('be.visible').and('include.text', 'Show prices')
})
And('Click Show prices button', function () {
  const searchPage = new SearchPage_PO()
  searchPage.showPriceButton().click()
})
And('I stay in search page', function () {
  const searchPage = new SearchPage_PO()
  searchPage.getUrl().should('include', 'searchresults')
})
Then('Calendar is visible', function () {
  const searchPage = new SearchPage_PO()
  searchPage.calendar().should('be.visible')
})
And('I click Register button', function () {
  const homePage = new HomePage_PO()
  homePage.registerButton().click()
})
And('Provide invalid email', function (table) {
  const registerPage = new RegisterPage_PO()
  table.hashes().forEach(row =>{
    registerPage.emailTextBox().type(row.email)
  })
})
And('Click Continue with email', function () {
  const registerPage = new RegisterPage_PO()
  registerPage.continueWithEmailButton().click()
})
Then('I can see error message {string}', function (errorMessage) {
  const registerPage = new RegisterPage_PO()
  registerPage.incorrectEmailErrorMessage().should('be.visible').and('include.text', errorMessage)
})
And('I\'m still on Register page', function () {
  const registerPage = new RegisterPage_PO()
  registerPage.emailTextBox().should('be.visible')
  registerPage.continueWithEmailButton().should('be.visible')
  registerPage.incorrectEmailErrorMessage().should('be.visible')
})



Then('I can see all important page elements', function () {
  //to do: add POs
  const homePage = new HomePage_PO()
  homePage.homeButton().should('be.visible')
  homePage.currencyButton().should('be.visible')
  cy.get('svg[class="bk-icon -streamline-question_mark_circle"]').should('be.visible')
  cy.get('a[class="bui-button bui-button--light bui-traveller-header__product-action"] > span').should('be.visible').then(($e1) => {
    const text = $e1.text()
    console.log(text)
    expect(text).to.includes('List your property')
  })
  cy.get("a[class='bui-button bui-button--secondary js-header-login-link']").eq(0).should('be.visible').then(($e1) => {
    expect($e1.text()).to.includes('Register')
    console.log($e1.text())
    console.log(expect($e1.text()).to.includes('Register'))
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
