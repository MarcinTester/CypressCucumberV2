//obsolete
class SearchPage_PO {
    acceptButton() {
        return cy.get("button[id='onetrust-accept-btn-handler']")
    }
    showPriceButton() {
        return cy.contains('Show prices')
    }
    searchResultHeader() {
        return cy.get('div[data-capla-component="b-search-web-searchresults/HeaderDesktop"] > div > div > h1')
    }
    seeAvailabilitybuttons() {
        return cy.get('div[data-testid="availability-cta"] > a')
    }
    getUrl() {
        return cy.url()
    }
    calendar() {
        return cy.get('.bui-calendar')
    }
} export default SearchPage_PO