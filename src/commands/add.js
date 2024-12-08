import chalk from 'chalk';

const addFeature = async (feature) => {
  try {
    console.log(chalk.green(`Adding ${feature} to your project...`));
    // Simulated addition logic
    switch (feature) {
      case 'logging':
        console.log(chalk.blue('Integrated Winston logging for Node.js.'));
        break;
      case 'auth':
        console.log(chalk.blue('Added JWT-based authentication middleware.'));
        break;
      case 'monitoring':
        console.log(chalk.blue('Configured Prometheus and OpenTelemetry.'));
        break;
      default:
        console.log(chalk.red('Unknown feature specified.'));
    }
    console.log(chalk.blue(`${feature} added successfully!`));
  } catch (error) {
    console.error(chalk.red('Error adding feature:'), error.message);
  }
};

export { addFeature };
