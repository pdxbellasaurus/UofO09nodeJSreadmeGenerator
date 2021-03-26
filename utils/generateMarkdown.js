// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'GNU AGPLv3':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      case 'GNU GPLv3':
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case 'GNU LGPLv3':
          return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
          case 'Mozilla Public License 2.0':
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            case 'Apache License 2.0':
              return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
              case 'MIT License':
                return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                case 'Boost Software License 1.0':
                 return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
                 case 'The Unlicense':
                   return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
                   default:
                     return ``;
                    }
                  }

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'GNU AGPLv3':
      return 'AGPL-3.0';
      case 'GNU GPLv3':
        return 'GPL-3.0';
        case 'GNU LGPLv3':
          return 'LGPL-3.0';
          case 'Mozilla Public License 2.0':
            return 'MPL-2.0';
            case 'Apache License 2.0':
              return 'Apache-2.0';
              case 'MIT License':
                return 'MIT';
                case 'Boost Software License 1.0':
                  return 'BSL-1.0';
                  case 'The Unlicense':
                    return 'unlicense';
                    case 'None':
                      return ``;
                      default:
                        return ``;
                      }
                    }
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `## License\n
    
This project is covered under [${license} License](https://opensource.org/licenses/${renderLicenseLink(license)}).
`;
} else {
  return ``;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

\`${data.install}\`

## Usage

${data.use}

${renderLicenseSection(data.license)}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions
If you have questions, visit my [GitHub](https://github.com/${data.username}) or contact me via e-mail at <${data.email}>.
`;
}

module.exports = generateMarkdown;
