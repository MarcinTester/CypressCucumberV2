class StoreHomePage_PO {
    static visitHomePage() {
        return cy.visit("https://automationteststore.com/")
    }
    static loginOrRegister() {
        return cy.get(".navbar").contains("Login or register")
    }

} export default StoreHomePage_PO
