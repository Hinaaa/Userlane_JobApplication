# Userlane_JobApplication
Automation for available SQA job at Userlane

**Pre requisites**
Node js -16.13.0 or any latest version
Visual Studio IDE  , to view the files

**Running test:**
 
 Install dependencies by running npm i
 
 Execute the below command
 
 npm run test
 #Cypress window will open, select the test case which need to be executed

**TestCases**

1. Testcase to apply for SQA job and validate response
2. More negative or other scenarios can be created on demand


**Folder structure**

Cypress/integration-: This consist of the spec file for each testcase

cypress/pagefactory-: All the resuable function are created under this

cypress/pageobject-: The xpath are captured and placed

cypress/testdata-: The testdata which is passed to the spec file, the data passed in json format

**Approaches and automation concept used**

1. Centralized approach for reusability like centralized URL
2. Assertions has been placed for validation in seperate file
3. Input data placed in seperate file
4. Page object model approach used
5. Comments mentioned for better understanding
6. Maintainable and re-usable code 

Choosing tech stack: Cypress has been used.


**Notes**

1. Please accept cookies once if its appearing for smooth execution. Cookie acceptance popup elements are not directly accesable
2. Captcha handing tried but not completely worked (code commented). Also bypassing Captcha is unethical and Captchas are designed to prevent automated programs, or bots, from accessing websites or performing certain actions. An alternate approach to access submission page applied, i.e. directly accessing applied page to validate page response
3. some other issues identified with application like captcha disappear after some time then page hanged/submit button is not working to retry
4. Video for successfull execution https://www.loom.com/share/72fccc69b1ca4a3c8627f3a277f1d3ac
