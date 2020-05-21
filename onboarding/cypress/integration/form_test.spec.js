// import cy from "cypress"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~start of form inputs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
describe('Form inputs', () => {
    it('can navigate to the site', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
    })

    it('button is disabled', () => {
      cy.get('button')
        .should('be.disabled')
    })
    

    it('can type a name', () => {
      cy.get('input[name="name"]')
        .type('Lady Gaga')
        .should('have.value', 'Lady Gaga')
    })

    it('can type an email', () => {
      cy.get('input[name="email"]')
        .type('lady@gaga.com')
        .should('have.value', 'lady@gaga.com')
    })
    it('can type a password', () => {
      cy.get('input[name="password"]')
        .type('123456')
        .should('have.value', '123456')
    })
    
    it('can select TOS', () => {
        cy.get('input[name="TOS"]')
        .click()

    })
        it('can submit form', () => {
            cy.get('button').click()

        })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~form validation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

it('validitating that fields are empty', () => {
  cy.get('input[name="name"]').should('be.empty')
  cy.get('input[name="email"]').should('be.empty')
  cy.get('input[name="password"]').should('be.empty')
  cy.get('input[name="TOS"]').should('not.be.checked')


})


})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~end of form inputs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\







    