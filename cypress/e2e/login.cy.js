
describe('Testcase: Login', () =>{

    context('Successful', () => {
        
        beforeEach(() => {
            // visit ('/login') -> will visit baseUrl + /login
            // baseUrl is set in config - cypress.json file
            cy.visit('https://ibit.asia/en/fund/withdraw')
        })

        it.only('Login Successfully', () => {

            cy.login("Louis1bit", "04vdnqcu")
            cy.verifyLoginSuccessfully()

        })
    }) 

    context('Failed', () => {
        
        beforeEach(() => {
            cy.visit('/web/index.php/auth/login')
        })

        it('Invalid Account', () => {

            cy.login("Admin", "test123")
            cy.verifyInvalidAccount()
            
        })

        it('Empty Email Field', () => {
            cy.login(" ", "test123")
            cy.verifyEmptyFields()

        })

        it('Empty Password Fields', () => {
            cy.login("Test123", " ")
            cy.verifyEmptyFields()

        })

        it('Empty Fields', () => {
            cy.login(" ", " ")
            cy.verifyEmptyFields()

        })
    }) 
})