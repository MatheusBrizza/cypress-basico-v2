Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Brizola')
        cy.get('#email').type('matheus@teste.com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()
})
