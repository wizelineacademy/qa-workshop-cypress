describe('Regla de tres, porcentaje', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      const operando = 1 + Math.floor((Math.random() * 50))
      const porcentual = 1 + Math.floor((Math.random() * 100)) 
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


