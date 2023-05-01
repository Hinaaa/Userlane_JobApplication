
    const jobApplicationSupportPage = require("../pageobject/jobApplicationSupportPage");
    const sel = new jobApplicationSupportPage()
    
    Cypress.Cookies.debug(false)    
class  assertions{

    validateHomePage(){
     //Accept cookies
      /* 
      cy.get('[id="uc-center-container"]').within( () => {
      cy.get('[data-testid="uc-accept-all-button"]').click()
      })   
      */
      cy.get('[id="crumbs"]').should('includes.text','Home')  //Validate Home Page
 }

 validateApplicationSubmittedSuccessfully(jobDescription) {
    cy.get('[class="posting-headline"]').should('include.text',jobDescription)
    cy.get('[data-qa="msg-submit-success"]').should('have.text','Application submitted!')
 }
 
 //Validate API response and data in body 
 validateSuccessfullResponse (jobDescription) {
 cy.url().as('getUrl');
 cy.get('@getUrl').then(API_URL => {
 cy.request({
   method: 'GET',
   url: `${API_URL}` 
   }).then((response) => {
   //cy.log(response.body)
  }).should(({status, body}) => {
 expect(status).to.eq(200)
 expect(body).includes('text',jobDescription) 
 expect(body).includes('text','Application submitted!') 
})
})
} 
}
module.exports = assertions;