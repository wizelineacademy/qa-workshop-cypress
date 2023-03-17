//prueba normal de porcentaje
describe('porcentajes1 ', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('AC').click()
        cy.contains('1').click()
        cy.contains('0').click()
        cy.contains('%').click()
        cy.contains('x').click()
        cy.contains('5').click()
        cy.contains('2').click()
        cy.contains('3').click()
        cy.contains('=').click()
        cy.get('.component-display').first().should('have.text', '52.3')
    })
})

//prueba con porcentaje negativo
describe('porcentajes-negativos ', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('AC').click()
        cy.contains('1').click()
        cy.contains('0').click()
        cy.contains('%').click()
        cy.contains('x').click()
        cy.contains('2').click()
        cy.contains('0').click()
        cy.contains('-').click()
        cy.contains('=').click()
        cy.get('.component-display').first().should('have.text', '-2')
    })
})

//funcion auxiliar para probar numeros aletorios
function porcentajesAux(num) {
    let string = num.toString()

    if (string.length > 2) {
        cy.contains(string[0]).click()
        cy.contains(string[1]).click()
        cy.contains(string[2]).click()
    }
    if (string.length == 2) {
        cy.contains(string[0]).click()
        cy.contains(string[1]).click()
    } else {
        cy.contains(string[0]).click()
    }

}

//prueba con un porcentaje aleatorio
describe('porcentajes-aleatorios ', () => {
    it('passes', () => {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 250) + 1;
        const reglaDeTres = (num1 * num2) / 100

        cy.visit('http://localhost:3000/')
        cy.contains('AC').click()
        porcentajesAux(num1)
        cy.contains('%').click()
        cy.contains('x').click()
        porcentajesAux(num2)
        cy.contains('=').click()
        cy.get('.component-display').first().should('have.text', '52.3')
    })
})
