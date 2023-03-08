import Big from "big.js"

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

describe('prueba de resultado false', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('not.have.text', '200')
  })
})

describe('Prueba de numeros random', () => {
  it('passes', () => {
    var num = Math.floor((Math.random() * 50) + 1)
    var porcentaje = Math.floor((Math.random() * 100) + 1)

    var resultado = Big(num).times(Big(porcentaje).div(100)).toString()

    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.get('.component-button-panel').contains(Math.floor(porcentaje/100)%10).click()
    cy.get('.component-button-panel').contains(Math.floor(porcentaje/10)%10).click()
    cy.get('.component-button-panel').contains(porcentaje%10).click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.get('.component-button-panel').contains(Math.floor(num/10)%10).click()
    cy.get('.component-button-panel').contains(num%10).click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', resultado)
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