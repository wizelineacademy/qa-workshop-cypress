describe('eval porcentaje', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('2').click()
      cy.contains('0').click()
      cy.contains('0').click()
      cy.contains('%').click()
      cy.contains('5').click()
      cy.get('.component-display').first().should('have.text', '2.5')
    })
  })