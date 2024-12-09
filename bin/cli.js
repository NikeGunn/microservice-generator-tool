#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to templates directory
const templatesDir = path.resolve(__dirname, '../src/templates');

// Display a banner and intro text
const welcomeText = figlet.textSync('TurboGen', {
  font: 'Standard',
  horizontalLayout: 'default',
  verticalLayout: 'default',
});

const infoBox = boxen(
  `${chalk.blue.bold('Welcome to TurboGen CLI!')}
  ${chalk.green('Use this tool to generate microservices templates.')}
  ${chalk.yellow('Use --help for a list of available commands.')}`,
  {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
  }
);

const program = new Command();

// Branding and tool description
program
  .name('turbogen')
  .description('CLI tool for generating microservices templates')
  .version('1.0.4')
  .hook('preAction', () => {
    console.log(chalk.cyan(welcomeText));
    console.log(infoBox);
  });

// Init Command
program
  .command('init')
  .description('Initialize a new microservices project')
  .action(async () => {
    console.log(chalk.green('Initializing your microservices project...'));

    if (!fs.existsSync(templatesDir)) {
      console.error(chalk.red(`Error: Template directory not found at ${templatesDir}.`));
      process.exit(1);
    }

    console.log(chalk.blue(`Resolved template directory: ${templatesDir}`));

    const { initProject } = await import('../src/commands/init.js');
    initProject(templatesDir);
  });

// Generate Command
program
  .command('generate')
  .description('Generate a microservice template')
  .option('-l, --language <language>', 'Specify the language (e.g., nodejs, go)', 'nodejs')
  .action(async (options) => {
    console.log(chalk.green(`Generating a ${options.language} microservice template...`));

    const { generateTemplate } = await import('../src/commands/generate.js');
    generateTemplate(options.language, templatesDir);
  });

// Parse the provided arguments
program.parse(process.argv);
