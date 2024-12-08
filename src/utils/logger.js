const chalk = require('chalk');

const logger = {
  info: (message) => console.log(chalk.blue(message)),
  success: (message) => console.log(chalk.green(message)),
  warning: (message) => console.log(chalk.yellow(message)),
  error: (message, error) => {
    console.error(chalk.red(message));
    if (error) console.error(chalk.red(error));
  }
};

module.exports = logger; 