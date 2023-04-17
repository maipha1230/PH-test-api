-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2023 at 04:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ph-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2b$10$ilwWQFJxIax49ARHxhkNJenup0O1QO5xxa0Uwv3/ywQxGzXTYhIS.', '2023-04-10 08:05:54', '2023-04-12 17:40:36');

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `bank_id` int(11) NOT NULL,
  `bank_name_th` varchar(255) NOT NULL,
  `bank_name_en` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`bank_id`, `bank_name_th`, `bank_name_en`) VALUES
(1, 'ไม่ระบุ', 'undefined'),
(2, 'ไทยพาณิชย์', 'SCB'),
(3, 'กรุงไทย', 'KTB'),
(8, 'กสิกรไทย', 'KBANK'),
(9, 'กรุงศรี', 'KrungSri');

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `hospital_id` int(11) NOT NULL,
  `hospital_code` varchar(255) NOT NULL,
  `hospital_name_th` varchar(255) NOT NULL,
  `hospital_name_en` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`hospital_id`, `hospital_code`, `hospital_name_th`, `hospital_name_en`, `created_at`, `updated_at`) VALUES
(1, '00001', 'โรงพยาบาลพริ้นซ์ สุวรรณภูมิ', 'PRINC HOSPITAL SUVARNABHUMI', '2023-04-10 10:49:13', '2023-04-10 23:21:06'),
(2, '00002', 'โรงพยาบาลพิษณุเวช พิจิตร', 'PITSANUVEJ PHICHIT HISPITAL', '2023-04-10 10:49:20', '2023-04-10 23:22:28'),
(3, '00003', 'โรงพยาบาลพริ้นซ์ ปากน้ำโพ', 'PRINC HOSPITAL PAKNAMPO', '2023-04-10 11:19:12', '2023-04-10 23:24:37'),
(4, '00004', 'โรงพยาบาลศิริเวช ลำพูน', 'Sirivej Lamphun Hospital by Principal Healthcare Company', '2023-04-10 11:19:15', '2023-04-10 23:26:12'),
(5, '00005', 'โรงพยาบาลพิษณุเวช อุตรดิตถ์', 'PITSANUVEJ UTTARADIT HOSPITAL', '2023-04-10 11:19:17', '2023-04-10 23:27:15'),
(7, '00006', 'โรงพยาบาลพริ้นซ์ อุทัยธานี', 'PRINC HOSPITAL UTHAI THANI', '2023-04-10 23:28:50', '2023-04-10 23:28:50'),
(8, '00007', 'โรงพยาบาลพิษณุเวช', 'PITSANUVEJ HOSPITAL', '2023-04-10 23:29:46', '2023-04-10 23:29:46'),
(9, '00008', 'โรงพยาบาลวิรัชศิลป์', 'Virajsilp Hospital', '2023-04-10 23:30:43', '2023-04-10 23:30:43');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_code` varchar(255) NOT NULL,
  `user_firstname_th` varchar(255) NOT NULL,
  `user_lastname_th` varchar(255) NOT NULL,
  `user_firstname_en` varchar(255) NOT NULL,
  `user_lastname_en` varchar(255) NOT NULL,
  `user_status` int(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_code`, `user_firstname_th`, `user_lastname_th`, `user_firstname_en`, `user_lastname_en`, `user_status`, `created_at`, `updated_at`) VALUES
(1, '000001', 'ปฐมพงษ์', 'สีพลแสน', 'Phathonpong', 'Seeponsan', 1, '2023-04-10 09:08:31', '2023-04-16 02:40:54'),
(2, '000002', 'ปฐมพงษ์', 'สีพลแสน', 'phathompong', 'seeponsan', 1, '2023-04-10 09:08:46', '2023-04-11 04:49:05'),
(7, '000003', 'ปฐมพงษ์', 'สีพลแสน', 'phathompong', 'seeponsan', 1, '2023-04-10 10:24:37', '2023-04-11 05:07:03'),
(8, '000004', 'ปฐมพงษ์', 'สีพลแสน', 'phathompong', 'seeponsan', 1, '2023-04-10 10:24:48', '2023-04-10 10:24:48'),
(9, '000005', 'ปฐมพงษ์', 'สีพลแสน', 'phathompong', 'seeponsan', 1, '2023-04-10 10:24:51', '2023-04-10 10:24:51'),
(12, '000006', 'ธนพงศ์', 'ลิม', 'Thanapong', 'Lim', 1, '2023-04-14 17:01:28', '2023-04-14 17:01:28');

-- --------------------------------------------------------

--
-- Table structure for table `user_bank`
--

CREATE TABLE `user_bank` (
  `user_bank_id` int(11) NOT NULL,
  `bank_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_bank_code` varchar(255) NOT NULL,
  `user_bank_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_bank`
--

INSERT INTO `user_bank` (`user_bank_id`, `bank_id`, `user_id`, `user_bank_code`, `user_bank_name`) VALUES
(1, 8, 1, '5312544198', 'ปฐมพงษ์ สีพลแสน'),
(3, 2, 1, '0638970954', 'ปฐมพงษ์ สีพลแสน'),
(4, 3, 2, '9999999999', 'wadawdwd'),
(6, 2, 7, '908897789', 'phathompong seeponsan'),
(9, 3, 1, '908897789', 'ปฐมพงษ์ สีพลแสน');

-- --------------------------------------------------------

--
-- Table structure for table `user_hospital`
--

CREATE TABLE `user_hospital` (
  `user_hospital_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `hospital_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_hospital`
--

INSERT INTO `user_hospital` (`user_hospital_id`, `user_id`, `hospital_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(5, 9, 3),
(6, 1, 7),
(8, 2, 1),
(9, 2, 3),
(11, 8, 5),
(12, 8, 8),
(13, 8, 1),
(14, 7, 3),
(15, 7, 5),
(16, 7, 8),
(17, 9, 9),
(18, 7, 1),
(19, 9, 1),
(20, 1, 9),
(22, 2, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`bank_id`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`hospital_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_code` (`user_code`);

--
-- Indexes for table `user_bank`
--
ALTER TABLE `user_bank`
  ADD PRIMARY KEY (`user_bank_id`),
  ADD KEY `bank_id` (`bank_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user_hospital`
--
ALTER TABLE `user_hospital`
  ADD PRIMARY KEY (`user_hospital_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `hospital_id` (`hospital_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `bank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hospital`
--
ALTER TABLE `hospital`
  MODIFY `hospital_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_bank`
--
ALTER TABLE `user_bank`
  MODIFY `user_bank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_hospital`
--
ALTER TABLE `user_hospital`
  MODIFY `user_hospital_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_bank`
--
ALTER TABLE `user_bank`
  ADD CONSTRAINT `user_bank_ibfk_1` FOREIGN KEY (`bank_id`) REFERENCES `bank` (`bank_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_bank_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_hospital`
--
ALTER TABLE `user_hospital`
  ADD CONSTRAINT `user_hospital_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_hospital_ibfk_2` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`hospital_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
