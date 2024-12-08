const inquirer = require('inquirer');
const fs = require('fs-extra');
const chalk = require('chalk');
const path = require('path');

const generateTemplate = async (options) => {
  try {
    const answers = options.language
      ? { language: options.language }
      : await inquirer.prompt([
          {
            type: 'list',
            name: 'language',
            message: 'Choose the language for your microservice:',
            choices: ['nodejs', 'go'],
          },
        ]);

    const language = answers.language;
    const templateDir = path.resolve(__dirname, `../../templates/${language}`);
    const targetDir = path.resolve(process.cwd(), language);

    fs.copySync(templateDir, targetDir);

    console.log(chalk.green(`Microservice template (${language}) generated successfully!`));
  } catch (error) {
    console.error(chalk.red('Error generating template:'), error.message);
  }
};

module.exports = { generateTemplate };
