describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('5').click()
      cy.contains('%').click()
      cy.get('.component-display').first().should('have.text', '0.05')
    })

    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('AC').click()
        cy.contains('1').click()
        cy.contains('0').click()
        cy.contains('%').click()
        cy.get('.component-display').first().should('have.text', '0.1')
      })

    // Prueba de falso resultado
    it('False', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('5').click()
      cy.contains('-').click()
      cy.contains('3').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', '9')
    })

    // Prueba de regla de 3
    it('Regla de 3', () => {
      cy.visit('http://localhost:3000/')

       
      // Obtener valor de 1 a 50
      let operator = Math.floor(Math.random() * 50) + 1

      // Obtener valor de 1 a 100
      let percent = Math.floor(Math.random() * 100) + 1

      // Convertir a strings para fines de proceso
      let operatorString = operator.toString();
      let percentString = percent.toString();

      // Guardar resultado obtenido por medio de regla de 3 en una variable
      let result = ((operator * percent) / 100)
      let resultString = result.toString();
      
      cy.contains('AC').click()
      for (let i = 0; i < percentString.length; i++) {
        cy.contains(percentString[i]).click()
      }
      cy.contains('%').click()
      cy.contains('x').click()
      for (let i = 0; i < operatorString.length; i++) {
        cy.contains(operatorString[i]).click()
      }
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', result)
    })
  })