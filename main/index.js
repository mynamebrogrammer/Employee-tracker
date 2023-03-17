const inquirer = require("inquirer");
const db = require("../config/connection");
const cTable = require("console.table");
  // prompt the user to select from a list of options
  function start() {
    inquirer
      .prompt([
        {
          // create a menu with options to view, add, and udpate departments, roles, and employees
          type: "list",
          name: "menu",
          message: "What would you like to do?",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add department",
            "Add role",
            "Add employee",
            "Update employee role",
            "Exit",
          ],
        },
      ])
      .then((answers) => {
        console.info("You selected:", answers.menu);
        switch (answers.menu) {
          case "View all departments":
            db.query("SELECT * FROM departments", (err, rows) => {
              if (err) {
                console.log(err);
              } else {
                console.table(rows);
                start();
              }
            });
            break;
          case "View all roles":
            db.query("SELECT * FROM roles", (err, rows) => {
              if (err) {
                console.log(err);
                console.log("Error");
              } else {
                console.table(rows);
                start();
              }
            });
            break;
          case "View all employees":
            db.query("SELECT * FROM employees", (err, rows) => {
              if (err) {
                console.log(err);
              } else {
                console.table(rows);
                start();
              }
            });
            break;
          case "Add department":
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "department",
                  message:
                    "What is the name of the department you would like to add?",
                },
              ])
              .then((answers) => {
                console.info("Answer:", answers.department);
                try {
                  db.query(
                    "INSERT INTO departments (name) VALUES (?)",
                    [answers.department],
                    (err, rows) => {
                      if (err) {
                        throw err;
                      }
                      console.table(rows);
                      start();
                    }
                  );
                } catch (err) {
                  console.error(err);
                }
              });
            break;

          case "Add role":
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "title",
                  message:
                    "What is the title of the role you would like to add?",
                },
                {
                  type: "input",
                  name: "salary",
                  message:
                    "What is the salary of the role you would like to add?",
                },
                {
                  type: "input",
                  name: "department_id",
                  message:
                    "What is the department id of the role you would like to add?",
                },
              ])
              .then((answers) => {
                console.info("Answer:", answers.title);
                console.info("Answer:", answers.salary);
                console.info("Answer:", answers.department_id);
                db.query(
                  "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
                  [answers.title, answers.salary, answers.department_id],
                  (err, rows) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.table(rows);
                      start();
                    }
                  }
                );
              });
            break;
          case "Add employee":
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "first_name",
                  message:
                    "What is the first name of the employee you would like to add?",
                },
                {
                  type: "input",
                  name: "last_name",
                  message:
                    "What is the last name of the employee you would like to add?",
                },
                {
                  type: "input",
                  name: "role_id",
                  message:
                    "What is the role id of the employee you would like to add?",
                },
                {
                  type: "input",
                  name: "manager_id",
                  message:
                    "What is the manager id of the employee you would like to add?",
                },
              ])
              .then((answers) => {
                console.info("Answer:", answers.first_name);
                console.info("Answer:", answers.last_name);
                console.info("Answer:", answers.role_id);
                console.info("Answer:", answers.manager_id);
                db.query(
                  "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
                  [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
                  (err, rows) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.table(rows);
                      start();
                    }
                  }
                );
              });
            break;
          case "Update employee role":
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "id",
                  message:
                    "What is the id of the employee you would like to update?",
                },
                {
                  type: "input",
                  name: "role_id",
                  message:
                    "What is the new role id of the employee you would like to update?",
                },
              ])
              .then((answers) => {
                console.info("Answer:", answers.id);
                console.info("Answer:", answers.role_id);
                db.query(
                  "UPDATE employees SET role_id = ? WHERE id = ?",
                  [answers.role_id, answers.id],
                  (err, rows) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.table(rows);
                      start();
                    }
                  }
                );
              });
            break;
          case "Exit":
            process.exit();
        }
      });
  }
  start();
