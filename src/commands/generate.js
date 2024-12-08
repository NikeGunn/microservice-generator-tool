import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

// Generate template with extra options and feedback
const generateTemplate = async (options) => {
  try {
    console.log(chalk.green(`Generating a ${options.language} microservice template...`));

    // Dynamically resolve the template path based on the language
    let templatePath = path.resolve(process.cwd(), `templates/${options.language}`);
    if (!fs.existsSync(templatePath)) {
      // If template not found, look in parent directory
      const parentTemplatePath = path.resolve(process.cwd(), `../templates/${options.language}`);
      if (fs.existsSync(parentTemplatePath)) {
        templatePath = parentTemplatePath;
      } else {
        console.error(chalk.red(`Template for ${options.language} not found!`));
        return;
      }
    }

    // Copy the template files to the current working directory
    fs.copySync(templatePath, process.cwd());

    console.log(chalk.blue(`${options.language} microservice template generated successfully!`));
  } catch (error) {
    console.error(chalk.red('Error generating template:'), error.message);
  }
};

export { generateTemplate };
