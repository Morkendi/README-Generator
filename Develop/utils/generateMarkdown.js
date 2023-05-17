// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'AGPLv3') {
    return `https://choosealicense.com/licenses/agpl-3.0/`;
  } else if (license === 'GPLv3') {
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  } else if (license === 'LGPLv3') {
    return `https://choosealicense.com/licenses/lgpl-3.0/`;
  } else if (license === 'MPL2.0') {
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  } else if (license === 'Apache2.0') {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license === 'BSL1.0') {
    return `https://choosealicense.com/licenses/bsl-1.0/`;
  } else if (license === 'Unlicense') {
    return `https://choosealicense.com/licenses/unlicense/`;
  } else {
    return ``;
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the '${license}' license.`;
  } else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  [Read more](${renderLicenseLink(data.license)})
  ## Contribution

  ${data.contribution}

  ## Test

  ${data.test}

  ## Questions

  If you have any questions, please contact me at ${data.email}. 
  You can also find more of my work [here](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
