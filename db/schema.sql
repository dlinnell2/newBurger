CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    burger VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 'false'
);