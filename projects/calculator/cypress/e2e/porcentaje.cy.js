describe('porcentaje', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('10').click()
      cy.contains('+').click()
      cy.contains('15').click()
      cy.contains('%').click()
      cy.get('.component-display').first().should('have.text', '0.25')
    })
  })
