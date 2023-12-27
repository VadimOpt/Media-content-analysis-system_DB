const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
const port = 3000;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'optimat2016',
    database: 'mcanalyzer',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(express.json());

// Отримання всіх користувачів
app.get('/users', (req, res) => {
    pool.query('SELECT * FROM User', (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(results);
    });
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    pool.query('SELECT * FROM User WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(results[0]);
    });
});

app.post('/users', (req, res) => {
    const { password, nickname, email, roleId } = req.body;
    const query = 'INSERT INTO User (password, nickname, email, Role_id) VALUES (?, ?, ?, ?)';
    pool.query(query, [password, nickname, email, roleId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ message: 'User created', userId: results.insertId });
    });
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM User WHERE id = ?';
    pool.query(query, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    });
});

app.get('/roles', (req, res) => {
    pool.query('SELECT * FROM Role', (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(results);
    });
});

app.put('/users/:userId/role', (req, res) => {
    const userId = req.params.userId;
    const { roleId } = req.body; // Нова роль передається в тілі запиту

    const query = 'UPDATE User SET Role_id = ? WHERE id = ?';
    pool.query(query, [roleId, userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User role updated' });
    });
});


app.get('/mentionreports', (req, res) => {
    const query = 'SELECT * FROM MentionReport';
    pool.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(results);
    });
});

app.delete('/mentionreports/:id', (req, res) => {
    const reportId = req.params.id;
    const query = 'DELETE FROM MentionReport WHERE id = ?';
    pool.query(query, [reportId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'MentionReport not found' });
        }
        res.json({ message: 'MentionReport deleted' });
    });
});

app.post('/mentionreports', (req, res) => {
    const { description, creationDate, title, userId } = req.body;
    const query = 'INSERT INTO MentionReport (description, creationDate, title, User_id) VALUES (?, ?, ?, ?)';
    pool.query(query, [description, creationDate, title, userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ message: 'MentionReport created', reportId: results.insertId });
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
