// function to generate markdown for README
function generateMarkdown(questions) {
    return `
    # ${questions.title}
      ${questions.description}
  
    # Table Of Contensts
      ${questions.tableOf}
    # Installation
      ${questions.installation}
  
    # Usage
      ${questions.usage}
  
    # License
      ${questions.license}
      
    # Contributors
      ${questions.contributors}
  
    # Tests
      ${questions.tests}
  
    # Questions
      ${questions.questions}
      ${questions.email}
  `;
  }
  
  module.exports = generateMarkdown;

