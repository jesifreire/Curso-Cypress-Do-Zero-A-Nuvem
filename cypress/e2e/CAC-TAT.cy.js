describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {    
    cy.visit('../../src/index.html') // cy.visit(' https://centraldeatendimento.tat.com.br/')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
 it.only('Preencher os campos obrigatórios e enviar formulario.', () => {
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

})
  it('Campo telefone deve aceitar apenas números, caso contrário, deve continuar vazio', () => {
    cy.get('#phone')
    .type('abcdefghij')
    .should('have.value', '')
  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório, mas não é preenchido antes do envio', () => {
    cy.get('#firstName').type('Jesi').should('have.value', 'Jesi')
    cy.get('#lastName').type('Freire').should('have.value', 'Freire')
    cy.get('#email').type('teste@teste.com').should('have.value', 'teste@teste.com')
    cy.get('#phone').should('be.visible')
    cy.get('#phone-checkbox').click()
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('contain', 'Valide os campos obrigatórios!').should('be.visible')

})
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('Jesi').should('have.value', 'Jesi').clear().should('have.value', '')
    cy.get('#lastName').type('Freire').should('have.value', 'Freire').clear().should('have.value', '')
    cy.get('#email').type('teste@teste.com').should('have.value', 'teste@teste.com').clear().should('have.value', '')
   cy.get('#phone').type('123456789').should('have.value', '123456789').clear().should('have.value','')
  })  
  it('exibe mensagem de erro ao enviar o formulário sem preencher os campos obrigatórios', () => {
   cy.get('.button').click()
   cy.get('.error').should('contain', 'Valide os campos obrigatórios!').should('be.visible')  
  })
  it.only('Enviar formulário com sucesso usando um comando customizado', () => {
    const data = {
      firstName: 'Jesi',
      lastName: 'Freire',
      email: 'teste@teste.com',
      message: 'Just a test.'
    }
    cy.fillMandatoryFieldsAndSubmit(data)
    cy.get('.success').should('be.visible')
    })
    
  })
