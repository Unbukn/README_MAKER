// include the inquirer dependency 
const inquirer = require("inquirer");
// include file system
const fs = require("fs");
// include utilities
const util = require("util");
// include terminal link
const terminalLink = require('terminal-link');

// define the writefile promise
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of the project"
  },
  {
    type: "input",
    name: "description",
    message: "Describe the project."
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your application? Are there dependencies?"
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?"
  },
  {
    type: "list",
    name: "license",
    message: "Select a license type.",
    default: "MIT",
    choices: [
      "MIT",
      "Apache 2.0",
      "BSD",
      "ISC",
      "LGPL",
      "MPL",
      "GNU",
      "EPL",


    ],
    validate: function (input) {
        // Declare function as asynchronous, and save the done callback
        var done = this.async();
     
        // Do async stuff
        setTimeout(function() {
          if (typeof input !== 'number') {
            // Pass the return value in the done callback
            done('You need to provide a number');
            return;
          }
          // Pass the return value in the done callback
          done(null, true);
        }, 3000);
      }
    
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to the project?"
  },
  {
    type: "input",
    name: "tests",
    message: "List methods for testing the application."
  },       
  {
    type: "input",
    name: "questions",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
])

.then(function(answers) {
  const readme = generateReadme(answers);
  return writeFileAsync((answers.projectTitle + ".md"), readme);
})
.then(function() {
  // create a terminal link
  const link = terminalLink('Successfully created your readme file. To report bugs with this app visit->', 'https://github.com/Unbukn/README_MAKER');

  console.log("" + link);
})
.catch(function(err) {
  console.log(err);
});
}

function generateReadme(responses) {
  return `
  # ${responses.projectTitle}
  ## Description
  ${responses.description}
  ### Table of contents
  1. [Description](#Description)
  2. [Table of Contents](#Table-of-Contents)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  5. [License](#License)
  6. [Contributing](#Contributing)
  7. [Tests](#Tests)
  8. [Questions](#Questions)

  ## Installation
  ${responses.installation}
  ## Usage
  ${responses.usage}  
  ## License
  [![License ${responses.license}](https://img.shields.io/badge/License-${responses.license}-brightgreen.svg)](https://shields.io/)
  ## Contributing
  ${responses.contributing}   
  ## Tests
  ${responses.tests}
  ## Questions
  Questions regarding this application should be sent via email to, ${responses.email}. You can also contact me on github with additional questions -> https://github.com/Unbukn${responses.questions}`;
}

promptUser()


