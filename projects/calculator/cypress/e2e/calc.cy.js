describe('template spec', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })

  it('probar el funcionamiento del display', () => {
    cy.get('.component-button-panel').contains('2').click()
    cy.contains('x').click()
    cy.get('.component-button-panel').contains('6').click()
    cy.get('.component-display').first().should('have.text', '6')
  })

  //TAREA: Generar pruebas unitarias para sacar operación porcentual.
  it('porcentaje de un entero', () => {
    cy.get('.component-button-panel').contains('1').click()
    cy.get('.component-button-panel').contains('0').click()
    cy.get('.component-button-panel').contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '1')
  })

  it('porcentaje de un entero (40% de 365)', () => {
    cy.get('.component-button-panel').contains('4').click()
    cy.get('.component-button-panel').contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.4')
    cy.contains('x').click()
    cy.get('.component-button-panel').contains('3').click()
    cy.get('.component-button-panel').contains('6').click()
    cy.get('.component-button-panel').contains('5').click()
    cy.contains('=').click()
    cy.get('.component-display').first().should('have.text', '146')
  })

  it('porcentaje en números enteros negativos', () => {
    cy.get('.component-button-panel').contains('2').click()
    cy.get('.component-button-panel').contains('2').click()
    //Se hace click en el boton de (+/-) para hacer el cambio de signo
    cy.get('.component-button-panel').contains('-').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '-0.22')
  })

  it('porcentaje con números decimales', () => {
    cy.get('.component-button-panel').contains('8').click()
    cy.get('.component-button-panel').contains('.').click()
    cy.get('.component-button-panel').contains('2').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.082')
  })

  it('porcentaje con números decimales negativos', () => {
    cy.get('.component-button-panel').contains('8').click()
    cy.get('.component-button-panel').contains('.').click()
    cy.get('.component-button-panel').contains('2').click()
    cy.get('.component-button').contains('-').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '-0.082')
  })
  
  //La prueba falla. No se puede sacar el porcentaje de un valor después de haber
  //realizado alguna otra operación(+ - / x)
  /*
  it('porcentaje después de una resta (LA PRUEBA FALLA)', () => {
    cy.get('.component-button-panel').contains('9').click()
    //Se hace click en el boton de (-) para hacer la resta (no confundir con cambio de signo)
    cy.get('.component-button.orange').contains('-').click()
    cy.get('.component-button-panel').contains('6').click()
    cy.get('.component-button-panel').contains('=').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.03')
  })
  */

  //Sin embargo, si damos clic al botón de porcentaje sin dar clic al botón de igual (=)
  //se obtiene el cálculo correcto
  it('porcentaje después de una resta (sin dar click a "=")', () => {
    cy.get('.component-button-panel').contains('9').click()
    cy.get('.component-button.orange').contains('-').click()
    cy.get('.component-button-panel').contains('6').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.03')
  })

  //Esta prueba funciona, por lo que es posible realizar otras operaciones básicas después
  //de obtener un porcentaje
  it('porcentaje antes de una suma', () => {
    cy.get('.component-button-panel').contains('3').click()
    cy.get('.component-button-panel').contains('2').click()
    cy.contains('%').click()
    cy.get('.component-button.orange').contains('+').click()
    cy.get('.component-button-panel').contains('8').click()
    cy.get('.component-button-panel').contains('=').click()
    cy.get('.component-display').first().should('have.text', '8.32')
  })

  it('porcentaje después de dar click varias veces seguidas a "%"', () => {
    cy.get('.component-button-panel').contains('7').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.07')
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.0007')
  })

  //Prueba que regresa un resultado falso
  it('prueba resultado falso', () => {
    cy.get('.component-button-panel').contains('5').click()
    cy.get('.component-button-panel').contains('0').click()
    cy.contains('%').click()
    cy.get('.component-display').first().should('have.text', '0.5')
    cy.get('.component-button.orange').contains('x').click()
    cy.get('.component-button-panel').contains('3').click()
    cy.get('.component-button-panel').contains('2').click()
    cy.get('.component-button-panel').contains('0').click()
    cy.get('.component-button-panel').contains('=').click()
    cy.get('.component-display').first().should('not.equal', '300')
  })
  
  it('Regla de 3 ÷', () => {
    let primerOperando = Math.floor(Math.random() * 50) + 1;
    let operandoPorcentual = Math.floor(Math.random() * 100) + 1;
    let reglaDeTres = (primerOperando * operandoPorcentual) / 100;

    for (let i = 0; i < primerOperando.toString().length; i++) {
      cy.get(".component-button-panel").contains(primerOperando.toString()[i]).click();
    }
    cy.get('.component-button.orange').contains('x').click()
    for (let i = 0; i < operandoPorcentual.toString().length; i++) {
      cy.get(".component-button-panel").contains(operandoPorcentual.toString()[i]).click();
    }
    cy.get('.component-button-panel').contains('=').click()
    cy.get('.component-button.orange').contains('÷').click()
    cy.get('.component-button-panel').contains('1').click()
    cy.get('.component-button-panel').contains('0').click()
    cy.get('.component-button-panel').contains('0').click()
    cy.get('.component-button-panel').contains('=').click()
    cy.get('.component-display').first().should('have.text', reglaDeTres)
  })

  //La prueba falla. Como lo vimos anteriormente, no es posible sacar el porcentaje después de 
  //hacer una operación como multiplicación
  /*
  it('Regla de 3 %', () => {
    let primerOperando = Math.floor(Math.random() * 50) + 1;
    let operandoPorcentual = Math.floor(Math.random() * 100) + 1;
    let reglaDeTres = (primerOperando * operandoPorcentual) / 100;

    for (let i = 0; i < primerOperando.toString().length; i++) {
      cy.get(".component-button-panel").contains(primerOperando.toString()[i]).click();
    }
    cy.get('.component-button.orange').contains('x').click()
    for (let i = 0; i < operandoPorcentual.toString().length; i++) {
      cy.get(".component-button-panel").contains(operandoPorcentual.toString()[i]).click();
    }
    cy.get('.component-button-panel').contains('=').click()
    cy.contains("%").click();
    cy.get('.component-button-panel').contains('=').click()
    cy.get('.component-display').first().should('have.text', reglaDeTres)
  })
  */
})