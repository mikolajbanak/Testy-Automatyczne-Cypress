/// <reference types="cypress"/>

describe("E2E - Checking simple clicks", ()=>{
it("Clicking on element", () =>{
    cy.visit("/");
    cy.contains('[title="Contact us"]' ,'Contact us').click();
    cy.get('[title="Return to Home"]').click();
    //test
    
})

})