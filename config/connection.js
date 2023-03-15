const mysql2 = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

db.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to the employees_db database.');
});

module.exports = db;
