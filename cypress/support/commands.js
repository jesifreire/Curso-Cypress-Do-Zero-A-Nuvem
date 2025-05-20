Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
   cy.get('#firstName').type(data.firstName)
   cy.get('#lastName').type(data.lastName)
   cy.get('#email').type(data.email)
   cy.get('#open-text-area').type(data.message)
   cy.get('button[type="submit"').click()           
   cy.contains('Mensagem enviada com sucesso').should('be.visible')
})
