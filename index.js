const cypress = require('cypress');
//var _=require('loadash');
var myArgs = process.argv
param=require('./params');
function main(){
	var flowname=param.getsuite()
	console.log(param.getsuite());
	try{
	
var specfile;

	switch(flowname){
case "additem":
	specfile='cypress/integration/TestScenario/additem.spec.js'
	console.log(specfile);
	break;
case "addandremove":
	specfile='cypress/integration/TestScenario/addandremove.spec.js'
	console.log(specfile);
	break;
case "multiplecartitem":
	specfile='cypress/integration/TestScenario/multiplecartitem.spec.js'
	console.log(specfile);
	break;
case "sortorderby":
	specfile='cypress/integration/TestScenario/sortandadd.spec.js'
	console.log(specfile);
	break;
case "additembycolor":
	specfile='cypress/integration/TestScenario/addspecificcolor.spec.js'
	console.log(specfile);
	break;

	}
	cypress.run({
		config:{

		"reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/report",
            "quite": true,
            "overwrite": false,
           "charts": true,
           "embeddedScreenshots":true,
            "json": true,
			"chromeWebSecurity": false
        }
	}
    },
		spec:specfile,
	}).then((result)=>{
		console.log("done");
	})
	}catch(err){
		console.log(err);
	}
}

main()