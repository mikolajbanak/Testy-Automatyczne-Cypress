/// <reference types="cypress"/>

describe("E2E - API", ()=>{
    beforeEach(function(){
        cy.fixture("example").then(data =>{
            this.daneApi = data
        })
    })
    it("authorization", () =>{

        //Ta albo druga metoda do randomowego tytułu
        // const uuid = () => Cypress._.random(0, 1e6)
        // const id = uuid()
        // const testname = `testname${id}`

        const uniqueSeed = Date.now().toString();
        // const getUniqueId = () => Cypress._.uniqueId('Tytuł ' + uniqueSeed);

        const daneAutoryzacja = {
            "user": {
              "email": "mbanak265@gmail.com",
              "password": "Suchykanal123"
            }
          }

          const daneArtykułu = {
            "article": {
              "tagList": [],
              "title": 'tytuł ' + uniqueSeed,
              "description": "test",
              "body": "test"
            }
          }
        
        cy.request("POST", 'https://api.realworld.io/api/users/login', daneAutoryzacja)
        .its("body").then(res =>{
            console.log(res)
            const authToken = res.user.token;

            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: daneArtykułu,
                headers: {
                    Authorization: 'Token ' + authToken
                }

            }).then(res =>{
                expect(res.status).to.equal(200)
            })
        })

    })
})