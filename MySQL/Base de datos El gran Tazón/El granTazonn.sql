-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`perfil_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`perfil_cliente` (
  `id_perfil_cliente` INT NOT NULL AUTO_INCREMENT,
  `fecha_registro` DATE NOT NULL,
  `preferencias` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id_perfil_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NOT NULL,
  `apellido` VARCHAR(80) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(255) NOT NULL,
  `perfil_cliente_id_perfil_cliente` INT NOT NULL,
  PRIMARY KEY (`id_cliente`, `perfil_cliente_id_perfil_cliente`),
  INDEX `fk_cliente_perfil_cliente1_idx` (`perfil_cliente_id_perfil_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_perfil_cliente1`
    FOREIGN KEY (`perfil_cliente_id_perfil_cliente`)
    REFERENCES `mydb`.`perfil_cliente` (`id_perfil_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`productos` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `descripcion` TEXT(300) NOT NULL,
  `precio` DECIMAL(10,2) UNSIGNED NOT NULL,
  `stock` INT(10) UNSIGNED ZEROFILL NOT NULL,
  PRIMARY KEY (`id_productos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos` (
  `id_pedidos` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `estado_pedido` VARCHAR(100) NOT NULL,
  `total` DECIMAL(10,2) UNSIGNED NOT NULL,
  `cliente_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_pedidos`),
  INDEX `fk_pedidos_cliente_idx` (`cliente_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_cliente`
    FOREIGN KEY (`cliente_id_cliente`)
    REFERENCES `mydb`.`cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`detalles_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`detalles_pedido` (
  `id_detalles_pedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT UNSIGNED NOT NULL,
  `precio_unitario` DECIMAL(10,2) UNSIGNED NOT NULL,
  `descuento` DECIMAL(10,2) UNSIGNED NOT NULL,
  `pedidos_id_pedidos` INT NOT NULL,
  `productos_id_productos` INT NOT NULL,
  PRIMARY KEY (`id_detalles_pedido`),
  INDEX `fk_detalles_pedido_pedidos1_idx` (`pedidos_id_pedidos` ASC) VISIBLE,
  INDEX `fk_detalles_pedido_productos1_idx` (`productos_id_productos` ASC) VISIBLE,
  CONSTRAINT `fk_detalles_pedido_pedidos1`
    FOREIGN KEY (`pedidos_id_pedidos`)
    REFERENCES `mydb`.`pedidos` (`id_pedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalles_pedido_productos1`
    FOREIGN KEY (`productos_id_productos`)
    REFERENCES `mydb`.`productos` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`productos_favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`productos_favoritos` (
  `id_productos_favoritos` INT NOT NULL,
  `productos_id_productos` INT NOT NULL,
  PRIMARY KEY (`productos_id_productos`, `id_productos_favoritos`),
  INDEX `fk_cliente_has_productos_productos1_idx` (`productos_id_productos` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_has_productos_productos1`
    FOREIGN KEY (`productos_id_productos`)
    REFERENCES `mydb`.`productos` (`id_productos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_favoritos_cliente1`
    FOREIGN KEY (`productos_id_productos`)
    REFERENCES `mydb`.`cliente` (`direccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
