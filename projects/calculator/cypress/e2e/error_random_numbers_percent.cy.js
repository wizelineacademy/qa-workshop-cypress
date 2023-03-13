function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function clickButton(str) {
  const num = str.toString() 
  for(var i = 0; i < num.length; i++){
    cy.get('.component-button').contains(num[i]).click()
  }
}

function countDecimals(value) { 
  try{
    const noDecimals = value.toString().split(".")[1].length;
    if ((value % 1) != 0) {
      if(noDecimals > 1)
        return 2;
      
      else if(noDecimals == 1)
        return 1;

      return 0;
  }
  }      
  catch{
    return 0;
  }
};

describe('template spec', () => {
  const operando = randomInt(1, 50);
  const porcentual = randomInt(1, 100);
  var  resultado = operando * porcentual / 100;
  resultado = resultado.toFixed(countDecimals(resultado))

  const fixedOperando = randomInt(1, 50);
  const fixedPorcentual = randomInt(1, 100);
  var fixedResultado = fixedOperando * fixedPorcentual / 100;
  fixedResultado = fixedResultado.toFixed(countDecimals(fixedResultado))

  console.log(resultado);
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    clickButton(porcentual)
    cy.get('.component-button.orange').contains('x').click()
    clickButton(operando)
    cy.get('.component-button').contains('%').click()
    cy.get('.component-button.orange').contains('=').click()
    cy.get('.component-display').first().should('have.text', fixedResultado.toString())
  })
})