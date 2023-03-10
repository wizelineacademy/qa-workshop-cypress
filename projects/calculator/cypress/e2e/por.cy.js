describe('Probar porcentaje 1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('3').click()
      cy.contains('5').click()
      cy.contains('%').click()
      cy.get('.component-display').first().should('have.text', '0.35')
    })
})

describe('Probar porcentaje 2', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('5').click()
      cy.contains('%').click()
      cy.contains('x').click()
      cy.contains('1').click()
      cy.contains('0').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', '0.5')
    })
})

describe('Porcentaje falso', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('5').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('1').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('not.equal', '0.5')
  })
})

Cypress.Commands.add('click_number',(number) => {
  const aux = number.toString();
  for (let i = 0; i < aux.length; i++){
    cy.get('.component-button-panel').contains('div', aux[i]).click()
  }
})

describe('Regla de tres, porcentaje', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    // Numero random del 1 al 50 se guarda en una variable para el primer operando
    const operando = 1 + Math.floor((Math.random() * 50))
    // Numero random del 1 al 100 se guarda la variable para el operador porcentual
    const porcentual = 1 + Math.floor((Math.random() * 100)) 
    // Porcentaje con regla de tres
    const resultado = (porcentual * operando) / 100
    cy.contains('AC').click()
    cy.click_number(operando)
    cy.contains('x').click()
    cy.click_number(porcentual)
    cy.contains('%').click()
    cy.contains('=').click()  
    cy.get('.component-display').first().contains(resultado)
  })
})
