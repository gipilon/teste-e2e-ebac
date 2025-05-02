class loginPage {

    fazLogin(email, senha){
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
    }

}

export default new loginPage()