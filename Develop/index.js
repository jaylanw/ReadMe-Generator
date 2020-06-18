var inquirer = require("inquirer");
var fs = require('fs');
// linking markdown js file
const generateMarkdown = require('./utils/generateMarkdown.js')


const questions = [
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
      name: "usage",
      message: "How do you use this application?"
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
      message: "What is your user name?"
    },
    {
      type: "input",
      name: "eamil",
      message: "What is your email?"
    }
    ])
];
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}
function init() {

}
writeToFile(project.title, await generateMarkdown(project))
init();
