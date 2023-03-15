const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

inquirer
    .prompt([
        {
            // create a menu with options to view, add, and udpate departments, roles, and employees
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View departments', 'View roles', 'View employees', 'Add department', 'Add role', 'Add employee', 'Update employee role', 'Exit']
        }
    ])
    .then(answers => {
        console.info('Answer:', answers.menu);
    });



