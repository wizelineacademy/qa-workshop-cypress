describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('x').click()
    cy.contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
  }),
    it('pruebaDePorcentaje', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('5').click()
      cy.contains('%').click()
      cy.get('.component-display').first().should('have.text', '0.05')
      cy.contains('%').click()
      cy.get('.component-display').first().should('have.text', '0.0005')
      cy.contains('%').click()
      cy.get('.component-display').first().should('have.text', '0.000005')
    }),
    it('pruebaFalso', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('1').click()
      cy.contains('-').click()
      cy.contains('1').click()
      cy.get('.component-display').first().should('not.have.text', '0')
    }),
    it('pruebaRandom', () => {
      let operando = random(1, 50);
      let porcentual = random(1, 100);
      console.log(operando);
      console.log(porcentual);
      //  operando - 100%
      //      X    - porcentual
      let result = (porcentual * operando) / 100;
      console.log(result);

      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains(Math.floor((porcentual/100)%10)).click()
      cy.contains(Math.floor((porcentual/10)%10)).click()
      cy.contains(Math.floor(porcentual%10)).click()
      cy.contains('%').click()
      cy.contains('x').click()
      cy.contains(Math.floor((operando/10)%10)).click()
      cy.contains(Math.floor(operando%10)).click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', result)

    })
})

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

//PRUEBA DE MACIAS