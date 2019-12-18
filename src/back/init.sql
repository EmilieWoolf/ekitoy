

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ekitoy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ekitoy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ekitoy` DEFAULT CHARACTER SET utf8 ;
USE `ekitoy` ;

-- -----------------------------------------------------
-- Table `ekitoy`.`basket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ekitoy`.`basket` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `associations_id` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ekitoy`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ekitoy`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(255) NOT NULL,
  `pseudo` VARCHAR(255) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NULL,
  `basket_id` INT NOT NULL,
  PRIMARY KEY (`id`, `basket_id`),
  INDEX `fk_users_basket1_idx` (`basket_id` ASC) ,
  CONSTRAINT `fk_users_basket1`
    FOREIGN KEY (`basket_id`)
    REFERENCES `ekitoy`.`basket` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ekitoy`.`toy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ekitoy`.`toy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `categories` VARCHAR(255) NOT NULL,
  `keyword` VARCHAR(255) NOT NULL,
  `etat` VARCHAR(255) NOT NULL,
  `price` INT NULL,
  `users_id` INT NOT NULL,
  `pictures` VARCHAR(255) NULL,
  PRIMARY KEY (`id`, `users_id`),
  INDEX `fk_toy_users1_idx` (`users_id` ASC) ,
  CONSTRAINT `fk_toy_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `ekitoy`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ekitoy`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ekitoy`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ekitoy`.`toy_has_categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ekitoy`.`toy_has_categories` (
  `toy_id` INT NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`toy_id`, `categories_id`),
  INDEX `fk_toy_has_categories_categories1_idx` (`categories_id` ASC) ,
  INDEX `fk_toy_has_categories_toy1_idx` (`toy_id` ASC) ,
  CONSTRAINT `fk_toy_has_categories_toy1`
    FOREIGN KEY (`toy_id`)
    REFERENCES `ekitoy`.`toy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_toy_has_categories_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `ekitoy`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ekitoy`.`associations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ekitoy`.`associations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;