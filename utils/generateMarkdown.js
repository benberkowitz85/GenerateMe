// Function creates a license badge using img.shields.io. If no license is chosen, an empty string is returned. 
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
  
    return " ";
  }
  
  // Function creates a link to the license within the README.md. 
    if (license !== "None") {
      return `\n* [License](#license)\n` ;
    }
    return " ";
  }
  
  
  
  // Function creates the license section.
  function renderLicenseSection(license) {
      if (license !== "None") {
        return `## License 
        
  This project is licensed under the ${license} license.`
      }
      return " "
  }
  
  // Use template and data from the user, this wi;; generate the README.md. 
  
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
  
  Thanks for stopping by and stay classy, planet earth! 
  
  `;
  }
  
  module.exports = generateMarkdown;