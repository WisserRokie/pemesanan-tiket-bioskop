-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Apr 2024 pada 02.04
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pemesanan-tikbios`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bookings`
--

CREATE TABLE `bookings` (
  `id_booking` int(20) NOT NULL,
  `screening_id` int(20) DEFAULT NULL,
  `user_id` int(20) DEFAULT NULL,
  `nama_pemesan` varchar(255) DEFAULT NULL,
  `nomor_kursi` varchar(10) DEFAULT NULL,
  `jumlah_tiket` int(10) DEFAULT NULL,
  `total_bayar` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `bookings`
--

INSERT INTO `bookings` (`id_booking`, `screening_id`, `user_id`, `nama_pemesan`, `nomor_kursi`, `jumlah_tiket`, `total_bayar`) VALUES
(0, 2024040118, 11213142, 'Permana', 'C5', 1, 20.80),
(1, 2024040112, 11203040, 'Yongky Permana', 'A1', 2, 25.00),
(2, 2024040115, 11213141, 'Putra Permana', 'B3', 1, 12.50);

-- --------------------------------------------------------

--
-- Struktur dari tabel `films`
--

CREATE TABLE `films` (
  `id_film` int(10) NOT NULL,
  `title` varchar(60) DEFAULT NULL,
  `gendre` varchar(60) DEFAULT NULL,
  `duration` int(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `films`
--

INSERT INTO `films` (`id_film`, `title`, `gendre`, `duration`) VALUES
(20240401, 'pengabdi setan', 'horor', 120),
(20240402, 'last twilight', 'romantis', 150),
(0, 'jumanji', 'undefined', 130),
(0, 'jumanji', 'fantasi', 130);

-- --------------------------------------------------------

--
-- Struktur dari tabel `jadwal_tayang`
--

CREATE TABLE `jadwal_tayang` (
  `id_tayang` int(10) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `location` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `jadwal_tayang`
--

INSERT INTO `jadwal_tayang` (`id_tayang`, `name`, `location`) VALUES
(2024040112, 'mall bumi kedaton', 'kedaton'),
(2024040215, 'central plaza', 'enggal'),
(0, 'transmart', 'way halim');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemesanan_tiket`
--

CREATE TABLE `pemesanan_tiket` (
  `id_tiket` int(15) NOT NULL,
  `film_id` int(10) DEFAULT NULL,
  `cinema_id` int(8) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pemesanan_tiket`
--

INSERT INTO `pemesanan_tiket` (`id_tiket`, `film_id`, `cinema_id`, `date`, `time`) VALUES
(2024040001, 112030, 1, '2024-04-01', '12:00:00'),
(2024040002, 112131, 3, '2024-04-02', '15:00:00'),
(0, 112232, 4, '2024-04-02', '17:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(10) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_user`, `username`, `email`, `role`, `created_at`) VALUES
(11203040, 'yongky permana', 'yongky@gmail.com', 'user', '2024-03-31 23:15:27'),
(11213141, 'putra permana', 'putra@gmail.com', 'user', '2024-03-31 23:15:27'),
(0, 'permana', 'permana@gmail.com', 'user', '2024-04-01 00:02:43');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id_booking`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
