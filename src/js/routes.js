const db = require('./database');

const setupUserRoutes = (app) => {
    // show all users
    app.get('/users', (req, res) => {
        db.query('SELECT * FROM User', (error, results) => {
            if (error) {
                return res.status(500).send('Помилка сервера при запиті користувачів');
            }
            res.json(results);
        });
    });

    // create new users
    app.post('/users', (req, res) => {
        const { password, nickname, email, role_id } = req.body;
        db.query('INSERT INTO User (password, nickname, email, Role_id) VALUES (?, ?, ?, ?)',
            [password, nickname, email, role_id],
            (error, results) => {
                if (error) {
                    return res.status(500).send('Помилка сервера при створенні користувача');
                }
                res.status(201).send(`Користувач створений з ID: ${results.insertId}`);
            });
    });

    // show user by id
    app.get('/users/:id', (req, res) => {
        const userId = req.params.id;
        db.query('SELECT * FROM User WHERE id = ?', [userId], (error, results) => {
            if (error) {
                return res.status(500).send('Помилка сервера при запиті користувача');
            }
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).send('Користувач не знайдено');
            }
        });
    });
};

const setupRoleRoutes = (app) => {

    // show all roles
    app.get('/roles', (req, res) => {
        db.query('SELECT * FROM Role', (error, results) => {
            if (error) {
                return res.status(500).send('Помилка сервера при запиті ролей');
            }
            res.json(results);
        });
    });

    //show role by id
    app.get('/roles/:id', (req, res) => {
        const roleId = req.params.id;
        db.query('SELECT * FROM Role WHERE id = ?', [roleId], (error, results) => {
            if (error) {
                return res.status(500).send('Помилка сервера при запиті ролі');
            }
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).send('Роль не знайдено');
            }
        });
    });
};

const setupMentionsReportRoutes = (app) => {
    // get all reports
    app.get('/mentionsReport', (req, res) => {
        db.query('SELECT * FROM MentionReport', (error, results) => {
            if (error) {
                return res.status(500).send('Помилка сервера при запиті звітів');
            }
            res.json(results);
        });
    });

    // get report by id
    app.get('/mentionsReport/:id', (req, res) => {
        const reportId = req.params.id;
        db.query('SELECT * FROM MentionReport WHERE id = ?', [reportId], (error, results) => {
            if (error) {
                return res.status(500).send('Помилка сервера при запиті звіту');
            }
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).send('Звіт не знайдено');
            }
        });
    });

    // create report
    app.post('/mentionsReport', (req, res) => {
        const { description, creationDate, title, user_id } = req.body;
        db.query('INSERT INTO MentionReport (description, creationDate, title, User_id) VALUES (?, ?, ?, ?)',
            [description, creationDate, title, user_id],
            (error, results) => {
                if (error) {
                    return res.status(500).send('Помилка сервера при створенні звіту');
                }
                res.status(201).send(`Звіт створений з ID: ${results.insertId}`);
            });
    });

    // delete report
    app.delete('/mentionsReport/:id', (req, res) => {
        const reportId = req.params.id;
        db.query('DELETE FROM MentionReport WHERE id = ?', [reportId], (error, results) => {
            if (error) {
                return res.status(500).send('Помилка сервера при видаленні звіту');
            }
            if (results.affectedRows > 0) {
                res.send(`Звіт з ID ${reportId} видалений`);
            } else {
                res.status(404).send('Звіт не знайдено');
            }
        });
    });
};

const getMainPage = (app) => {
    //show main page (test)
    app.get('/', (req, res) => {
        res.send('Головна сторінка');
    });
}

module.exports = { setupUserRoutes, setupRoleRoutes, getMainPage, setupMentionsReportRoutes };
//