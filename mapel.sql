-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2022 at 05:08 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `datamapel`
--

-- --------------------------------------------------------

--
-- Table structure for table `mapel`
--

CREATE TABLE `mapel` (
  `id` int(4) NOT NULL,
  `mata_pelajaran` varchar(50) NOT NULL,
  `kelas` varchar(20) NOT NULL,
  `jurusan` varchar(6) NOT NULL,
  `tipe_kelas` varchar(1) NOT NULL,
  `nama_guru` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mapel`
--

INSERT INTO `mapel` (`id`, `mata_pelajaran`, `kelas`, `jurusan`, `tipe_kelas`, `nama_guru`) VALUES
(1, 'Sejarah Indonesia', '9', 'IPS', 'A', 'Nur Sulistiawati S.Pd'),
(2, 'Sejarah Indonesia', '9', 'IPS', 'B', 'Henry Kurniawan, S.Pd'),
(3, 'Geografi', '9', 'IPS', 'A', 'Winda Putri, S.Pd, M.T'),
(4, 'Geografi', '9', 'IPS', 'B', 'Bomba Sertya, S.Pd, M.Pd'),
(5, 'Bahasa Jerman', '11', 'Bahasa', 'A', 'Rizka Widya, S.T, M.Pd'),
(6, 'Bahasa Jerman', '11', 'Bahasa', 'B', 'Rizki Febian, S.P.d'),
(7, 'Kimia', '12', 'IPA', 'A', 'Rangga Novianto, S.T'),
(8, 'Fisika', '12', 'IPA', 'A', 'Fiorentina Amanda, S.T, S.Pd'),
(9, 'Bahasa Inggris', '12', 'IPA', 'A', 'Nanda Khoiriyah, S.Pd'),
(10, 'Bahasa Inggris', '12', 'IPA', 'B', 'Dewi Nuril Afifi, S.Pd, M.Pd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mapel`
--
ALTER TABLE `mapel`
  ADD PRIMARY KEY (`id`);
COMMIT;
