/// <reference types="cypress"/>

describe("E2E - API part1", ()=>{
    beforeEach(function(){
        cy.fixture("example").then(data =>{
            this.daneApi = data
        })
    })
    it("Validate API tags", () =>{
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res =>{
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain("welcome")
        })
    })

    it("Checking Forbidden", function()  {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("Forbidden");
        cy.visit("https://angular.realworld.io/");
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login('test@test.com', 'test');
        cy.wait("@Forbidden");
        cy.get('@Forbidden').then(res =>{
            console.log(res)
            expect(res.response.statusCode).to.equal(403);
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403);
        })
    })

    it("Checking login with valid credentials", function(){
        cy.intercept("GET", "https://api.realworld.io/api/tags", {fixture:'tags.js'}).as("requestTag");
        cy.visit("https://angular.realworld.io/");
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login('mbanak265@gmail.com', 'Suchykanal123');
        cy.wait("@requestTag")
    })
    
    })