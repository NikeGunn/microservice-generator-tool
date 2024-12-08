import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import prompts from 'prompts'; // Import prompts
import { fileURLToPath } from 'url'; // Import fileURLToPath from 'url'

// Function to initialize the project
const initProject = async () => {
  try {
    console.log(chalk.green('Initializing a new microservices project...'));

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

    // Dynamically resolve the templates directory
    let templateDir = path.resolve(process.cwd(), 'templates/common');
    if (!fs.existsSync(templateDir)) {
      // If not found, try to resolve from the global package
      // Resolve __dirname using import.meta.url for ES module
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);  // Resolve the directory path
      const globalPackagePath = path.resolve(__dirname, '../../src/templates/common');  // Adjusted for global package location
      if (fs.existsSync(globalPackagePath)) {
        templateDir = globalPackagePath;
      } else {
        console.error(chalk.red('Template directory not found!'));
        return;
      }
    }

    // Debugging: Log the resolved path
    console.log(chalk.blue('Template directory path: '), templateDir);

    // Define files to copy
    const files = ['.gitignore', 'README.md'];
    const rootDir = process.cwd();

    // Copy template files to the current working directory
    files.forEach((file) => {
      const srcFile = path.join(templateDir, file);
      const destFile = path.join(rootDir, file);
      fs.copySync(srcFile, destFile);
    });

    console.log(chalk.blue('Project initialized successfully!'));
  } catch (error) {
    console.error(chalk.red('Error initializing project:'), error.message);
  }
};

export { initProject };
