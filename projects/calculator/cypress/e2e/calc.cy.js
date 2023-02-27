
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('x').click()
    cy.contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
  })
})

describe('Prueba de porcentaje 1', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('5').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '5')
  })
})

describe('Prueba de porcentaje 2', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('1').click()
    cy.contains('2').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '0.24')
  })
})

describe('Prueba de porcentaje 3', () => {
  it('passes', () => {
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