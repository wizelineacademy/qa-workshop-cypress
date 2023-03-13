describe('Prueba Porcentajes', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('Pasa si es igual a regla de 3', () => {

      let operando = Math.floor(Math.random() * 50) + 1;
      let porcentual = Math.floor(Math.random() * 100 ) + 1;
      let resultado_esperado = ((operando * porcentual) / 100).toString();

      cy.contains('AC').click()
      
      for(let i of operando.toString()) {
        cy.contains(i).click()
      }

      cy.contains('x').click()

      for(let i of porcentual.toString()) {
        cy.contains(i).click()
      }

      cy.contains('%').click()


      cy.get('.component-display').first().should('have.text', resultado_esperado)

    })
  })