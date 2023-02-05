-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2023 at 07:47 AM
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
-- Database: `pdam-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_survey`
--

CREATE TABLE `data_survey` (
  `id` int(11) NOT NULL,
  `jenis` text NOT NULL,
  `ulasan` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_survey`
--

INSERT INTO `data_survey` (`id`, `jenis`, `ulasan`, `created`) VALUES
(1, 'Pilih alasannya disini ya', 'sdsdsdsdsd', '2023-01-30 17:00:00'),
(2, 'Pilih alasannya disini ya', 'iki isi ng form e', '2023-01-30 17:00:00'),
(3, 'Pilih alasannya disini ya', 'iki isi form e', '2023-01-30 17:00:00'),
(4, 'Pilih alasannya disini ya', 'aobnaisdnacsdcav', '2023-01-30 17:00:00'),
(5, 'Pilih alasannya disini ya', 'awzsedrxfctgyvhbujknlm', '2023-01-30 17:00:00'),
(6, 'Prosedurnya', 'Lorem ipsum dolor sit amet', '2023-01-30 17:00:00'),
(7, 'Suasananya', 'Ademmm', '2023-01-30 17:00:00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
