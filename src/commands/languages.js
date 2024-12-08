import chalk from 'chalk';

const languages = () => {
  console.log(chalk.green('Supported languages:'));
  console.log(chalk.blue('1. Node.js (nodejs)'));
  console.log(chalk.blue('2. Go (go)'));
};

export { languages };
