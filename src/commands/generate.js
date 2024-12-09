import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const generateTemplate = (language, templatesDir) => {
  try {
    // Path to the specific language template
    const languageTemplateDir = path.join(templatesDir, language);

    // Check if the language template exists
    if (!fs.existsSync(languageTemplateDir)) {
      console.error(chalk.red(`Error: No templates found for language "${language}".`));
      return;
    }

    const rootDir = process.cwd();
    console.log(chalk.blue(`Copying ${language} template to: ${rootDir}`));

    // Copy template files to the current working directory
    fs.copySync(languageTemplateDir, rootDir);

    console.log(chalk.green(`${language} microservice template generated successfully!`));
  } catch (error) {
    console.error(chalk.red('Error generating template:'), error.message);
  }
};

export { generateTemplate };
