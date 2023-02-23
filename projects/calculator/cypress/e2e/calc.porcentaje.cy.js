describe('Probando funcion de porcentaje (%)', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('6').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.16')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('3').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.03')
  })
})