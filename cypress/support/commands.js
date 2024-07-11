// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { header } from '../selector/homepage.css'
import { emailField, passwordField, loginButton, warningText, warningEmail, warrningPassword } from '../selector/login.css'

Cypress.Commands.add('login', (email, password) => {
    cy.get(emailField).type(email)
    cy.get(passwordField).type(password)
    cy.get(loginButton).click()
})

Cypress.Commands.add('verifyLoginSuccessfully', () => {
    cy.get(header).should('have.text', "Dashboard")
    cy.log("Login Successfully")
})

Cypress.Commands.add('verifyInvalidAccount', () => {
    cy.get(warningText).should('have.text', "Invalid credentials")
    cy.log("Invalid Account")
})

Cypress.Commands.add('verifyEmptyFields', () => {

    cy.get(emailField).then(($el) => {

        if ($el.val() == " "){
            cy.get(warningEmail).should('have.text', "Required")
            cy.log('Email field is empty')
        }

    })

    cy.get(passwordField).then(($el) => {
        
        if ($el.val() == " "){
            cy.get(warrningPassword).should('have.text', "Required")
            cy.log('Password field is empty')
        }

    })
})
