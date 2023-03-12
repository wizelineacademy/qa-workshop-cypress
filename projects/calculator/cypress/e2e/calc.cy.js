describe('Multiplying test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('9').click()
    cy.contains('x').click()
    cy.contains('3').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '27')
  })
})

describe('Percent test: (20% of 5 = 10)', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('5').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '10')
  })
})


describe('Percent Test: (130% de 50 = 65)', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('1').click()
    cy.contains('3').click()
    cy.contains('0').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('5').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '65')
  })
})

describe('Fake Test: (35% of 120 != 12)', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()
    cy.contains('3').click()
    cy.contains('5').click()
    cy.contains('%').click()
    cy.contains('x').click()
    cy.contains('1').click()
    cy.contains('2').click()
    cy.contains('0').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('not.have.value', '12')
  })
})

describe('Percent test with random numbers', () => {
  it('passes', () => {

    var num1 = Math.floor(Math.random() * 51)
    var num2 = Math.floor(Math.random() * 101)
    var rule_of_three = num1 * num2 / 100

    var len1 = num1.toString().length
    var len2 = num2.toString().length

    cy.visit('http://localhost:3000/')
    cy.contains('AC').click()

    for (let i=0; i<len1; i++) {
      cy.get('.component-button-panel').contains(num1.toString()[i]).click()
    }
    cy.contains('x').click()
    for (let i=0; i<len2; i++) {
      cy.get('.component-button-panel').contains(num2.toString()[i]).click()
    }
    cy.contains('%').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', rule_of_three.toString())

   
  })
})
