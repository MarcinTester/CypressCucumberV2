class HomePage_PO {
    static visitHomePage() {
        cy.visit("https://automationteststore.com/")
        cy.get(".logo").should("be.visible")
        cy.url().should('eq', 'https://automationteststore.com/')
    }
    static loginOrRegisterButton() {
        return cy.get(".navbar").contains("Login or register")
    }
    static homeButton() {
        return cy.get(".logo")
    }
    static currencyMenu() {
        return cy.get(".block_6 > .nav > .dropdown > .dropdown-toggle")
    }
    static searchField() {
        return cy.get("#filter_keyword")
    }
    static searchButton() {
        return cy.get(".button-in-search")
    }
    static homePageElementsCheck() {
        this.homeButton().should("be.visible")
        this.currencyMenu().should("be.visible")
        this.searchField().should("be.visible")
    }
    static signIn(table) {
        cy.get(".navbar").contains("Login or register").click()
        table.hashes().forEach(row => {
            cy.get("#loginFrm_loginname").type(row.userLogin)
            cy.get("#loginFrm_password").type(row.password)
        })
        cy.get(".btn").contains("Login").click()
    }
    static searchForProduct(product) {
        this.searchField().type(product)
        this.searchButton().click()
    }
    static products() {
        return cy.get(".thumbnails > div")
    }
    static footer() {
        return cy.get(".info_links_footer > li")
    }
} export default HomePage_PO
