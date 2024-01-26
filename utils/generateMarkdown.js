// Function creates a license badge using img.shields.io. If no license is chosen, an empty string is returned. 
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
  
    return " ";
  }
  
  // Function creates a link to the license within the README.md. If no license is chosen, an empty string is returned.
  function renderLicenseLink(license) {
    if (license !== "None") {
      return `\n* [License](#license)\n` ;
    }
    return " ";
  }
  
  
  
  // Function creates the license section. License link directs to this section. If no license is chosen, an empty string is returned.
  function renderLicenseSection(license) {
      if (license !== "None") {
        return `## License 
        
  This project is licensed under the ${license} license.`
      }
      return " "
  }
  
  // Using template literal and the data from the user, this function generates the README.md. Forward slashes are used next to backticks below in order to create code block sections in the README and avoid interrupting the template literal. The renderLicense functions are called. 
  
  function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#Installation)
  
  * [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  
  ## Installation
  To install necessary dependencies, run the following command: 
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage 
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing 
  
  ${data.contributing}
  
  ## Tests 
  
  To run tests, run the following command: 
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  
  ## Questions 
  
  Any questions about the repository? Feel free to open an issue, or send me an email at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  
  Thank you for stopping by! 
  
  `;
  }
  
  module.exports = generateMarkdown;