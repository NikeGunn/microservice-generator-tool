import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import prompts from 'prompts';

const initProject = async (templateDir) => {
  try {
    console.log(chalk.green('Initializing a new microservices project...'));

    // Confirm initialization with the user
    const response = await prompts({
      type: 'confirm',
      name: 'confirm',
      message: 'Do you want to initialize a new project here?',
      initial: true,
    });

    if (!response.confirm) {
      console.log(chalk.yellow('Project initialization canceled.'));
      return;
    }

    // Check if the template directory exists
    if (!fs.existsSync(templateDir)) {
      console.error(chalk.red('Template directory does not exist!'));
      return;
    }

    // Define files to copy
    const files = ['.gitignore', 'README.md'];
    const rootDir = process.cwd();

    console.log(chalk.blue(`Copying files to: ${rootDir}`));

    // Copy files from the template directory
    files.forEach((file) => {
      const srcFile = path.join(templateDir, file);
      const destFile = path.join(rootDir, file);

      if (fs.existsSync(srcFile)) {
        fs.copySync(srcFile, destFile);
        console.log(chalk.green(`Copied ${file} to ${rootDir}`));
      } else {
        console.warn(chalk.yellow(`File not found in templates: ${file}`));
      }
    });

    console.log(chalk.blue('Project initialized successfully!'));
  } catch (error) {
    console.error(chalk.red('Error initializing project:'), error.message);
  }
};

export { initProject };
