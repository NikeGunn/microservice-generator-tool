import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Function to resolve template directory
const getTemplateDirectory = () => {
  // Use path.join() to correctly join paths for local template directory
  const localTemplateDir = path.join(process.cwd(), 'src', 'templates', 'common');
  console.log(`Checking local template directory at: ${localTemplateDir}`);
  
  // Check if the local template directory exists
  if (fs.existsSync(localTemplateDir)) {
    return localTemplateDir;
  }

  // Resolve global template directory using import.meta.url
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const globalTemplateDir = path.join(__dirname, '..', 'src', 'templates', 'common');
  console.log(`Checking global template directory at: ${globalTemplateDir}`);

  // Check if the global template directory exists
  if (fs.existsSync(globalTemplateDir)) {
    return globalTemplateDir;
  }

  // Return null if neither directory is found
  return null;
};

// Path to templates (resolved dynamically)
const templatesDir = getTemplateDirectory();

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

const program = new Command();

// Program introduction with branding
program
  .name('turbogen')
  .description('CLI tool for generating microservices templates')
  .version('1.0.4')  // Update version accordingly
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
    
    // Error handling if the templates folder doesn't exist
    if (!templatesDir) {
      console.error(chalk.redBright('Error: Template directory not found.'));
      process.exit(1);
    }

    console.log(`Template directory path: ${templatesDir}`);

    // Simulate the project initialization
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
