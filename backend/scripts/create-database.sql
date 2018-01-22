-- create database climbing;
use climbing;
CREATE TABLE routes (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     location CHAR(30),
     name CHAR(30) NOT NULL,
     description CHAR(255),
     level char(3) NOT NULL,
     created BIGINT NOT NULL,
     updated BIGINT NOT NULL,
     opener CHAR(50),
     openerclub CHAR(50),
     PRIMARY KEY (id)
);
