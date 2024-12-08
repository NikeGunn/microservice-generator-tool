#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const { initProject } = require('../src/commands/init');
const { generateTemplate } = require('../src/commands/generate');

const program = new Command();

program
  .name('microgen')
  .description('CLI tool for generating microservices templates')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize a new microservices project')
  .action(initProject);

program
  .command('generate')
  .description('Generate a microservice template')
  .option('-l, --language <language>', 'Specify language: nodejs or go')
  .action(generateTemplate);

program.parse(process.argv);
