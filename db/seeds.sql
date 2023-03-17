INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 200000, 2),
    ('Software Engineer', 180000, 2),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 200000, 4),
    ('Lawyer', 180000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik', 4, 3),
    ('Malia', 'Brown', 5, NULL),
    ('Sarah', 'Lourd', 6, NULL),
    ('Tom', 'Allen', 7, 6);
