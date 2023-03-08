describe('prueba verdadera', () => {
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

describe('prueba falsa', () => {
  it('fails', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('5').click()
    cy.contains('0').click() //cambie este número a 0
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('9').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '5.22')
  })
})

describe('regla de 3', () => {
  it('calcula el resultado con regla de 3', () => {
    let numero = Math.floor(Math.random() * 50) + 1
    let porcentaje = Math.floor(Math.random() * 100) + 1

    let respuesta = (numero * porcentaje) / 100

    let numeroString = numero.toString()
    let porcentajeString = porcentaje.toString()

    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    for (let i = 0; i < porcentajeString.length; i++) {
      cy.contains(porcentajeString[i]).click()
    }
    cy.contains('%').click()
    cy.contains('x').click()
    for (let i = 0; i < numeroString.length; i++) {
      cy.contains(numeroString[i]).click()
    }
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', respuesta.toString())
  })
})