describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.2')
  })
})