class HomePage_PO {
    static visitHomePage() {
         cy.visit("https://automationteststore.com/")
         cy.get(".logo").should("be.visible")
         cy.url().should('eq', 'https://automationteststore.com/')
    }
    static loginOrRegisterButton() {
        return cy.get(".navbar").contains("Login or register")
    }
    static signIn(table) {
        cy.get(".navbar").contains("Login or register").click()
        table.hashes().forEach(row => {
            cy.get("#loginFrm_loginname").type(row.userLogin)
            cy.get("#loginFrm_password").type(row.password)
        })
        cy.get(".btn").contains("Login").click()
    }
} export default HomePage_PO
