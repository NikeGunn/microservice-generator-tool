import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import prompts from 'prompts';

const generateTemplate = async (options) => {
  try {
    console.log(chalk.green(`Generating a ${options.language} microservice template...`));

    // Implement the logic to generate the template for the chosen language
    const templatePath = path.resolve(__dirname, `../templates/${options.language}`);

    if (!fs.existsSync(templatePath)) {
      console.error(chalk.red(`Template for ${options.language} not found!`));
      return;
    }

    // Example of copying template files
    fs.copySync(templatePath, process.cwd());

    console.log(chalk.blue(`${options.language} microservice template generated successfully!`));
  } catch (error) {
    console.error(chalk.red('Error generating template:'), error.message);
  }
};

export { generateTemplate };
