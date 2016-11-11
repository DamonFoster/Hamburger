-- Write SQL queries this file that do the following:
-- 1. Create the burgers_db.
-- 2. Switch to or use the burgers_db.
-- 3. Create a burgers table with these fields:
-- 4. id: an auto incrementing int that serves as the primary key.
-- 5. burger_name: a string.
-- 6. devoured: a boolean.
-- 7. date: a TIMESTAMP.

CREATE database burgersDB;
USE burgersDB;
CREATE TABLE `burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `devoured` BOOLEAN DEFAULT 0,
  `timeEaten` TIMESTAMP NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);
  