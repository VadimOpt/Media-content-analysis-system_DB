const express = require('express');
const app = express();
const port = 3000;

const { setupUserRoutes,
        setupRoleRoutes,
        getMainPage,
        setupMentionsReportRoutes} = require('./routes');

app.use(express.json());

setupUserRoutes(app);
setupRoleRoutes(app);
setupMentionsReportRoutes(app)
getMainPage(app)

app.use((req, res, next) => {
    res.status(404).json({ error: 'Сторінка не знайдена' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Помилка на сервері' });
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});

module.exports = app;
