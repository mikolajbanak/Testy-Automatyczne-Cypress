class SelectPage {
    get select () {
        return cy.get('#selectProductSort');
    }
    selectallOption () {
        this.select.then(dropdown =>{
            cy.wrap(dropdown).find("option").each(opcje =>{
                this.select.select(opcje.text(), {delay:1000})
            })
        })
    }
}

export default new SelectPage