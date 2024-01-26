// Packages required for the application are called here. 
const fs = require ("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// Question array for user to answer.
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your preferred email address or the address associated with your Github user?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project called?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project. What do you wish to create?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be fired to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know in order to effectively navigate and use this repository?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know in order to make contributions to this repository?",
    }
];

// Function that writes the README.md file. 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Application initilization function. 
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README.md...");
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses}));
    });
}

// Function call to start app
init();