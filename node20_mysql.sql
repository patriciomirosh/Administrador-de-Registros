-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2020 a las 01:19:14
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `node20_mysql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admper`
--

CREATE TABLE `admper` (
  `ID` int(12) NOT NULL,
  `Concepto` text NOT NULL,
  `Monto` double NOT NULL,
  `Fecha` date NOT NULL,
  `Tipo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admper`
--

INSERT INTO `admper` (`ID`, `Concepto`, `Monto`, `Fecha`, `Tipo`) VALUES
(7, 'Alquiler varios', 2500, '2020-12-08', 'in'),
(14, 'Alquiler varios', 2500, '2020-12-08', 'in'),
(15, 'Alquiler varios', 2500, '2020-12-08', 'in'),
(16, 'Internet', 2500, '2020-12-02', 'eg'),
(17, 'Internet', 2500, '2020-12-02', 'eg'),
(18, 'patricio', 244, '2020-12-15', 'in'),
(19, 'Alquiler', 10000, '2020-12-11', 'in'),
(20, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(21, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(22, 'Inversiones', 35000, '0000-00-00', 'eg'),
(23, 'Inversiones', 1200, '0000-00-00', 'eg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admper`
--
ALTER TABLE `admper`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admper`
--
ALTER TABLE `admper`
  MODIFY `ID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
