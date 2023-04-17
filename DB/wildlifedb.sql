-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema wildlifedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `wildlifedb` ;

-- -----------------------------------------------------
-- Schema wildlifedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wildlifedb` DEFAULT CHARACTER SET utf8 ;
USE `wildlifedb` ;

-- -----------------------------------------------------
-- Table `conservation_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `conservation_status` ;

CREATE TABLE IF NOT EXISTS `conservation_status` (
  `id` INT NOT NULL,
  `status_code` VARCHAR(2) NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `description` VARCHAR(140) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `species`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `species` ;

CREATE TABLE IF NOT EXISTS `species` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `alt_names` VARCHAR(340) NULL,
  `scientific_name` VARCHAR(100) NULL,
  `description` VARCHAR(1000) NULL,
  `image_url` VARCHAR(200) NULL,
  `conservation_status_id` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `species_id_UNIQUE` (`id` ASC),
  INDEX `fk_species_conservation_status1_idx` (`conservation_status_id` ASC),
  CONSTRAINT `fk_species_conservation_status1`
    FOREIGN KEY (`conservation_status_id`)
    REFERENCES `conservation_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `animal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `animal` ;

CREATE TABLE IF NOT EXISTS `animal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag` VARCHAR(60) NULL,
  `nickname` VARCHAR(60) NULL,
  `reason` VARCHAR(1000) NULL,
  `note` VARCHAR(2000) NULL,
  `blood_lead` DOUBLE NULL,
  `arrived` DATETIME NULL,
  `released` DATETIME NULL,
  `species_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_animal_species1_idx` (`species_id` ASC),
  CONSTRAINT `fk_animal_species1`
    FOREIGN KEY (`species_id`)
    REFERENCES `species` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `feeding`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feeding` ;

CREATE TABLE IF NOT EXISTS `feeding` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `employee` VARCHAR(60) NOT NULL,
  `when_fed` DATETIME NULL,
  `observation` VARCHAR(1000) NULL,
  `animal_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_feeding_animal1_idx` (`animal_id` ASC),
  CONSTRAINT `fk_feeding_animal1`
    FOREIGN KEY (`animal_id`)
    REFERENCES `animal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS keeper1@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'keeper1'@'localhost' IDENTIFIED BY 'keeper1_37';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'keeper1'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `conservation_status`
-- -----------------------------------------------------
START TRANSACTION;
USE `wildlifedb`;
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (1, 'LC', 'LEAST CONCERN', 'very low risk; does not qualify for a higher risk category');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (2, 'CD', 'CONSERVATION DEPENDENT', 'low risk: is conserved to prevent being near threatened');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (3, 'NT', 'NEAR THREATENED', 'likely to become endangered in the near future');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (4, 'VU', 'VULNERABLE', 'high risk of extinction in the wild');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (5, 'EN', 'ENDANGERED', 'higher risk of extinction in the wild');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (6, 'CR', 'CRITICALLY ENDANGERED', 'extremely high risk of extinction in the wild');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (7, 'EW', 'EXTINCT IN THE WILD', 'known only to survive in captivity or as a naturalized population outside its historic range');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (8, 'EX', 'EXTINCT', 'no known living individuals');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (9, 'NE', 'NOT EVALUATED', 'has not yet been evaluated against the criteria');
INSERT INTO `conservation_status` (`id`, `status_code`, `status`, `description`) VALUES (10, 'DD', 'DATA DEFICIENT', 'not enough data to make an assessment of its risk of extinction');

COMMIT;


-- -----------------------------------------------------
-- Data for table `species`
-- -----------------------------------------------------
START TRANSACTION;
USE `wildlifedb`;
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (1, 'White-tailed Deer', NULL, 'Odocoileus virginianus', 'reddish-brown coat in spring and summer; grayer in fall and winter; recognized by white on underside of tail', 'https://xanimal37.github.io/img/species1.jpg', 1);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (2 , 'American Toad', NULL, 'Anaxyrus americanus', NULL, 'https://xanimal37.github.io/img/species2.jpg', 1);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (3, 'Gray Treefrog', 'Eastern Gray Treefrog; Northern Gray Treefrog', 'Dryophytes versicolor', NULL, NULL, 1);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (4, 'Spotted Salamander', NULL, 'Ambystoma maculatum', NULL, NULL, 1);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (5, 'American Bittern', NULL, 'Botaurus lentiginosus', NULL, NULL, 1);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (6, 'American Coot', NULL, 'Fulica americana', NULL, NULL, 1);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (7, 'American Crow', NULL, 'Corvus brachyrhynchos', NULL, NULL, 1);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (8, 'American Goldfinch', NULL, 'Spinus tristis', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (9, 'American Kestrel', NULL, 'Falco sparverius', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (10, 'American Robin', NULL, 'Turdus migratorius', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (11, 'American Woodcock', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (12, 'Bald Eagle', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (13, 'Baltimore Oriole', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (14, 'Barred Owl', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (15, 'Belted Kingfisher', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (16, 'Black-and-white Warbler', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (17, 'Black-capped Chickadee', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (18, 'Blue Jay', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (19, 'Broad-winged Hawk', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (20, 'Canada Goose', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (21, 'Cedar Waxwing', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (22, 'Chipping Sparrow', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (23, 'Common Grackle', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (24, 'Common Loon', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (25, 'Common Merganser', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (26, 'Common Nighthawk', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (27, 'Common Raven', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (28, 'Common Redpoll', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (29, 'Common Yellowthroat', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (30, 'Cooper\'s Hawk', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (31, 'Dark-eyed Junco', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (32, 'Downy Woodpecker', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (33, 'Eastern Whip-poor-will', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (34, 'European Starling', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (35, 'Fox Sparrow', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (36, 'Great Blue Herron', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (37, 'Great Horned Owl', NULL, NULL, NULL, 'https://xanimal37.github.io/img/species37.jpg', DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (38, 'Green Heron', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (39, 'Hairy Woodpecker', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (40, 'Hermit Thrush', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (41, 'Hooded Merganser', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (42, 'House Sparrow', NULL, NULL, NULL, 'https://xanimal37.github.io/img/species42.jpg', DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (43, 'House Wren', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (44, 'Least Sandpiper', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (45, 'Lincoln\'s Sparrow', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (46, 'Mallard', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (47, 'Merlin', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (48, 'Mourning Dove', NULL, 'Zenaida macroura', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (49, 'Nashville Warbler', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (50, 'Northern Cardinal', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (51, 'Northern Flicker', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (52, 'Northern Saw-whet Owl', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (53, 'Osprey', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (54, 'Ovenbird', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (55, 'Pileated Woodpecker', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (56, 'Pine Grosbeak', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (57, 'Pine Siskin', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (58, 'Purple Finch', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (59, 'Red-bellied Woodpecker', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (60, 'Red-breasted Nuthatch', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (61, 'Red-eyed Vireo', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (62, 'Red-tailed Hawk', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (63, 'Ring-billed Gull', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (64, 'Rock Dove', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (65, 'Rose-breasted Grosbeak', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (66, 'Rough-legged Hawk', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (67, 'Ruby-throated Hummingbird', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (68, 'Ruffed Grouse', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (69, 'Sandhill Crane', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (70, 'Snowy Owl', NULL, 'Bubo scandiacus', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (71, 'Song Sparrow', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (72, 'Trumpeter Swan', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (73, 'Turkey Vulture', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (74, 'Veery', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (75, 'White-breasted Nuthatch', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (76, 'White-throated Sparrow', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (77, 'Wood Duck', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (78, 'Yellow-bellied Sucker', NULL, 'Sphyrapicus varius', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (79, 'Yellow-rumped Warbler', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (80, 'American Beaver', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (81, 'American Black Bear', NULL, 'Ursus americanus', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (82, 'Big Brown Bear', NULL, 'Ursus arctos', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (83, 'Coyote', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (84, 'Deer Mouse', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (85, 'Eastern Chipmunk', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (86, 'Eastern Cottontail', NULL, NULL, NULL, 'https://xanimal37.github.io/img/species86.jpg', DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (87, 'Eastern Gray Squirrel', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (88, 'Gray Fox', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (89, 'Little Brown Bat', 'Little Brown Myotis', 'Myotis lucifugus', 'small, brown, mouse-eared bat', 'https://xanimal37.github.io/img/species89.jpg', 5);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (90, 'Meadow Jumping Mouse', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (91, 'Meadow Vole', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (92, 'Muskrat', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (93, 'North American Porcupine', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (94, 'Northern Raccoon', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (95, 'Northern Short-tailed Shrew', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (96, 'Norway Rat', 'common rat; street rat; sewer rat; wharf rat', 'Rattus norvegicus', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (97, 'Red Fox', NULL, 'Vulpes vulpes', NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (98, 'Red Squirrel', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (99, 'Snowshoe Hare', NULL, NULL, NULL, 'https://xanimal37.github.io/img/species99.jpg', DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (100, 'Southern Flying Squirrel', NULL, NULL, NULL, 'https://xanimal37.github.io/img/species100.jpg', DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (101, 'Striped Skunk', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (102, 'Thirteen-lined Ground Squirrel', 'striped gopher', NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (103, 'Virginia Opossum', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (104, 'Woodchuck', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (105, 'Common Garter Snake', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (106, 'Common Snapping Turtle', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (107, 'Eastern Fox Snake', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (108, 'Eastern Painted Turtle', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (109, 'Northern Water Snake', NULL, NULL, NULL, NULL, DEFAULT);
INSERT INTO `species` (`id`, `name`, `alt_names`, `scientific_name`, `description`, `image_url`, `conservation_status_id`) VALUES (110, 'Wood Turtle', NULL, NULL, NULL, 'https://xanimal37.github.io/img/species110.jpg', 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `animal`
-- -----------------------------------------------------
START TRANSACTION;
USE `wildlifedb`;
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (1, NULL, 'Crunchy', 'lead poisoning', 'will attack other birds', 28.1, '2023-03-14 13:00:00', '2023-03-18 14:30:00', 37);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (2, NULL, 'Cutie Pie', 'broken leg', 'the cutest little brown bat EVER', NULL, '2023-02-28 12:00:00', NULL, 89);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (3, '23-MN', 'Snarly', 'buck shot', 'takes a while to trust', 9.2, '2022-12-19 13:36:00', NULL, 110);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (4, NULL, 'Piglet', 'territorial fight', 'likes to eat', 2.2, '2023-01-31 16:09:00', NULL, 42);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (5, NULL, 'Sneaky', 'found during winter', NULL, 10.4, '2022-10-28 10:00:00', NULL, 100);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (6, '324L', 'Bik', 'baby mom died', NULL, NULL, '2022-11-10 00:00:00', '2023-04-09 12:00:00', 86);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (7, NULL, 'Betty', 'couldn\'t eat', 'needs to be fed by hand', NULL, '2023-01-02 12:23:09', NULL, 99);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (8, NULL, 'Mik', 'abandoned, nest destroyed', NULL, NULL, '2023-02-03 04:00:00', NULL, 65);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (9, NULL, 'Lucky', 'hit by car; various injuries', 'malnourished', NULL, '2023-04-04 18:34:00', NULL, 1);
INSERT INTO `animal` (`id`, `tag`, `nickname`, `reason`, `note`, `blood_lead`, `arrived`, `released`, `species_id`) VALUES (10, NULL, 'Xavier', 'fight with domestic dog', NULL, NULL, '2023-03-24 20:00:01', NULL, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `feeding`
-- -----------------------------------------------------
START TRANSACTION;
USE `wildlifedb`;
INSERT INTO `feeding` (`id`, `employee`, `when_fed`, `observation`, `animal_id`) VALUES (1, 'JGK', '2023-02-10 08:00:00', 'healthy appetite', 1);
INSERT INTO `feeding` (`id`, `employee`, `when_fed`, `observation`, `animal_id`) VALUES (2, 'JGK', '2023-02-11 08:30:00', NULL, 1);
INSERT INTO `feeding` (`id`, `employee`, `when_fed`, `observation`, `animal_id`) VALUES (3, 'BNQ', '2023-02-12 08:32:00', NULL, 1);
INSERT INTO `feeding` (`id`, `employee`, `when_fed`, `observation`, `animal_id`) VALUES (4, 'MMC', '2023-02-13 09:00:00', NULL, 1);
INSERT INTO `feeding` (`id`, `employee`, `when_fed`, `observation`, `animal_id`) VALUES (5, 'PLO', '2023-03-14 08:55:00', 'looks healthy', 2);

COMMIT;

