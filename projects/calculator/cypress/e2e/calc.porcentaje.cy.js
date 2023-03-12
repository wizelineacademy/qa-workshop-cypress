describe('Probando funcion de porcentaje (%)', () => {
  it('esta prueba debe dar falso', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('8').click()
    cy.contains('4').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.77')
  })

  //---------------------------------------------------
  //Se multiplica el primer número (1 a 50) con el segundo (1 a 100) y luego se da clic a porcentual
  //Por regla de 3 el resultado debería ser:

    /*   X     80                  80 * 35
        --- = ----    ----->   X = ------- = 28
         35   100(%)                 100
    */

  it('resultado porcentaje', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('3').click()
    cy.contains('5').click()
    cy.contains('x').click()
    cy.contains('8').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '28')
  })

  it('regla de 3 manual', () => {
    //Se multiplica el primer número (1 a 50) con el segundo (1 a 100) y luego se da clic a porcentual
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('3').click()
    cy.contains('5').click()
    cy.contains('x').click()
    cy.contains('8').click()
    cy.contains('0').click()
    cy.contains('÷').click()
    cy.contains('1').click()
    cy.contains('0').dblclick()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '28')
  })
})