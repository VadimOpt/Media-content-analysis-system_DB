# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- RESTfull сервіс для управління даними
## SQL-Скрипт для створення початкового наповнення бази даних

```SQL
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mcanalyzer
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mcanalyzer` ;

-- -----------------------------------------------------
-- Schema mcanalyzer
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mcanalyzer` DEFAULT CHARACTER SET utf8mb3 ;
USE `mcanalyzer` ;

-- -----------------------------------------------------
-- Table `mcanalyzer`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`Role` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`User` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`User` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Role_id`),
  INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mcanalyzer`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`MentionReport`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`MentionReport` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`MentionReport` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `creationDate` DATETIME NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `User_id`),
  INDEX `fk_MentionReport_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_MentionReport_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`PubRequest`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`PubRequest` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`PubRequest` (
  `User_id` INT UNSIGNED NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`User_id`),
  INDEX `fk_PubRequest_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_PubRequest_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`PubReview`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`PubReview` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`PubReview` (
  `status` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  `PubRequest_User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`User_id`, `PubRequest_User_id`),
  INDEX `fk_PubReview_PubRequest1_idx` (`PubRequest_User_id` ASC) VISIBLE,
  CONSTRAINT `fk_PubReview_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`User` (`id`),
  CONSTRAINT `fk_PubReview_PubRequest1`
    FOREIGN KEY (`PubRequest_User_id`)
    REFERENCES `mcanalyzer`.`PubRequest` (`User_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`ResultData`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`ResultData` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`ResultData` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sourse` VARCHAR(255) NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `mentionedAt` DATETIME NOT NULL,
  `mentions` INT NOT NULL,
  `MentionReport_id` INT UNSIGNED NOT NULL,
  `MentionReport_User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `MentionReport_id`, `MentionReport_User_id`),
  INDEX `fk_ResultData_MentionReport1_idx` (`MentionReport_id` ASC, `MentionReport_User_id` ASC) VISIBLE,
  CONSTRAINT `fk_ResultData_MentionReport1`
    FOREIGN KEY (`MentionReport_id` , `MentionReport_User_id`)
    REFERENCES `mcanalyzer`.`MentionReport` (`id` , `User_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mcanalyzer`.`Role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mcanalyzer`;
INSERT INTO `mcanalyzer`.`Role` (`id`, `name`, `description`) VALUES (1, 'User', 'Registered user, can get info about mentions');
INSERT INTO `mcanalyzer`.`Role` (`id`, `name`, `description`) VALUES (2, 'Editor', 'Can do the same as the user, can edit data');
INSERT INTO `mcanalyzer`.`Role` (`id`, `name`, `description`) VALUES (3, 'Admin', 'Can do the same as other, can give roles and can block users.');

COMMIT;
```

## RESTfull сервіс для управління даними
## Js
### App.js
```javascript
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

```