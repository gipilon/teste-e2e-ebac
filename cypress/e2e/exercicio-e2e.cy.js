/// <reference types="cypress" />

import nomeFuncionliadaPage from "../support/page_objects/nome-funcionliada.page";

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
    nomeFuncionliadaPage.fazLogin('giovanna.teste@teste.com', 'teste123')
    
    //seleciona produto
    cy.get('.woocommerce-form > .button').click()
    let produto = 'Aether Gym Pant'
    nomeFuncionliadaPage.buscarProduto(produto)
    
    nomeFuncionliadaPage.adicionarProdutoAoCarrinho()
    nomeFuncionliadaPage.acessaCarrinho()

    //preenche checkout
    nomeFuncionliadaPage.preencherCheckout()
  });


})