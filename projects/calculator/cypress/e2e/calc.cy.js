describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('x').click()
    cy.contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('5').click()
    cy.contains('7').click()
    cy.contains('9').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '5.79')
  })
})

it('usar porcentaje', () => {
  /*
  Se multiplica el primer operando (40) y el segundo (20) y luego se oprime el boton de porcentaje (%)
  X/40 = 20/100 -> X = (40*20)/100 = 8
  */

  cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('4').click()
    cy.contains('0').click()
    cy.contains('x').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '9')
    cy.get('.component-display').first().should('have.text', '8.1')
    cy.get('.component-display').first().should('have.text', '8')

    it('porcentaje usando regla de 3', () => {
      //Se multiplica el primer operando (40) y el segundo (20), luego se oprime el boton de division (÷), luego se utiliza el porcentaje (100) y se oprime el boton de resultado (=)
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('4').click()
      cy.contains('0').click()
      cy.contains('x').click()
      cy.contains('2').click()
      cy.contains('0').click()
      cy.contains('÷').click()
      cy.contains('1').click()
      cy.contains('0').click()
      cy.contains('0').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', '9')
      cy.get('.component-display').first().should('have.text', '8.1')
      cy.get('.component-display').first().should('have.text', '8')
    })
})