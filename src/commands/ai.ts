import inquirer from 'inquirer';
import chalk from 'chalk';
import { showConfig, toggleLanguage } from '../config/ai.js';

export async function handleAI() {
  const choices = [
    {
      name: 'Show current configuration',
      value: 'show'
    },
    {
      name: 'Toggle language (English/Chinese)',
      value: 'language'
    },
    // 在这里添加更多选项
    {
      name: 'Exit',
      value: 'exit'
    }
  ];

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Select an action:',
      choices
    }
  ]);

  switch (action) {
    case 'show':
      showConfig();
      break;
    case 'language':
      toggleLanguage();
      break;
    case 'exit':
      console.log(chalk.yellow('Exiting...'));
      break;
  }
}
