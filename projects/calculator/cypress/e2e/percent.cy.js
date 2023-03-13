
var num1 = Math.floor(Math.random() * 51);
let inp1 = num1.toString();
var num2 = Math.floor(Math.random() * 101);
let inp2 = num2.toString();
var numResult = (num2 * num1) / 100;

function setDigits(num, inp) {
    if (num == 100) {
      cy.contains('1').click()
      cy.contains('0').click()
      cy.contains('0').click()
    }
    else if (num >= 10) {
      cy.contains(inp.charAt(0)).click()
      cy.contains(inp.charAt(1)).click()
    }
    else {
      cy.contains(inp).click()    
    }
}

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

    it('not passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('1').click()
      cy.contains('0').click()
      cy.contains('%').click()
      cy.contains('x').click()
      cy.contains('8').click()
      cy.contains('0').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', '6')
    })

    it('rule of three', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      setDigits(num2, inp2)
      cy.contains('%').click()
      cy.contains('x').click()
      setDigits(num1, inp1)
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', numResult)
    })
})
