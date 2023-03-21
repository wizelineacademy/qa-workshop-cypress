//Andrea Catalina Fernández Mena A01197795 

//Numero random del 1 al 50 se guarda en una variable para el primer operando
var num1 = Math.floor(Math.random() * 51);
let convNum1 = num1.toString();
//Numero random del 1 al 100 se guarda la variable para el operador porcentual
var num2 = Math.floor(Math.random() * 101);
let convNum2 = num2.toString();

function valuesFunc(num, convNum) {
    if (num == 100) {
      cy.contains('1').click()
      cy.contains('0').click()
      cy.contains('0').click()
    }
    else if (num >= 10) {
      cy.contains(convNum.charAt(0)).click()
      cy.contains(convNum.charAt(1)).click()
    }
    else {
      cy.contains(convNum).click()    
    }
}


describe('Prcentage tests ', () => {

//Comentarizar en caso de no ser solicitada 
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('AC').click()
        cy.contains('1').click()
        cy.contains('3').click()  
        cy.contains('%').click()
        cy.contains('x').click()
        cy.contains('2').click()
        cy.contains('=').click()
        cy.get('.component-display').first().should('have.text', '0.26')
      }
      
      )

//prueba donde de resultado falso

    it('test_not_passed', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('AC').click()
      cy.contains('1').click()
      cy.contains('3').click()  
      cy.contains('%').click()
      cy.contains('x').click()
      cy.contains('1').click()
      cy.contains('=').click()
      cy.get('.component-display').first().should('have.text', '2')
    }
    
    )

    /*
Por medio de regla de tres sacas el resultado y lo guardas en una variable
Utilizas la calculadora para obtener los porcentajes
Al final comparas el resultado de la regla de 3 contra lo obtenido en el display 
*/

    it('regla d tres', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('AC').click()
        valuesFunc(num2,convNum2)
        cy.contains('%').click()
        cy.contains('x').click()
        valuesFunc(num1,convNum1)
        cy.contains('=').click()
        cy.get('.component-display').first().should('have.text', numResult)
    }

    )
  })


