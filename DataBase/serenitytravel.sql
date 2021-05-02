-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 02 mai 2021 à 04:06
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `serenitytravel`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `username` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`username`, `phone`, `email`, `password`) VALUES
('d dc bfr ', 'bfbf', 'fbfbbffbffbfb', ''),
('string', 'string', 'string', 'string'),
('${username}', '${phone}', '${email}', '${password}'),
('${username}', '${phone}', '${email}', '${password}'),
('${username}', '${phone}', '${email}', '${password}'),
('${username}', '${phone}', '${email}', '${password}'),
('${username}', '${phone}', '${email}', '${password}'),
('${username}', '${phone}', '${email}', '${password}'),
('${username}', '${phone}', '${email}', '${password}'),
('${username}', '${phone}', '${email}', '${password}'),
('${username}', '${phone}', '${email}', '${password}'),
('aziz ajmi', '93198+41', 'test@gmail.com', '56+189+7+18'),
('bo77', '69416462', 'test@gmail.com', '926976067+9526479'),
('aziz ajmi', '26636946', 'test@gmail.com', '123456789'),
('string', 'string', 'string', 'string'),
('youseef', '23636486', 'test@gmail.com', '92649232947326974'),
('string', 'string', 'string', 'string'),
('string', 'string', 'string', 'string'),
('kldnvdon', '81621976', 'test@gmail.com', '95230297961679');

-- --------------------------------------------------------

--
-- Structure de la table `reservationhotel`
--

CREATE TABLE `reservationhotel` (
  `Username` varchar(20) NOT NULL,
  `Country` varchar(20) NOT NULL,
  `Hotel` varchar(20) NOT NULL,
  `Check_In` date NOT NULL,
  `Check_out` date NOT NULL,
  `Rooms` int(11) NOT NULL,
  `Adults` int(11) NOT NULL,
  `Children` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reservationhotel`
--

INSERT INTO `reservationhotel` (`Username`, `Country`, `Hotel`, `Check_In`, `Check_out`, `Rooms`, `Adults`, `Children`) VALUES
('aziz', 'Spain', 'Robinson Club', '2021-05-19', '2021-05-20', 3, 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `reservationvol`
--

CREATE TABLE `reservationvol` (
  `Departure` varchar(20) NOT NULL,
  `Arrive` varchar(20) NOT NULL,
  `Date_of_Depart` date NOT NULL,
  `Date_of_arival` date NOT NULL,
  `Categorie` varchar(30) NOT NULL,
  `adults` int(11) NOT NULL,
  `children` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reservationvol`
--

INSERT INTO `reservationvol` (`Departure`, `Arrive`, `Date_of_Depart`, `Date_of_arival`, `Categorie`, `adults`, `children`) VALUES
('string', 'string', '0000-00-00', '0000-00-00', 'string', 0, 0),
('string', 'string', '0000-00-00', '0000-00-00', 'string', 0, 0),
('string', 'string', '0000-00-00', '0000-00-00', 'string', 0, 0),
('string', 'string', '0000-00-00', '0000-00-00', 'string', 0, 0),
('string', 'string', '2021-05-01', '2021-05-01', 'string', 0, 0),
('string', 'string', '2021-05-01', '2021-05-01', 'string', 0, 0),
('string', 'string', '2021-05-01', '2021-05-01', 'string', 0, 0),
('tunis', 'rio', '2021-05-13', '2021-05-16', 'premium', 2, 1),
('string', 'string', '2021-05-01', '2021-05-01', 'string', 0, 0),
('string', 'string', '2021-05-02', '2021-05-02', 'string', 0, 0),
('istanbul', 'rio', '2021-05-14', '2021-05-13', 'premium', 2, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
