-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2023 at 09:06 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pdam-db-1`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_survey`
--

CREATE TABLE `data_survey` (
  `id` int(11) NOT NULL,
  `no_pel` varchar(30) NOT NULL,
  `jenis` text NOT NULL,
  `ulasan` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_survey`
--

INSERT INTO `data_survey` (`id`, `no_pel`, `jenis`, `ulasan`, `created`) VALUES
(1, '11111111111111', 'Prosedurnya', 'Lorem ipsum dummy text', '2023-02-06 07:11:51'),
(2, '222222222222', 'Pelayanannya', 'Lorem ipsum dummy text', '2023-02-06 13:20:16'),
(3, '3333333', 'Suasananya', 'Lorem ipsum dummy text', '2023-02-06 13:24:52'),
(4, '444444444444444444444444444444', 'Prosedurnya', 'Lorem ipsum dummy etxt', '2023-02-06 13:27:45'),
(5, '5555555555555', 'Pelayanannya', 'Lorem ipsum dummy etxt', '2023-02-06 13:36:22'),
(6, '6666666666666666666', 'Staffnya', 'Lorem ipsum', '2023-02-06 13:36:56'),
(7, '777777777', 'Suasananya', 'Lorem ipsum', '2023-02-06 13:37:51'),
(8, '888888888888888', 'Suasananya', 'Lorem ipsum duumy text', '2023-02-06 13:44:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_survey`
--
ALTER TABLE `data_survey`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_survey`
--
ALTER TABLE `data_survey`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
