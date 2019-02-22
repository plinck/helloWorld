DROP DATABASE IF EXISTS helloworld_db;
CREATE DATABASE helloworld_db;
USE helloworld_db;

DROP TABLE IF EXISTS worlds;

-- Store the answers as JSON string in database
CREATE TABLE worlds (
    id      INT NOT NULL AUTO_INCREMENT,
    name    VARCHAR(255),
    PRIMARY KEY(id)
);
