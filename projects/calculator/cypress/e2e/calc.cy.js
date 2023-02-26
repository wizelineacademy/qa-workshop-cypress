describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('9').click()
    cy.contains('x').click()
    cy.contains('3').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '27')
  })
})

describe('La prueba de porcentaje 20% de 5 = 10', () => {
  it('pasa', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('5').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '10')
  })
})

describe('La prueba de porcentaje 35% de 120 = 42', () => {
  it('pasa', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('3').click()
    cy.contains('5').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('1').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '42')
  })
})

describe('La prueba de porcentaje 130% de 50 = 65', () => {
  it('pasa', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('3').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('5').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '65')
  })
})