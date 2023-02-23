describe('Probar Menu de Pag Tec', () => {
    beforeEach(() => {
      cy.visit('https://tec.mx/es/educacion')
    })
  
    it('probar que exista el menu de profesores', () => {
        cy.get('.menu-buscador').click()
        cy.get('#edit-search').type("sistemas{enter}")
    })
  })