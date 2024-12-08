const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const prompts = require('prompts');

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

    const rootDir = process.cwd();
    const templateDir = path.resolve(__dirname, '../templates/common');

    if (!fs.existsSync(templateDir)) {
      console.error(chalk.red('Template directory not found!'));
      return;
    }

    const files = ['.gitignore', 'README.md'];
    files.forEach((file) => {
      fs.copySync(path.join(templateDir, file), path.join(rootDir, file));
    });

    console.log(chalk.blue('Project initialized successfully!'));
  } catch (error) {
    console.error(chalk.red('Error initializing project:'), error.message);
  }
};

module.exports = { initProject };
