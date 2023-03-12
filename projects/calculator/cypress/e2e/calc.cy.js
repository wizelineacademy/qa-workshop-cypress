describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('x').click()
    cy.contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
  })

  it('passes porcentaje', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('4').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.4')
  })

  it('passes porcentaje', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('7').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.07')
  })

  it('Porcentaje regla de 3', () => {
    cy.visit('http://localhost:3000/')

    // Num aleatorio 1 a 50 -> operando
    let operando = Math.floor(Math.random() * 50) + 1

    // Num aleatorio 1 a 100 -> operador porcentual
    let porcentual = Math.floor(Math.random() * 100) + 1

    // Regla de 3 para resultado -> guardar en variable
    let regla3 = ((operando * porcentual) / 100).toString


    // Utilizar calc para obtener los porcentajes
    cy.contains('AC').click()
    for (let op1 of operando.toString()) {
      cy.contains(op1).click()
    }
    cy.contains('x').click()
    for (let por1 of porcentual.toString()) {
      cy.contains(por1).click()
    }
    cy.contains('%').click()

    // Comparar resultados
    cy.get('.component-display').first().should('have.text', regla3)
  })


})