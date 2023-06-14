/// <reference types="cypress"/>

describe("E2E - Wgrywanie Pliku", ()=>{
    it("Wgrywanie Pliku do Inputa", () =>{
        cy.visit("/index.php?controller=contact");
        cy.get('#fileUpload').attachFile("../fixtures/kotek.jpg");
        cy.get('span.filename').should('contain', "kotek.jpg");
    })
    
    })