// function to generate markdown for README
function generateMarkdown(answers) {
    return `
# ${answers.title}
  ${answers.description}
  
## Table Of Contensts
  - Installation
  - Usage
  - License
  - Contributors
  - Tests 
  - Questions
  

## Installation
  ${answers.installation}
  
## Usage
  ${answers.usage}
  
## License
  ${answers.license}
      
## Contributors
  ${answers.contributors}
  
## Tests
      ${answers.tests}
  
## Questions
  ${answers.questions}
  ${answers.email}
  `;
  }
  
  module.exports = generateMarkdown;

