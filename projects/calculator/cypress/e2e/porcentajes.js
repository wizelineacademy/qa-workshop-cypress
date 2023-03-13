import Big from "big.js"

describe('Prueba 1: 10% de 80', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('8').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '8')
  })
})

describe('Prueba 2 (false): 15% de 500 no debe ser 450', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('5').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('5').click()
    cy.contains('0').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('not.have.text', '450')
  })
})

describe('Prueba 3, números random', () => {
  it('passes', () => {
    var n = Math.floor(Math.random() + 1) 
    var perc = Math.floor(Math.random() + 1)
    var res = Big(n).times(Big(perc).div(100)).toString()

    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.get('.component-button-panel').contains(Math.floor(perc / 100) % 10).click()
    cy.get('.component-button-panel').contains(Math.floor(perc / 10) % 10).click()
    cy.get('.component-button-panel').contains(perc % 10).click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.get('.component-button-panel').contains(Math.floor(n / 10) % 10).click()
    cy.get('.component-button-panel').contains(n % 10).click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', res)
  })
})
