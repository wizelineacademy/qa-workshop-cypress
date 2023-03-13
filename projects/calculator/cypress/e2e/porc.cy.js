describe('Prueba de porcentaje valida', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.02')
  })
})


describe('Prueba que de falso', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/')
    cy.contains('AC').click()
    cy.contains('3').click()
    cy.contains('5').click()
    cy.contains('x').click()
    cy.contains('4').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '10')
  })
})

Cypress.Commands.add('click_bigger_number',(number) => {
  const tmp = number.toString();
  for (let i = 0; i < tmp.length; i++){
    cy.get('.component-button-panel').contains(tmp[i]).click()
  }
})


describe('Porcentaje con regla de tres', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/')

    // Numero random del 1 al 50 se guarda en una variable para el primer operando
    const operando = Math.floor(Math.random() * 50) + 1;
    // Numero random del 1 al 100 se guarda la variable para el operador porcentual
    const porcentual = Math.floor(Math.random() * 100) + 1;
    // Por medio de regla de tres sacas el resultado y lo guardas en una variable
    const resultado = (operando * porcentual) / 100;
    // Utilizas la calculadora para obtener los porcentajes
    cy.contains('AC').click()
    cy.click_bigger_number(porcentual)
    cy.contains('%').click()
    cy.contains('x').click()
    cy.click_bigger_number(operando)
    cy.contains('=').click()
    // Al final comparas el resultado de la regla de 3 contra lo obtenido en el display
    cy.get('.component-display').first().should('have.text', resultado.toString())
  })
})
