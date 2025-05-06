describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {    
    cy.visit('../../src/index.html') // cy.visit(' https://centraldeatendimento.tat.com.br/')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
 it('Preencher os campos obrigatórios e enviar formulario.', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)
    cy.get('#firstName').type('Jesi').should('have.value', 'Jesi')
    cy.get('#lastName').type('Freire').should('have.value', 'Freire')
    cy.get('#email').type('teste@teste.com').should('have.value', 'teste@teste.com')
    cy.get('#open-text-area').type(longText,{delay: 0})
    cy.get('button[type="submit"').click()
    cy.contains('Mensagem enviada com sucesso').should('be.visible')
})
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#email').type('teste$teste.com.br').should('have.value', 'teste$teste.com.br')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('contain', 'Valide os campos obrigatórios!').should('be.visible')

})})