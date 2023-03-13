describe('porcentaje', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('10').click()
      cy.contains('+').click()
      cy.contains('15').click()
      cy.contains('%').click()
      cy.get('.component-display').first().should('have.text', '0.25')
    })
  })
/* 
Hay que generar una prueba donde de resultado falso.
Y que tal una prueba donde hagas hagas lo siguiente:

Numero random del 1 al 50 se guarda en una variable para el primer operando
Numero random del 1 al 100 se guarda la variable para el operador porcentual
Por medio de regla de tres sacas el resultado y lo guardas en una variable
Utilizas la calculadora para obtener los porcentajes
Al final comparas el resultado de la regla de 3 contra lo obtenido en el display

*/

/* Prueba donde da resultado falso */
  describe('Prueba falso', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('9').click()
      cy.contains('9').click()
      y.contains('%').click()
      cy.contains('x').click()
      cy.contains('3').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('not.have.text', '5')
     
    })
  })

  /* Prueba donde da resultado falso */
  describe('Prueba falso', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('9').click()
      cy.contains('9').click()
      y.contains('%').click()
      cy.contains('x').click()
      cy.contains('3').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('not.have.text', '5')
     
    })
  })

   /* Prueba numeros random. Sacando porcentaje utilizando calculadora */


   /* Numero random del 1 al 50 se guarda en una variable para el primer operando
Numero random del 1 al 100 se guarda la variable para el operador porcentual

Por medio de regla de tres sacas el resultado y lo guardas en una variable
Utilizas la calculadora para obtener los porcentajes

Al final comparas el resultado de la regla de 3 contra lo obtenido en el display */ 
   describe('Prueba falso', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')

      var operando = Math.floor((Math.random()*50)+1)
      var porcentual =Math.floor((Math.random()*100)+1)
      var resultado = ((porcentual*operando)/100).toString()
      cy.contains('AC').click()
      // Se utiliza calculadora para los porcentajes
      for (let operando1 of operando.toString()){
        cy.contains(op1).click()
      }
      cy.contains('x').click()
      for (let porcentaje of porcentual.toString()) {
        cy.contains(porcentaje).click()
      }
      cy.contains('%').click()
      cy.get('.component-display').first().should('not.have.text', resultado)


      
     
    })
  })