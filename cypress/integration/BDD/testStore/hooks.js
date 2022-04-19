beforeEach(()=>
{
    cy.fixture('examplesStore').then(function(data)
    {
this.data=data

cy.log("userLogin: " + this.data.userLogin)
    })
})
before(() => {
    cy.log('before')
})
afterEach(() => {
    cy.log('afterEach')
})
after(() => {
    cy.log('after')
})


