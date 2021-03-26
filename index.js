// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide a step-by-step description of how to get the development environment running.',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'use',
        message: 'Provide instructions and examples for use of your project.',
        // default: '',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        //Most used from: https://choosealicense.com/licenses/
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense',
            'None',
        ],
        default:'MIT License',
    },  
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide contribution guidelines for your project.',
        default: '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions on how to run tests for your project',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return 'Not a valid email address. Please enter a valid email address.';
            }
        },
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
        fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Your README has been created!'));
    }
    //function to initialize app
    function init() {
            console.log('Enter the following prompts to generate a README for your project.')
            console.log('=================================================================.')
            inquirer.prompt(questions)
            .then (function(data) {
            writeToFile('./generated-md/README.md', generateMarkdown(data));
            console.log(data);
        })
    }

// Function call to initialize app
init();