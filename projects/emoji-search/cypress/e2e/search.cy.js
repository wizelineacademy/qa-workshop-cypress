describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/emoji-search')
    cy.get('input').click()  
    cy.get('input').type('Yum')  
    cy.contains('Yum')
  })
})