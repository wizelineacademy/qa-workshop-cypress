describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('5').click()
    cy.contains('8').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('9').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '5.22')
  })
})