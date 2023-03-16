INSERT INTO departments (dept_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 110000, 2),
       ('Software Engineer', 100000, 2),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 130000, 4),
       ('Lawyer', 120000, 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ('John', 'Doe', 1),
       ('Habib', 'Khan', 2),
       ('Sally', 'Smith', 3),
       ('Bob', 'Jones', 4),
       ('Mary', 'Johnson', 5),
       ('Sue', 'Williams', 6);
