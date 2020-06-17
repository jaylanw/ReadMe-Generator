var inquirer = require("inquirer");
var fs = require('fs');
// linking api and markdown js files
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of your project."
  },
  {
    type: "input",
    name: "tableOf",
    message: "What are the Table Of Contents of your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation process of your project?"
  },
  {
    type: "input",
    name: "how to",
    message: "How do use this application?"
  },
  {
    type: "input",
    name: "license",
    message: "What license do you have for this application?"
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors to this application?"
  },
  {
    type: "input",
    name: "tests",
    message: "Are there any tests?"
  },
  {
    type: "input",
    name: "questions",
    message: "Are there any questions?"
  }
  ])
const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}
writeToFile(project.title, await generateMarkdown(project))
init();
