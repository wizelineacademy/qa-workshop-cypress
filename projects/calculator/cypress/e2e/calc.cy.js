describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.2')

    it('porcentaje', () => {
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
    it('false', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('2').click()
      cy.contains('+').click()
      cy.contains('5').click()
      cy.get('.component-display').first().should('not.have.text', '7')
    }),
    it('numRandom', () => {
      let numu = random(1, 50);
      let dos = random(1, 100);
      let result = (dos * numu) / 100;

      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains(Math.floor((dos/100)%10)).click()
      cy.contains(Math.floor((dos/10)%10)).click()
      cy.contains(Math.floor(dos%10)).click()
      cy.contains('%').click()
      cy.contains('x').click()
      cy.contains(Math.floor((numu/10)%10)).click()
      cy.contains(Math.floor(numu%10)).click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', result)

    })
})

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
  })
