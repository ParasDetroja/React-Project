-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2022 at 04:44 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'Category', 0, '2022-01-31 22:54:08', '2022-01-31 22:54:08'),
(27, 'PHP', 1, '2022-02-01 15:28:45', '2022-02-01 15:28:45'),
(28, 'Laravel', 27, '2022-02-01 15:29:45', '2022-02-01 15:29:45'),
(29, 'Codignator', 27, '2022-02-01 15:30:00', '2022-02-01 15:30:00'),
(30, 'Laravel4', 28, '2022-02-01 15:30:17', '2022-02-01 15:30:17'),
(31, 'Laravel 5', 28, '2022-02-01 15:30:25', '2022-02-01 15:30:25'),
(32, 'Javascript', 1, '2022-02-01 15:30:56', '2022-02-01 15:30:56'),
(33, 'Angular', 32, '2022-02-01 15:31:40', '2022-02-01 15:31:40'),
(34, 'Angular 2', 33, '2022-02-01 15:31:45', '2022-02-01 15:31:45'),
(35, 'Angular 2.1', 34, '2022-02-01 15:31:53', '2022-02-01 15:31:53'),
(37, 'Angular 2.2', 35, '2022-02-01 15:32:11', '2022-02-01 15:32:11'),
(38, 'Angular JS', 33, '2022-02-01 15:32:40', '2022-02-01 15:32:40'),
(39, 'Vue', 32, '2022-02-01 15:33:02', '2022-02-01 15:33:02'),
(41, 'JAVA', 1, '2022-02-01 15:33:32', '2022-02-01 15:33:32'),
(42, 'C', 1, '2022-02-01 15:33:39', '2022-02-01 15:33:39'),
(43, 'C++', 42, '2022-02-01 15:33:47', '2022-02-01 15:33:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
