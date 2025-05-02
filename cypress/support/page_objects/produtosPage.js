class produtosPage {

    buscarProduto(){
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3073 > .product-block > .caption > .meta > .infor > .name').click()
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    }

    adicionarProdutoAoCarrinho(){
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

}

export default new produtosPage()