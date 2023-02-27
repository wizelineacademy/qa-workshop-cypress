describe('Probando porcentajes (%)', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('5').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.25')
  })
})

describe('Probando porcentajes (%)', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('5').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.15')
  })
})

describe('Probando porcentajes (%)', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('9').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.19')
  })
})

describe('Probando porcentajes (%)', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('6').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.6')
  })
})