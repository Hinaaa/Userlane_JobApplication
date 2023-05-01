import 'cypress-file-upload';
class  jobApplicationSupportPage{
    
    //Select Job Type Filter
    jobType(jobType){
        cy.get('[data-placeholder="Job type (All)"]').next().click()
        cy.get('[class="select2-results').eq(0).within(() => {
            cy.contains(jobType).click({force: true})
        })
    }
    selectJob(jobDescription) {
        cy.contains(jobDescription).parent().next().within(() => {
            cy.contains('View job').click().wait(2000)
        })
    }
    clickApplyforJob() {
    cy.get('[class="postings-btn template-btn-submit hex-color').eq(0).click().wait(1000)
}
   enterName(applicantName) {
    cy.get('[name="name"]').type(applicantName)
}
   enterEmail(applicantEmail) {
    cy.get('[name="email"]').type(applicantEmail)
}
    enterPhoneNo(applicantPhoneNo) {
        cy.get('[name="phone"]').type(applicantPhoneNo)
    }
    enterOrg(applicantOrg) {
        cy.get('[name="org"]').type(applicantOrg)
    }
    enterLinkedIn(applicantLinkedIn) {
        cy.get('[name="urls[LinkedIn]"]').type(applicantLinkedIn)
    }
    enterExpectedSalary(applicantExpectedSalary) {
        cy.get('[placeholder="Type your response"]').type(applicantExpectedSalary)
    }   
    enterAdditionalInformation(applicantAdditionalInformation) {
        cy.get('[id="additional-information"]').type(applicantAdditionalInformation)
    }    
    acceptConsent() {
        cy.get('[name="consent[marketing]"]').eq(1).click()
    }   
    clickSubmitButton() {
       cy.get('[data-qa="btn-submit').click().wait(2000)      
    }
    acceptCapta() {
//code for captcha
/*
     cy.origin('https://jobs.lever.co/', () => {
              cy.get('iframe')
              .first()
              .then((recaptchaIframe) => {
                const body = recaptchaIframe.contents()
             // cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
                cy.wrap(body).find('[src="https://newassets.hcaptcha.com/captcha/v1/29ca39c/static/hcaptcha.html#frame=challenge&id=0pvdr6434nx&host=jobs.lever.co&sentry=true&reportapi=https%3A%2F%2Faccounts.hcaptcha.com&recaptchacompat=true&custom=false&hl=en&tplinks=on&se=29ca39c&sitekey=e33f87f8-88ec-4e1a-9a13-df9bbb1d8120&size=invisible&theme=light&origin=https%3A%2F%2Fnewassets.hcaptcha.com"]')//  .should('be.visible')
                .click()
              })        
            }) 
  */
 
 //As Captcha didnt bypassed soo this line of code mentioned here
     cy.origin('https://jobs.lever.co/', () => {
        cy.visit('/userlane/9ff78ee1-9eb2-4cad-b7da-76757cd3c122/thanks')

     })
       cy.wait(2000)
    }
    
    resumeUpload(filepath) {
         cy.get('[id="resume-upload-input"]').attachFile(filepath);
      }
    verifyProfileImageUploaded() {
        cy.get('[data-qa="ImageField_image"]')
          .should('have.attr', 'style')
          .and('contain', 'background-image: url("/document-service/documents/');
      }
}

module.exports = jobApplicationSupportPage;