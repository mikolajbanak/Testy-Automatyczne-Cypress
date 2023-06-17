/// <reference types="cypress"/>

describe("E2E - Checking simple clicks", ()=>{
it("Klikniecie na element", () =>{
    cy.visit("/");
    cy.contains('[title="Contact us"]' ,'Contact us').click();
    cy.get('[title="Return to Home"]').click();
    
})

})