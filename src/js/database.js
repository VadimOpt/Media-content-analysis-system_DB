const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'mcanalyzer',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.connect(error => {
    if (error) throw error;
    console.log('Підключено до бази даних!');
});

module.exports = connection;
