/// <reference types="cypress" />

import loginPage from "../support/page_objects/loginPage";
import produtosPage from "../support/page_objects/produtosPage";
import checkoutPage from "../support/page_objects/checkoutPage";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    //entra na área de usuário
    cy.get('.icon-user-unfollow').click()
    loginPage.fazLogin('giovanna.teste@teste.com', 'teste123')
    
    //seleciona produto
    cy.get('.woocommerce-form > .button').click()
    let produto = 'Aether Gym Pant'
    produtosPage.buscarProduto(produto)
    
    produtosPage.adicionarProdutoAoCarrinho()
    produtosPage.acessaCarrinho()

    //preenche checkout
    checkoutPage.preencherCheckout()
  });


})