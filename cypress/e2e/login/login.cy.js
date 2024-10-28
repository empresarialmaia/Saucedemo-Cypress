/// <reference types="Cypress" />

describe('Teste funcional de login', () => {
it('Deve realizar o login com sucesso', () => {        
   cy.login_teste('standard_user','secret_sauce')
   cy.get('.product_label').should('contain','Products')
    });

    
it('Validar usuario errado', () => {
      cy.login_teste('incorreto','secret_sauce')
      cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
      

            
        });

        
it('Validar senha errada', () => {
      cy.login_teste('standard_user','incorreto')             
      cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')

    });

});



