-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 192.168.1.9    Database: foodisimo
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) NOT NULL,
  `area_id` int(11) NOT NULL,
  `floor` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `area_id` (`area_id`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Αιόλου 4',1,1),(2,'Τσόχα 15-17',2,1),(3,'Λεωφ. Γεωργικής Σχολής 43',2,1),(4,'T.Σεχιώτη 2',3,2),(5,'Αρκαδίου 8',4,3),(6,'Ελ. Βενιζέλου 26',5,3),(7,'Ομήρου 15',6,1),(8,'Μακρυγιάννη 22',7,1),(9,'Αιόλου 10',1,1),(10,'Katou Tasou 10',1,1),(11,'Katou Tasou 10',1,1),(12,'Katou Tasou 10',1,1),(13,'Trelos Malakas 4',1,1),(14,'',1,1),(15,'',1,1),(16,'Trelos Malakas 4',1,1),(17,'Πάροδος Παύλου Μελά',1,1);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `zip_code` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas`
--

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
INSERT INTO `areas` VALUES (1,'Πυλαία',55535),(2,'ΑΓΛΑΙΑΣ',54248),(3,'ΑΔΜΗΤΟΥ',57645),(4,'ΘΕΜΕΛΗ',4248),(5,'ΓΑΡΕΦΗ',54248),(6,'ΑΙΟΛΟΥ',54634),(7,'ΓΚΟΥΡΑ ΙΩΑΝΝΟΥ',54432);
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Κρέπες'),(2,'Καφέδες'),(3,'Σαλάτες'),(4,'Μπουγάτσα'),(5,'Burgers'),(6,'Πίτσα'),(7,'Sandwich'),(8,'Vegeterian'),(9,'Σουβλάκια');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '1',
  `notes` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (4,10,1,4,''),(5,11,1,4,''),(6,12,1,4,''),(7,13,1,4,''),(8,14,1,4,''),(9,15,1,4,''),(10,16,1,4,''),(11,17,1,4,''),(12,18,1,4,''),(13,19,1,4,''),(14,20,4,2,''),(15,22,48,1,''),(16,22,53,1,''),(17,22,61,1,''),(18,23,19,6,''),(19,23,3,1,''),(20,24,9,8,''),(21,24,12,1,'');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `status` enum('canceled','completed','sent','waiting_payment','deleted') NOT NULL,
  `notes` varchar(200) DEFAULT NULL,
  `total` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `shop_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'sent','ela',12,'2020-01-13 14:39:26','2020-01-13 14:39:26',1),(2,1,'sent','χτύπα τήλ',6,'2020-01-13 17:37:03','2020-01-13 17:37:03',1),(3,1,'sent','χτύπα τήλ',6,'2020-01-13 17:38:46','2020-01-13 17:38:46',1),(4,1,'sent','χτύπα τήλ',6,'2020-01-13 17:40:01','2020-01-13 17:40:01',1),(5,1,'sent','χτύπα τήλ',6,'2020-01-13 17:42:58','2020-01-13 17:42:58',1),(6,1,'sent','χτύπα τήλ',6,'2020-01-13 17:44:56','2020-01-13 17:44:56',1),(7,1,'sent','χτύπα τήλ',6,'2020-01-13 17:51:43','2020-01-13 17:51:43',1),(8,1,'sent','χτύπα τήλ',6,'2020-01-13 17:54:56','2020-01-13 17:54:56',1),(9,1,'sent','χτύπα τήλ',6,'2020-01-13 17:58:54','2020-01-13 17:58:54',1),(10,1,'sent','χτύπα τήλ',6,'2020-01-13 17:59:16','2020-01-13 17:59:16',1),(11,1,'sent','χτύπα τήλ',6,'2020-01-13 18:03:20','2020-01-13 18:03:20',1),(12,1,'sent','',6,'2020-01-13 18:04:15','2020-01-13 18:04:15',1),(13,1,'sent',';lkj;lkj',6,'2020-01-13 18:12:13','2020-01-13 18:12:13',1),(14,1,'sent','4321',6,'2020-01-13 18:13:34','2020-01-13 18:13:34',1),(15,1,'sent','4654',6,'2020-01-13 18:14:58','2020-01-13 18:14:58',1),(16,1,'sent','4654',6,'2020-01-13 18:15:32','2020-01-13 18:15:32',1),(17,1,'sent','5432',6,'2020-01-13 18:16:39','2020-01-13 18:16:39',1),(18,1,'sent','6534',6,'2020-01-13 18:18:07','2020-01-13 18:18:07',1),(19,1,'sent','5432',6,'2020-01-13 18:19:23','2020-01-13 18:19:23',1),(20,1,'sent','5432',8,'2020-01-13 20:47:06','2020-01-13 20:47:06',1),(21,1,'sent','sent',17,'2020-01-13 22:09:24','2020-01-13 22:09:24',1),(22,1,'sent','ελα κατω',16.5,'2020-01-13 22:14:10','2020-01-13 22:14:10',4),(23,6,'sent','654564',10.5,'2020-01-13 22:44:00','2020-01-13 22:44:00',6),(24,1,'sent','asf',48.5,'2020-01-13 23:09:58','2020-01-13 23:09:58',5);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_attributes`
--

DROP TABLE IF EXISTS `product_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `extra_price` float DEFAULT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_attributes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_attributes`
--

LOCK TABLES `product_attributes` WRITE;
/*!40000 ALTER TABLE `product_attributes` DISABLE KEYS */;
INSERT INTO `product_attributes` VALUES (1,1,0,'αγάπη');
/*!40000 ALTER TABLE `product_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `category_id` (`category_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_categories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `product_categories_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `product_categories` VALUES (1,1,1),(2,1,2),(3,2,3),(4,3,4),(5,3,5),(6,3,6),(7,6,7),(8,6,8),(9,6,9),(10,6,10),(11,6,11),(12,3,12),(13,3,13),(14,3,14),(15,3,15),(16,2,16),(17,2,17),(18,2,18),(19,2,19),(20,2,20),(21,2,21),(22,2,22),(23,7,23),(24,7,24),(25,7,25),(26,7,26),(27,7,27),(28,5,28),(29,5,29),(30,5,30),(31,5,31),(32,5,32),(33,2,33),(34,2,34),(35,2,35),(36,2,36),(37,2,37),(38,2,38),(39,2,39),(40,1,40),(41,1,41),(42,1,42),(43,1,43),(44,1,44),(45,1,45),(46,1,46),(47,1,47),(48,1,48),(49,1,49),(50,1,50),(51,1,51),(52,1,52),(53,1,53),(54,1,54),(55,1,55),(56,6,56),(57,6,57),(58,6,58),(59,6,59),(60,6,60),(61,6,61);
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `stock` enum('out_of_stock','in_stock','running_low') DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `products_index_1` (`id`),
  KEY `product_status` (`shop_id`,`stock`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Φύλλο κρέπας',1,1.5,'in_stock','Τραγανό φύλλο κρέπας','2019-12-17 06:17:29','2019-12-17 06:17:29'),(2,'Κρέπα special',1,4.5,'in_stock','Με κασέρι, ζαμπόν, μπέικον, μανιτάρια, ντομάτα & μαγιονέζα','2020-01-13 20:02:58','2020-01-13 20:02:58'),(3,'Espresso',1,3,'in_stock','','2020-01-13 20:28:41','2020-01-13 20:28:41'),(4,'Mama`s',1,4,'in_stock','Σαλάτα με μαρούλι, ρόκα, καρύδια, ελαιόλαδο & βαλσάμικο με μέλι','2020-01-13 20:30:33','2020-01-13 20:30:33'),(5,'Chef',1,4,'in_stock','Σαλάτα με μαρούλι, ντομάτα, αγγούρι, αυγό, κασέρι, ζαμπόν & 1000 islands sauce','2020-01-13 20:31:31','2020-01-13 20:31:31'),(6,'Caesar`s',1,4,'in_stock','Σαλάτα με μαρούλι, φιλέτο κοτόπουλο, αγγούρι, ντομάτα, καλαμπόκι, κρουτόν & sauce μουστάρδας','2020-01-13 20:31:46','2020-01-13 20:31:46'),(7,'Espania',5,5.5,'in_stock','Με ζαμπόν, μπέικον, μανιτάρια, πεπερόνι, πιπεριά, σως Espania, gouda & σάλτσα της επιλογής σας','2020-01-13 20:58:17','2020-01-13 20:58:17'),(8,'Απ`όλα',5,5.5,'in_stock','Με ζαμπόν, μπέικον, μανιτάρια, πιπερια, gouda & σάλτσα της επιλογής σας','2020-01-13 20:58:48','2020-01-13 20:58:48'),(9,'Πικάντικη',5,5.5,'in_stock','Με καυτερή πιπεριά, ντομάτα, ζαμπόν, λουκάνικο, gouda & σάλτσα της επιλογής σας','2020-01-13 20:59:05','2020-01-13 20:59:05'),(10,'Ζαμπόν, μπέικον & λουκάνικο',5,5.5,'in_stock','Με ζαμπόν, μπέικον, λουκάνικο, gouda & σάλτσα της επιλογής σας','2020-01-13 20:59:27','2020-01-13 20:59:27'),(11,'Καρμπονάρα',5,5.5,'in_stock','Με λευκή σάλτσα, μπέικον, μανιτάρια & gouda','2020-01-13 20:59:43','2020-01-13 20:59:43'),(12,'Σεφ',5,4.5,'in_stock','Σαλάτα με μαρούλι, αγγούρι, κεφαλοτύρι, ζαμπόν, gouda, σεφ σως, ντομάτα, καλαμπόκι & αυγό','2020-01-13 21:02:19','2020-01-13 21:02:19'),(13,'Χωριάτικη',5,4.5,'in_stock','Σαλάτα με ντομάτα, αγγούρι, κρεμμύδι, ελιές, φέτα, ρίγανη, ελαιόλαδο & ξύδι','2020-01-13 21:02:36','2020-01-13 21:02:36'),(14,'Τονοσαλάτα\n',5,4.5,'in_stock','Σαλάτα με μαρούλι, αγγούρι, τόνο, ντομάτα, ελιές, κρεμμύδι, λεμόνι & λάδι','2020-01-13 21:02:52','2020-01-13 21:02:52'),(15,'Ρόκα\n',5,4.5,'in_stock','Σαλάτα με ρόκα, μαρούλι, καρύδια, ντομάτινια, σοταρισμένα μανιτάρια & παρμεζάνα','2020-01-13 21:03:07','2020-01-13 21:03:07'),(16,'Espresso',5,3,'in_stock','','2020-01-13 21:07:07','2020-01-13 21:07:07'),(17,'Freddo Espresso',5,3,'in_stock','','2020-01-13 21:07:27','2020-01-13 21:07:27'),(18,'Cappuccino',5,2,'in_stock','','2020-01-13 21:07:45','2020-01-13 21:07:45'),(19,'Frappe',5,1.5,'in_stock','','2020-01-13 21:07:54','2020-01-13 21:07:54'),(20,'Ελληνικός',5,1.5,'in_stock','','2020-01-13 21:08:02','2020-01-13 21:08:02'),(21,'Nes',5,1.5,'in_stock','','2020-01-13 21:08:08','2020-01-13 21:08:08'),(22,'Freddo espresso',5,1.5,'in_stock','','2020-01-13 21:08:17','2020-01-13 21:08:17'),(23,'Σουβλάκι χοιρινό σε σάντουιτς',2,3,'in_stock','Σάντουιτς σουβλάκι χοιρινό με τα υλικά της επιλογής σας','2020-01-13 21:12:29','2020-01-13 21:12:29'),(24,'Σουβλάκι κοτόπουλο σε σάντουιτς\n',2,3,'in_stock','Σάντουιτς σουβλάκι κοτόπουλο με τα υλικά της επιλογής σας','2020-01-13 21:12:53','2020-01-13 21:12:53'),(25,'Μπιφτέκι γεμιστό σε σάντουιτς',2,3.5,'in_stock','Σάντουιτς μπιφτέκι γεμιστό με τα υλικά της επιλογής σας','2020-01-13 21:14:02','2020-01-13 21:14:02'),(26,'Λουκάνικο χωριάτικο σε σάντουιτς',2,3,'in_stock','Σάντουιτς λουκάνικο χωριάτικο με τα υλικά της επιλογής σας','2020-01-13 21:14:24','2020-01-13 21:14:24'),(27,'Πατατόπιτα σε σάντουιτς',2,2.5,'in_stock','Σάντουιτς χωρίς κρέας με τα υλικά της επιλογής σας','2020-01-13 21:15:45','2020-01-13 21:15:45'),(28,'Burger Συκάτο',2,7.5,'in_stock','Αφρατό ψωμάκι brioche με ζουμερό 100% μοσχαρίσιο μπιφτέκι, flakes κρεμμυδιού & chips μανιταριών.','2020-01-13 21:19:13','2020-01-13 21:19:13'),(29,'Burger ιταλικό',2,7.5,'in_stock','Αφράτο ψωμάκι brioche με ζουμερό μπιφτέκι κοτόπουλο, ντομάτα & μαγιονέζα βασιλικού.','2020-01-13 21:19:54','2020-01-13 21:19:54'),(30,'Burger κλασικό',2,5,'in_stock','Αφράτο σουσαμένιο ψωμάκι με ζουμερό 100% μοσχαρίσιο μπιφτέκι','2020-01-13 21:20:15','2020-01-13 21:20:15'),(31,'Burger της κότας',2,6.5,'in_stock','Αφράτο ψωμάκι brioche με ζουμερό φιλέτο κοτόπουλο, φρέσκια ντομάτα, κρέμα τυριού.','2020-01-13 21:21:11','2020-01-13 21:21:11'),(32,'Burger Μεσογειακό\n',2,7,'in_stock','Αφράτο ψωμάκι brioche με ζουμερό 100% μοσχαρίσιο μπιφτέκι, καραμελωμένα κρεμμύδια, μανιτάρια σωτέ.','2020-01-13 21:21:33','2020-01-13 21:21:33'),(33,'Espresso',6,1.5,'in_stock','','2020-01-13 21:23:44','2020-01-13 21:23:44'),(34,'Freddo Espresso',6,2.5,'in_stock','','2020-01-13 21:23:55','2020-01-13 21:23:55'),(35,'Cappuccino',6,3,'in_stock','','2020-01-13 21:24:03','2020-01-13 21:24:03'),(36,'Frappe',6,1.5,'in_stock','','2020-01-13 21:24:11','2020-01-13 21:24:11'),(37,'Ελληνικός',6,1.5,'in_stock','','2020-01-13 21:24:15','2020-01-13 21:24:15'),(38,'Nes',6,1.5,'in_stock','','2020-01-13 21:24:24','2020-01-13 21:24:24'),(39,'Freddo espresso',6,2.5,'in_stock','','2020-01-13 21:24:34','2020-01-13 21:24:34'),(40,'Κρέπα ζυμαρικών',6,4,'in_stock','Με βίδες, κοτόπουλο, gouda, καλαμπόκι, πιπεριές & σως','2020-01-13 21:26:38','2020-01-13 21:26:38'),(41,'Κρέπα αλλά burger',6,4,'in_stock','Με μπιφτέκι ανάμεικτο από μοσχαρίσιο & χοιρινό κιμά, μπέικον, gouda, ντομάτα & αγγουρομαγιονέζα','2020-01-13 21:26:51','2020-01-13 21:26:51'),(42,'Κρέπα Bellucci',6,4.5,'in_stock','Με μακαρόνια, κοτόπουλο, μανιτάρια, λιαστή ντομάτα, φέτα & πέστο','2020-01-13 21:27:03','2020-01-13 21:27:03'),(43,'Γυροκατάσταση σε κρέπα (χοιρινό)',6,3.5,'in_stock','Με γύρο χοιρινό, πατάτες τηγανητές, ντομάτα, τυροκαυτερή, μουστάρδα, ketchup & κρεμμύδι','2020-01-13 21:27:21','2020-01-13 21:27:21'),(44,'Γυροκατάσταση σε κρέπα (κοτόπουλο)',6,3.5,'in_stock','Με γύρο κοτόπουλο, πατάτες τηγανητές, ντομάτα, μουσταρδομαγιονέζα & ketchup','2020-01-13 21:27:30','2020-01-13 21:27:30'),(45,'Κρέπα γιαννιώτικη',6,3.5,'in_stock','Με gouda, μπέικον, κοτομπουκιές, πατάτες τηγανητές, κεφαλοτύρι & ουγγαρέζα','2020-01-13 21:27:38','2020-01-13 21:27:38'),(46,'Κρέπα special',6,5,'in_stock','Με κασέρι, ζαμπόν, σαλάμι αέρος, μπέικον, σάλτσα ντομάτας, κεφαλοτύρι, μανιτάρια & πιπεριά','2020-01-13 21:27:54','2020-01-13 21:27:54'),(47,'Κρέπα hot dog',6,4.5,'in_stock','Με λουκάνικο γαλοπούλας, σως cheddar, μουστάρδα, καραμελωμένα κρεμμύδια, κασέρι & ντομάτα','2020-01-13 21:28:06','2020-01-13 21:28:06'),(48,'Κρέπα αλμυρή Zapping',4,5,'in_stock','Με gouda, cheddar, μοτσαρέλα, μπιφτέκι, πατάτες, μπέικον, ντομάτα & BBQ sauce','2020-01-13 21:31:33','2020-01-13 21:31:33'),(49,'Κρέπα κοτόπουλο',4,5,'in_stock','Με gouda, cheddar, μοτσαρέλα, μπέικον, ψητό κοτόπουλο, φρέσκο μανιτάρι, καλαμπόκι & σως κάρυ','2020-01-13 21:31:43','2020-01-13 21:31:43'),(50,'Κρέπα μεσογειακή',4,4,'in_stock','Με gouda, cheddar, μοτσαρέλα, ντομάτα, πράσινη πιπεριά, φέτα, ελιά, ρίγανη & Philadelphia','2020-01-13 21:32:02','2020-01-13 21:32:02'),(51,'Κρέπα 4 τυριά',4,3.5,'in_stock','Με gouda, cheddar, μοτσαρέλα, μπλε τυρί, μανούρι, λιαστή ντομάτα & Philadelphia','2020-01-13 21:32:15','2020-01-13 21:32:15'),(52,'Κρέπα γλυκιά Zapping',4,3.5,'in_stock','Με λευκή σοκολάτα, μπανάνα, μπισκότο, Lila pause & σιρόπι σοκολάτας','2020-01-13 21:32:51','2020-01-13 21:32:51'),(53,'Κρέπα σοκοφρέτα ΙΟΝ',4,3.5,'in_stock','Με πραλίνα σοκοφρέτα ΙΟΝ & σοκολάτα Kiss','2020-01-13 21:33:01','2020-01-13 21:33:01'),(54,'Κρέπα tricolore',4,3.5,'in_stock','Με Merenda, πραλίνα φράουλα & λευκή σοκολάτα ΙΟΝ','2020-01-13 21:33:12','2020-01-13 21:33:12'),(55,'Κρέπα Bountye',4,4.5,'in_stock','Με λευκή σοκολάτα ΙΟΝ, μπισκότο Bounty & μπισκότο Oreo','2020-01-13 21:33:27','2020-01-13 21:33:27'),(56,'Margherita',4,6.5,'in_stock','Με φρέσκια σάλτσα ντομάτας & gouda ή mozzarella','2020-01-13 21:35:51','2020-01-13 21:35:51'),(57,'4 Cheese',4,8,'in_stock','Με σάλτσα ντομάτας, gouda, mozzarella, ροκφόρ & παρμεζάνα','2020-01-13 21:36:27','2020-01-13 21:36:27'),(58,'Chicken',4,8,'in_stock','Με φρέσκια σάλτσα ντομάτας, gouda ή mozzarella, κοτόπουλο, φρέσκα μανιτάρια & πράσινη πιπεριά','2020-01-13 21:36:39','2020-01-13 21:36:39'),(59,'\nBacon delight',4,8,'in_stock','Με φρέσκια σάλτσα ντομάτας, gouda ή mozzarella, μπέικον, φρέσκα μανιτάρια & πιπεριά','2020-01-13 21:36:50','2020-01-13 21:36:50'),(60,'Ham delight',4,8,'in_stock','Με φρέσκια σάλτσα ντομάτας, gouda ή mozzarella, ζαμπόν, φρέσκα μανιτάρια & πιπεριά','2020-01-13 21:37:03','2020-01-13 21:37:03'),(61,'American pepperoni',4,8,'in_stock','Με φρέσκια σάλτσα ντομάτας, gouda ή mozzarella & πεπερόνι','2020-01-13 21:37:13','2020-01-13 21:37:13');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `stars` bit(1) NOT NULL,
  `review` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `shop_id` (`shop_id`),
  KEY `user_id` (`user_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_categories`
--

DROP TABLE IF EXISTS `shop_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `category_id` (`category_id`),
  KEY `shop_id` (`shop_id`),
  CONSTRAINT `shop_categories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `shop_categories_ibfk_2` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_categories`
--

LOCK TABLES `shop_categories` WRITE;
/*!40000 ALTER TABLE `shop_categories` DISABLE KEYS */;
INSERT INTO `shop_categories` VALUES (1,1,1),(2,2,1),(3,3,1),(7,1,4),(8,6,4),(9,6,5),(10,2,5),(11,3,5),(12,1,6),(13,2,6),(14,1,7),(15,4,7),(16,7,2),(17,5,2);
/*!40000 ALTER TABLE `shop_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shops`
--

DROP TABLE IF EXISTS `shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_name` varchar(100) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(14) NOT NULL,
  `address_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `distance` decimal(10,2) DEFAULT NULL,
  `min_order` int(11) DEFAULT NULL,
  `delivery_time` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `shops_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
INSERT INTO `shops` VALUES (1,'CabanEros','1234','caban@hotmail.gr','11111',1,'2019-12-17 06:30:37','2019-12-17 06:30:37','2019-12-17 06:30:37',10.20,5,35,'tou tasou ta kaloudia'),(2,'Γοριλάκια','1234','gorilakia@gmail.gr','69444555',2,'2020-01-13 19:46:30','2020-01-13 19:46:30','2020-01-13 19:46:30',5.60,8,45,''),(4,'Zapping','zapping','zapping@zap.gr','2310321456',4,'2020-01-13 19:48:57','2020-01-13 19:48:57','2020-01-13 19:48:57',4.00,5,30,''),(5,'Espania Pizza','espania','espanio@zap.gr','231489692',5,'2020-01-13 19:48:57','2020-01-13 19:48:57','2020-01-13 19:48:57',4.60,5,30,''),(6,'Baristart','baristart','baristart@bar.gr','2310555666',6,'2020-01-13 19:50:14','2020-01-13 19:50:14','2020-01-13 19:50:14',7.00,10,50,''),(7,'Το μικρό Παρίσι','parisi','parisi@gmail.gr','69785621',7,'2020-01-13 19:51:08','2020-01-13 19:51:08','2020-01-13 19:51:08',1.20,5,75,'');
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(14) NOT NULL,
  `doorbell_name` varchar(30) DEFAULT NULL,
  `date_of_birth` varchar(100) NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `users_ibfk_1` (`address_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ερωτόκριτος','Αβραμίδης','1','eros@hotmail.gr','3294873290487','1111','1/1/0001 12:00:00 πμ',1,'2019-12-15 21:37:28','2019-12-15 21:46:44','2019-12-15 21:37:28'),(3,'Κίτσος','Leptos','1','takata@hotmail.gr','','','',NULL,'2020-01-13 22:26:37','2020-01-13 22:26:37','2020-01-13 22:26:37'),(4,'Trelos','Paparas','1','trelos@hotmail.gr','','','',11,'2020-01-13 22:39:31','2020-01-13 22:39:31','2020-01-13 22:39:31'),(5,'Trelos','Paparas','1','trelos@hotmail.gr','','','',12,'2020-01-13 22:39:33','2020-01-13 22:39:33','2020-01-13 22:39:33'),(6,'Markos','Mpotsaris','1','a@hotmail.gr','','','',13,'2020-01-13 22:40:58','2020-01-13 22:40:58','2020-01-13 22:40:58'),(7,'Κίτσος','Leptos','1','takata@hotmail.gr','','','',14,'2020-01-13 22:41:31','2020-01-13 22:41:31','2020-01-13 22:41:31'),(8,'Κίτσος','Leptos','1','takata@hotmail.gr','','','',15,'2020-01-13 22:42:40','2020-01-13 22:42:40','2020-01-13 22:42:40'),(9,'Markos','Mpotsaris','1','a@hotmail.gr','','','',16,'2020-01-13 22:42:44','2020-01-13 22:42:44','2020-01-13 22:42:44'),(10,'Κίτσος','','giats','giats@gmail.com','','','',17,'2020-01-13 23:12:38','2020-01-13 23:12:38','2020-01-13 23:12:38');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-14  1:20:59
