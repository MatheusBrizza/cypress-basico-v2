// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
    const THREE_SECONDS_IN_MS = 3000
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    //Exercícios aula 2

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    it('preenche os campos obrigatórios e envia o formulário', function() {
        const textoLongo = 'Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste, Teste, teste, teste,'
        cy.clock()
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Brizola')
        cy.get('#email').type('matheus@teste.com')
        cy.get('#open-text-area').type(textoLongo, {delay: 0 })
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.success').should('not.be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.clock()
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Brizola')
        cy.get('#email').type('matheus.teste.com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.error').should('not.be.visible')
    })

    it('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
        cy.get('#phone')
        .type('abc')
        .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.clock()
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Brizola')
        cy.get('#email').type('matheus@teste.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.error').should('not.be.visible')
    })

    Cypress._.times(3, function() {
        it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
            cy.get('#firstName')
            .type('Matheus')
            .should('have.value', 'Matheus')
            .clear()
            .should('be.empty')
            cy.get('#lastName')
            .type('Brizola')
            .should('have.value', 'Brizola')
            .clear()
            .should('be.empty')
            cy.get('#email')
            .type('matheus@teste.com')
            .should('have.value', 'matheus@teste.com')
            .clear()
            .should('be.empty')
            cy.get('#phone')
            .type('123456789')
            .should('have.value', '123456789')
            .clear()
            .should('be.empty')
        })
    })
    

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.clock()
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.error').should('not.be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.success').should('not.be.visible')
    })

    // Exercícios aula 3

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product').select(1).should('have.value', 'blog')
    })

    // Exercícios aula 4 - radio

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value', 'feedback')
    })

    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]').check()
        .each(function($radio) {
            cy.wrap($radio).check().should('be.checked')
        })
        
    }) 

    // Exercícios aula 5 - checkbox

    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type=checkbox]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
    })

    // Exercícios aula 6 - upload de arquivos

    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json', { encoding: null }).as('exampleFile') 
        cy.get('input[type="file"]')
        .selectFile('@exampleFile')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    // Exercícios aula 7 - links que abrem em outra aba


    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
        cy.contains('Talking About Testing').should('be.visible')
    })

    // Exercícios aula 11 - invoke

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', function() {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
      })

    it('preenche a area de texto usando o comando invoke', function() {
        const longText = Cypress._.repeat('0123456789', 20)

        cy.get('#open-text-area')
          .invoke('val', longText)
          .should('have.value', longText)
    })

    // Exercícios aula 11 - cy.request()

    it('faz uma requisição HTTP', function() {
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should(function(response) {
            const { status, statusText, body } = response
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
            expect(body).to.include('CAC TAT')
        })
    })

    // Desafio final aula 12 - achar o gato

    it.only('encontrar o gato', function() {
        cy.get('#cat')
        .invoke('show')
        .should('be.visible')
    })
})


