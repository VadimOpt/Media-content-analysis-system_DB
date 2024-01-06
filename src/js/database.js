const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'optimat2016',
    database: 'mcanalyzer',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.connect(error => {
    if (error) {
        console.error('Помилка підключення до бази даних: ' + error.stack);
        return;
    }

    console.log('Підключено до бази даних з ID ' + connection.threadId);
});

module.exports = connection;
