class checkoutPage {
    
 
    preencherCheckout(endereco, cidade, cep, telefone){
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#terms').click()
        cy.get('#place_order').click()
        
    }

}

export default new checkoutPage()