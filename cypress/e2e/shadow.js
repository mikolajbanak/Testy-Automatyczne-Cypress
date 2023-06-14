/// <reference types="cypress"/>

describe("E2E - Shadow Dom", ()=>{
    it("Wykorzystanie metody Shadow", () =>{
        cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm");
        // Jeśli include ShadowDom jest FALSE w Cypress.json to wtedy trzeba dodać shadow
        // cy.get(".smart-ui-component").shadow().contains("File").click();
        cy.contains("File").click();
    })
    
    })