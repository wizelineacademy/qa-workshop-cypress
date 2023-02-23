describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('x').click()
    cy.contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
  }),
  it('pruebaDePorcentaje', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('5').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.05')
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.0005')
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.000005')
  })
})

//PRUEBA DE MACIAS