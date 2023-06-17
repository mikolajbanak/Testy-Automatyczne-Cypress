/// <reference types="cypress"/>

describe("E2E - Uploading file", ()=>{
    it("Uploading file into input", () =>{
        cy.visit("/index.php?controller=contact");
        cy.get('#fileUpload').attachFile("../fixtures/kotek.jpg");
        cy.get('span.filename').should('contain', "kotek.jpg");
    })
    
    })