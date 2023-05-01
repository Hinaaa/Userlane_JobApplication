
const jobApplicationSupportPage = require("../pageobject/jobApplicationSupportPage");
const assertionPage= require("./assertions");
const sel = new jobApplicationSupportPage()
const assertionObj = new assertionPage()
const actionNodeName = 'Upload';
const actionNodeRoute = 'upload-jobs';


async function selectJob(jobType,jobDescription){
    cy.contains('Open Positions').scrollIntoView()
    sel.jobType(jobType)
    sel.selectJob(jobDescription)
}

async function applyforJob(applicantName,applicantEmail,applicantPhoneNo,applicantOrg,applicantLinkedIn,applicantExpectedSalary, applicantAdditionalInformation){
    const filepath = 'navigation/uploadFile/resumeTestAutomation.pdf';

    sel.clickApplyforJob()
    sel.resumeUpload(filepath)
    cy.wait(2000)
    sel.enterName(applicantName)
    sel.enterEmail(applicantEmail)
    sel.enterPhoneNo(applicantPhoneNo)
    sel.enterOrg(applicantOrg)
    sel.enterLinkedIn(applicantLinkedIn)
    sel.enterExpectedSalary(applicantExpectedSalary)
    sel.enterAdditionalInformation(applicantAdditionalInformation)
    sel.acceptConsent()
    sel.clickSubmitButton()
    sel.acceptCapta()

 }


module.exports={selectJob,applyforJob};
