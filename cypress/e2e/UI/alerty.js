/// <reference types="cypress"/>

import alertPage from "../../support/Page-Object/alertPage";

describe("E2E - Alerty", ()=>{
    it("Alert", () =>{
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
        alertPage.clickonButtonAlert1();
        alertPage.verifyAlertText("Przykładowa treść alertu");
      
    })

    it("Confirm", () =>{
        alertPage.clickonButtonAlert2();
        alertPage.verifyAlertConfirmText("Zaakceptuj aby kontynuować!");
        alertPage.acceptAlert();

    })
  
})