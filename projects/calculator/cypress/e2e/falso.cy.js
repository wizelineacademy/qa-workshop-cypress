describe('Prueba resultado falso', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('AC').click()
        cy.contains('1').click()
        cy.contains('0').click()
        cy.contains('0').click()
        cy.contains('%').click()
        cy.contains('x').click()
        cy.contains('5').click()
        cy.contains('=').click()
        cy.get('.component-display').first().should('not.have.text', '6')
    })
})

describe('Prueba resultado falso', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('AC').click()
        
        var op = Math.floor((Math.random() * 50) + 1)
        var perc = Math.floor((Math.random() * 100) + 1)
        var result = ((op * perc) / 100).toString()

        for(let count of operando.toString()){
            cy.contains(count).click()
        }

        cy.contains('x').click()

        for(let count of perc.toString()){
            cy.contains(count).click()
        }

        cy.contains('%').click()

        cy.get('.component-display').first().should('not.have.text', result)
    })
})