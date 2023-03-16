describe('template spec', () => {
  it('Caso verdadero de la prueba: Regla de 3', () => {
    cy.visit('http://localhost:3000/')
    // Generamos los numeros de manera aleatoria de ambos operandos
    let operando_1 = Math.floor(Math.random()*50)+1 
    let operando_2 = Math.floor(Math.random()*100)+1 
    // Aplicamos la regla de 3
    let res = ((operando_1*operando_2)/100).toString()
    cy.contains('AC').click()
    for (let n of operando_1.toString()) {
      cy.contains(n).click()
    }
    cy.contains('x').click()
    for (let n of operando_2.toString()) {
      cy.contains(n).click()
    }
    cy.contains('%').click() 
    cy.get('.component-display').first().should('have.text', res) 
  })


  it('Caso falso de la prueba: Regla de 3', () => {
    cy.visit('http://localhost:3000/')
      // Generamos los numeros de manera aleatoria de ambos operandos
    let operando_1 = Math.floor(Math.random()*50)+1 
    let operando_2 = Math.floor(Math.random()*100)+1 
    // Aplicamos la regla de 3
    let res = ((operando_1*operando_2)/100).toString() 
    cy.contains('AC').click()
    for (let n of operando_1.toString()) {
      cy.contains(n).click()
    }
    cy.contains('+').click()
    for (let n of operando_2.toString()) {
      cy.contains(n).click()
    }
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', res) 
  })
})