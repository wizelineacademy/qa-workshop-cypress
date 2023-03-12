describe('template spec', () => {

  it('percent1', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('7').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.07')
  })

  it('percent2', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('2').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.12')
  })

  it('percent3', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('7').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.27')
  })
  
})