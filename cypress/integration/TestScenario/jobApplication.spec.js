const data=require('../../testData/data1.json');
const prodSelection= require("../../pagefactory/jobApplicationFeatures");
const jobApplicationSupportPage = require('../../pageobject/jobApplicationSupportPage');
const assertionPage= require("../../pagefactory/assertions");
 const sel = new jobApplicationSupportPage() 
 const assertionObj = new assertionPage()
 
let i=0;
require('cypress-xpath')

describe('Testcase to apply for SQA job and validate response', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
          cy.visit(pageURL) //visit URL
          assertionObj.validateHomePage()
        })
      });
   Object.keys(data)
       .forEach(function(tc,i){
           const testData=data[i];
           it(testData.tc,function() {
               execute(testData)
           })
       })
})

function execute(data) {
    //Select job for SQA
    prodSelection.selectJob(data.jobType, data.jobDescription)
    //Apply for Job
    prodSelection.applyforJob(data.applicantName,data.applicantEmail,data.applicantPhoneNo,data.applicantOrg,data.applicantLinkedIn,data.applicantExpectedSalary, data.applicantAdditionalInformation)
    //Validation on submmitted page
    assertionObj.validateApplicationSubmittedSuccessfully(data.jobDescription)
    //Validate successfull response
    assertionObj.validateSuccessfullResponse(data.jobDescription)
}
