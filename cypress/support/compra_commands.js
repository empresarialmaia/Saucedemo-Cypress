/// <reference types="Cypress"/>

Cypress.Commands.add('verificaProdutos',()=>{
   cy.get(':nth-child(3) > .cart_item_label').should('contain','Sauce Labs Onesie')
   cy.get(':nth-child(4) > .cart_item_label').should('contain','Sauce Labs Bike Light')
   cy.get(':nth-child(5) > .cart_item_label').should('contain','Sauce Labs Bolt T-Shirt')


})

Cypress.Commands.add('adicionarProduto', (produtoNome) => {
   cy.contains(produtoNome).click();
   cy.get('.btn_primary').click();
   cy.get('.inventory_details_back_button').click({ force: true });

 });

 
 
 
 
 