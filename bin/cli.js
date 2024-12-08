#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';
import { readFileSync } from 'fs';
import path from 'path';

// Dynamically fetch the installed version
const packagePath = path.resolve(__dirname, '../package.json');
const { version } = JSON.parse(readFileSync(packagePath, 'utf8'));

// Add a banner and splash text
const welcomeText = figlet.textSync('TurboGen', {
  font: 'Standard',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true,
});

// A stylish box around the tool description with helpful info
const infoBox = boxen(
  chalk.blue.bold('Welcome to TurboGen CLI!') + '\n' +
  chalk.green('Use this tool to generate microservices templates') + '\n' +
  chalk.yellow('Use --help for a list of available commands'),
  {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
    backgroundColor: 'black',
  }
);

// Program introduction with branding
const program = new Command();

program
  .name('turbogen')
  .description('CLI tool for generating microservices templates')
  .version(version) // Dynamically fetch the installed version
  .hook('preAction', () => {
    console.log(chalk.cyan(welcomeText));
    console.log(infoBox);
  });

// Initialize project with a friendly tone
program
  .command('init')
  .description('Initialize a new microservices project')
  .action(async () => {
    console.log(chalk.greenBright('Initializing your microservices project... Please wait.'));
    
    // Dynamically import the initProject function
    const { initProject } = await import('../src/commands/init.js');
    initProject();
  });

// Generate template with extra options and feedback
program
  .command('generate')
  .description('Generate a microservice template')
  .option('-l, --language <language>', 'Specify language: nodejs or go', 'nodejs')
  .action(async (options) => {
    console.log(chalk.greenBright(`Generating ${options.language} microservice template...`));

    // Dynamically import the generateTemplate function
    const { generateTemplate } = await import('../src/commands/generate.js');
    generateTemplate(options);
  });

// Error handling for user input mistakes
program.parse(process.argv);

program.on('command:*', () => {
  console.log(chalk.redBright('Unknown command! Please check the available commands.'));
  program.help();
});

// Display usage message if no command is provided
program.on('exit', (code) => {
  if (code !== 0) {
    console.log(chalk.redBright('Oops! Something went wrong.'));
  }
});
