describe('Probar Porcentaje', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('3').click()
      cy.contains('0').click()
      cy.contains('%').click()
      cy.contains('x').click()
      cy.contains('9').click()
      cy.contains('0').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', '27')
    })
  })