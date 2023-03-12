describe('template spec', () => {

  it('Rule of 3 - True Percent Test', () => {

    // 50 - 100%
    // x  - 25%

    // x = 12.5

    cy.visit('http://localhost:3000/')

    // Generate random numbers
    let firstOperand = Math.floor(Math.random()*50)+1 // 50
    let secondOperand = Math.floor(Math.random()*100)+1 // 25

    // Rule of 3
    let answer = ((firstOperand*secondOperand)/100).toString() // 12.5

    cy.contains('AC').click()

    for (let num of firstOperand.toString()) {
      cy.contains(num).click()
    }

    cy.contains('x').click()

    for (let num of secondOperand.toString()) {
      cy.contains(num).click()
    }

    cy.contains('%').click() 

    cy.get('.component-display').first().should('have.text', answer) // 12.5 == 12.5

  })

  it('Rule of 3 - False Percent Test', () => {

    // 50 - 100%
    // x  - 25%

    // x = 12.5

    cy.visit('http://localhost:3000/')

    // Generate random numbers
    let firstOperand = Math.floor(Math.random()*50)+1 // 50
    let secondOperand = Math.floor(Math.random()*100)+1 // 25

    // Rule of 3
    let answer = ((firstOperand*secondOperand)/100).toString() // 12.5

    cy.contains('AC').click()

    for (let num of firstOperand.toString()) {
      cy.contains(num).click()
    }

    cy.contains('÷').click()

    for (let num of secondOperand.toString()) {
      cy.contains(num).click()
    }

    cy.contains('%').click()

    cy.get('.component-display').first().should('have.text', answer) // 0.02 != 12.5

  })
  
})