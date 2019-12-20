

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

ALTER TABLE `ekitoy`.`users` CHANGE `lastname` `lastname` VARCHAR(255) NULL;
ALTER TABLE `ekitoy`.`users` CHANGE `firstname` `firstname` VARCHAR(255) NULL;
ALTER TABLE `ekitoy`.`users` CHANGE `pseudo` `pseudo` VARCHAR(255) NULL;
ALTER TABLE `ekitoy`.`users` DROP PRIMARY KEY, ADD PRIMARY KEY(`id`);
ALTER TABLE `ekitoy`.`users` CHANGE `basket_id` `basket_id` INT NULL;


INSERT INTO `ekitoy`.`users` (`id`, `password`, `mail`) VALUES (1, 'password', 'momo@gmail.com');

ALTER TABLE `ekitoy`.`users` ADD PRIMARY KEY (`id`);
ALTER TABLE `ekitoy`.`users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

-- -----------------------------------------------------
-- Table `ekitoy`.`toy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ekitoy`.`toy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `categories` VARCHAR(255),
  `keyword` VARCHAR(255),
  `etat` VARCHAR(255),
  `price` INT NULL,
  `pictures` VARCHAR(255),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


ALTER TABLE `ekitoy`.`toy` CHANGE `categories` `categories` VARCHAR(255) NULL;
ALTER TABLE `ekitoy`.`toy` CHANGE `keyword` `keyword` VARCHAR(255) NULL;
ALTER TABLE `ekitoy`.`toy` CHANGE `etat` `etat` VARCHAR(255) NULL;



INSERT INTO `ekitoy`.`toy` ( `users_id`, `name`, `description`,`price`,`pictures`) VALUES 
(1'Camion Barbie', 'Petit bus rose, fonctionne sans piles . Jamais ouvert', '18', 'img1.png'),
(1'Lego Architecture', 'Tour à construire , modele New York . Jamais ouvert', '18', 'img2.png'),
(1'Lara Croft Figurine', 'Figure de collection . Neuf','15', 'img3.png'),
(1'Game Boy Color', 'Modele transaprent vintage . Parfait Etat', '8', 'img4.png'),
(1'Barbie Agent Secret', 'Poupée mannequin pour jeunes filles. Dans son emballage , non ouvert. Envoi soigné & rapide!', '5', 'img5.png');
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