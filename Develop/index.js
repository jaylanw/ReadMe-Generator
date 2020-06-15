var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "discription",
    message: "Give a discription of your project."
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
  ])
const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
