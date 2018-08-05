-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 05, 2018 at 07:42 PM
-- Server version: 5.5.57-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `purchase_a_politician`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adminId` tinyint(4) NOT NULL,
  `firstName` varchar(25) NOT NULL,
  `lastName` varchar(25) NOT NULL,
  `username` varchar(8) NOT NULL,
  `password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`adminId`, `firstName`, `lastName`, `username`, `password`) VALUES
(1, 'Admin', 'admin', 'admin', '25ab86bed149ca6ca9c1c0d5db7c9a91388ddeab');

-- --------------------------------------------------------

--
-- Table structure for table `party_affiliation`
--

CREATE TABLE `party_affiliation` (
  `partyId` int(11) NOT NULL,
  `party` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party_affiliation`
--

INSERT INTO `party_affiliation` (`partyId`, `party`) VALUES
(1, 'D'),
(2, 'R'),
(3, 'I');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `purchaseId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `senId` int(11) NOT NULL,
  `purchaseCost` float NOT NULL,
  `purchaseDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `senators`
--

CREATE TABLE `senators` (
  `senId` int(11) NOT NULL,
  `sen_firstName` varchar(25) NOT NULL,
  `sen_lastName` varchar(25) NOT NULL,
  `state` char(2) NOT NULL,
  `partyId` int(11) NOT NULL,
  `imgURL` varchar(25) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `senators`
--

INSERT INTO `senators` (`senId`, `sen_firstName`, `sen_lastName`, `state`, `partyId`, `imgURL`, `price`) VALUES
(1, 'John', 'McCain', 'AZ', 2, 'JMcCain', 2554780),
(2, 'Roy', 'Blunt', 'MO', 2, 'RBlunt', 1283420),
(3, 'Mitch', 'McConnell', 'KY', 2, 'MMcConnell', 1119160),
(4, 'John', 'Thune', 'SD', 2, 'JThune', 928428),
(5, 'Richard', 'Burr', 'NC', 2, 'RBurr', 733127),
(6, 'Chuck', 'Grassley', 'IA', 2, 'CGrassley', 727219),
(7, 'Roger', 'Wicker', 'MS', 2, 'RWicker', 724850),
(8, 'Ted', 'Cruz', 'TX', 2, 'TCruz', 322505),
(9, 'Susan', 'Collins', 'ME', 2, 'SCollins', 275520),
(10, 'Paul', 'Rand', 'KY', 2, 'PRand', 116278),
(11, 'John', 'Kennedy', 'LA', 2, 'JKennedy', 56950),
(12, 'Bernie', 'Sanders', 'VT', 3, 'BSanders', 294923),
(13, 'Robert', 'Menendez', 'NJ', 1, 'RMenendez', 729757),
(14, 'Dianne', 'Feinstein', 'CA', 1, 'DFeinstein', 402539),
(15, 'Kamala', 'Harris', 'CA', 1, 'KHarris', 53696),
(16, 'Ed', 'Markey', 'MA', 1, 'EMarkey', 294923),
(17, 'Bill', 'Nelson', 'FL', 1, 'BNelson', 1028790);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `sex` char(1) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `firstName`, `lastName`, `sex`, `email`) VALUES
(1, 'Bruce', 'Wayne', 'M', 'bwayne@gmail.com'),
(2, 'Diana', 'Prince', 'F', 'dprince@aol.com'),
(3, 'Oliver', 'Queen', 'M', 'oqueen@yahoo.com'),
(4, 'Clark', 'Kent', 'M', 'ckent@apple.com'),
(5, 'Barbara', 'Gordon', 'F', 'bgordon@yahoo.com'),
(6, 'Barry', 'Allen', 'M', 'ballen@apple.com'),
(7, 'Dick', 'Grayson', 'M', 'dgrayson@gmail.com'),
(8, 'Selina', 'Kyle', 'F', 'skyle@gmail.com'),
(9, 'Hal', 'Jordan', 'M', 'hjordan@gmail.com'),
(10, 'Arthur', 'Curry', 'M', 'acurry@aol.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminId`);

--
-- Indexes for table `party_affiliation`
--
ALTER TABLE `party_affiliation`
  ADD PRIMARY KEY (`partyId`),
  ADD KEY `partyId` (`partyId`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`purchaseId`);

--
-- Indexes for table `senators`
--
ALTER TABLE `senators`
  ADD PRIMARY KEY (`senId`),
  ADD KEY `partyId` (`partyId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `adminId` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `party_affiliation`
--
ALTER TABLE `party_affiliation`
  MODIFY `partyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `purchaseId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `senators`
--
ALTER TABLE `senators`
  MODIFY `senId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `senators`
--
ALTER TABLE `senators`
  ADD CONSTRAINT `senators_ibfk_1` FOREIGN KEY (`partyId`) REFERENCES `party_affiliation` (`partyId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
