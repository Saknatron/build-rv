-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2023 at 11:33 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_testla`
--

-- --------------------------------------------------------

--
-- Table structure for table `car_price`
--

CREATE TABLE `car_price` (
  `ID` int(11) NOT NULL,
  `Car` varchar(255) NOT NULL,
  `Normal` varchar(255) NOT NULL,
  `Long Range` varchar(255) NOT NULL,
  `Performance` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_price`
--

INSERT INTO `car_price` (`ID`, `Car`, `Normal`, `Long Range`, `Performance`) VALUES
(1, 'Purchase Price', '40240', '47240', '53240'),
(2, 'Potential Savings', '25940', '35940', '46440');

-- --------------------------------------------------------

--
-- Table structure for table `paint_cost`
--

CREATE TABLE `paint_cost` (
  `ID` int(11) NOT NULL,
  `Color` varchar(255) NOT NULL,
  `Cost` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `paint_cost`
--

INSERT INTO `paint_cost` (`ID`, `Color`, `Cost`) VALUES
(1, 'Midnight Silver Metallic', '0'),
(2, 'Pearl White Multi-Coat', '1000'),
(3, 'Deep Blue Metallic', '1000'),
(4, 'Solid Black', '1500'),
(5, 'Red Multi-Coat', '2000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car_price`
--
ALTER TABLE `car_price`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `paint_cost`
--
ALTER TABLE `paint_cost`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car_price`
--
ALTER TABLE `car_price`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `paint_cost`
--
ALTER TABLE `paint_cost`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
