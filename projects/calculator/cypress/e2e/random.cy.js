function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function clickNum(array) {
    const arr = array.toString()
    for (let i = 0; i < arr.length; i++) {
        cy.get('.component-button-panel').contains(arr[i]).click()
    }
    return 0
}

describe('template spec', () => {
    var operando = randomIntFromInterval(1,50)
    var porcentual = randomIntFromInterval(1, 100)
    var resultado = (operando*porcentual)/100

    const res = resultado.toString()

    it('passes', () => {
      cy.visit('http://localhost:3000/')

      clickNum(operando)
      cy.contains('x').click()
      clickNum(porcentual)
      cy.contains('%').click()
      cy.get('.component-display').first().contains(res)
    })
})