describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('1').click()
      cy.contains('0').click()
      cy.contains('%').click()
      cy.contains('x').click()
      cy.contains('6').click()
      cy.contains('0').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', '6')
    })
  })