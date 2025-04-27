class NomeClasse {

    fazLogin(email, senha){
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
    }

    buscarProduto(produto){
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    }

    adicionarProdutoAoCarrinho(produto){
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '4 × “Aether Gym Pant” foram adicionados no seu carrinho.')
    }

    acessaCarrinho(){
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    }

    preencherCheckout(){
        cy.get('#billing_address_1').type('Rua teste')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#billing_postcode').type('04567-000')
        cy.get('#billing_phone').type('92763-2783')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    }

}

export default new NomeClasse()