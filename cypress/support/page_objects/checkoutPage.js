class checkoutPage {
    
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

export default new checkoutPage()