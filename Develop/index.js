// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions =[ 
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: (title) => { 
                if (title) { 
                    return true 
                } else { 
                    return 'Please enter a project title.' 
                }
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: (description) => { 
                if (description) { 
                    return true 
                } else { 
                    return 'Please write a description.' 
                }
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
            validate: (installation) => { 
                if (installation) { 
                    return true 
                } else { 
                    return 'Please enter a installation instructions.' 
                }
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project.',
            validate: (usage) => { 
                if (usage) { 
                    return true 
                } else { 
                    return 'Please provide usage information.' 
                }
            },
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project.',
            choices: ['GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'none'],
            validate: (license) => { 
                if (license) { 
                    return true 
                } else { 
                    return 'Please select an option.' 
                }
            },
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines for your project.',
            validate: (contribution) => { 
                if (contribution) { 
                    return true 
                } else { 
                    return 'Please enter contribution guidelines.' 
                }
            },
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for your project.',
            validate: (test) => { 
                if (test) { 
                    return true 
                } else { 
                    return 'Please explain how to test your project.' 
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username.',
            validate: (github) => { 
                if (github) { 
                    return true 
                } else { 
                    return 'Please enter a GitHub username.' 
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
            validate: (email) => { 
                if (email) { 
                    return true 
                } else { 
                    return 'Please enter an email address.' 
                }
            },
        },
    ];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully created README!')
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();