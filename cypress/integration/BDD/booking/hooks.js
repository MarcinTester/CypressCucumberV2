beforeEach(()=>
{
    cy.fixture('examples').then(function(data)
    {
this.data=data
cy.log("data")
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


