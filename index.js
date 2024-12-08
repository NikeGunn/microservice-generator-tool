#!/usr/bin/env node

const { program } = require('commander');
const { initProject } = require('./commands/init');
const { generateTemplate } = require('./commands/generate');
const { languages } = require('./commands/languages');
const { addFeature } = require('./commands/add');

program
  .command('init')
  .description('Initialize a new microservices project')
  .action(() => {
    initProject();
  });

program
  .command('generate')
  .description('Generate a new microservice template')
  .option('-l, --language <language>', 'Specify the language (nodejs/go)')
  .action((options) => {
    generateTemplate(options);
  });

program
  .command('languages')
  .description('List supported languages for microservice templates')
  .action(languages);

program
  .command('add <feature>')
  .description('Add a feature (logging, auth, monitoring) to the project')
  .action((feature) => {
    addFeature(feature);
  });

program.parse(process.argv);
