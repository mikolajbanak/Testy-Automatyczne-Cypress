class alertPage {
get buttonAlert1() {
    return cy.get('#alert');
    }

get buttonAlert2() {
    return cy.get('#alert-confirm');
    }

    clickonButtonAlert1(){
        this.buttonAlert1.click();
    }

    clickonButtonAlert2(){
        this.buttonAlert2.click();
    }

    verifyAlertConfirmText(tekst){
        cy.on("window:confirm", tresc =>{
            expect(tresc).to.equal(tekst)
        
        })
    }

    verifyAlertText(tekst){
        cy.on("window:alert", tresc =>{
            expect(tresc).to.equal(tekst);
        })
    }

    rejectAlert(){
        cy.on("window:confirm", () => false )
    }

    acceptAlert(){
        cy.on("window:confirm", () => true )
    }
}

export default new alertPage