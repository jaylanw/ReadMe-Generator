const inquirer = require("inquirer");
const fs = require('fs');

// linking markdown js file
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeFile = (data) => {
  fs.writeFile("README" + '.md', data, 
    error => error ? console.error(error) : 
      console.log(`${"README" + '.md'} generated!`))
}

const questions = [ 
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
      message: "What is your github username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    }
    ];

 function init() {
  inquirer.prompt(questions)
    .then(answers => {
      console.log(answers);
     writeFile(generateMarkdown(answers))

    }); 
}

init();
