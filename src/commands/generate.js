import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const generateTemplate = async (options) => {
  try {
    console.log(chalk.green(`Generating a ${options.language} microservice template...`));

    // Adjust the template path to your absolute path for 'templates' folder
    const templatePath = path.resolve('C:/Users/Nautilus/Desktop/Microservices/templates', options.language);

    // Check if the template exists
    if (!fs.existsSync(templatePath)) {
      console.error(chalk.red(`Template for ${options.language} not found at ${templatePath}!`));
      return;
    }

    // Example of copying template files to the current working directory
    fs.copySync(templatePath, process.cwd());

    console.log(chalk.blue(`${options.language} microservice template generated successfully!`));
  } catch (error) {
    console.error(chalk.red('Error generating template:'), error.message);
  }
};

export { generateTemplate };
