/// <reference types="Cypress"/>


describe('Teste E2E - Realizando compras com sucesso', () => {
    it('Fluxo de compras de produtos', () => {
       cy.login_teste('standard_user','secret_sauce')     
       cy.get('.product_label').should('contain','Products')
    
//Ordenação de produtos de menor para o maior valor:
       cy.get('.product_sort_container').select('Price (low to high)')
    
//Validação da ordenação dos produtos:         
       cy.get('.inventory_list > :nth-child(1)').should('contain','Sauce Labs Onesie')
       cy.get('.inventory_list > :nth-child(2)').should('contain','Sauce Labs Bike Light')
       cy.get('.inventory_list > :nth-child(3)').should('contain','Sauce Labs Bolt T-Shirt')
       cy.get('.inventory_list > :nth-child(4)').should('contain','Test.allTheThings() T-Shirt (Red)')
       cy.get('.inventory_list > :nth-child(5)').should('contain','Sauce Labs Backpack')
       cy.get('.inventory_list > :nth-child(6)').should('contain','Sauce Labs Fleece Jacket')
    
//Adicionando produtos ao carrinho:
       cy.adicionarProduto('Sauce Labs Onesie')
       cy.adicionarProduto('Sauce Labs Bike Light')
       cy.adicionarProduto('Sauce Labs Bolt T-Shirt')  
       
    
//Checagem da quantidade de produtos adicionados ao carrinho
       cy.get('.fa-layers-counter').should('have.text','3') //usar o have.text pra ter uma confirmação exata do valor, no caso do contain é no caso de conter o valor que precisa ser validado
      //Check no carrinho: 
       cy.get('.fa-layers-counter').click()
       cy.verificaProdutos()
    
//Checkout:
       cy.get('.btn_action').click()
       cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
       cy.get('[data-test="lastName"]').type('Teste Ultimo Nome')
       cy.get('[data-test="postalCode"]').type('12354689')
       cy.get('.btn_primary').click()
    
//Verificando os produtos no checkout
       cy.verificaProdutos()
    
//verificando o valor total:
       cy.get('.summary_total_label').should('have.text','Total: $36.69')
    
       cy.get('.btn_action').click()
    
       cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
        
            
        });
    });
  
