-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2020 a las 00:14:32
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
-- Estructura de tabla para la tabla `admelani`
--

CREATE TABLE `admelani` (
  `ID` int(11) NOT NULL,
  `Concepto` varchar(50) NOT NULL,
  `Monto` float NOT NULL,
  `Fecha` date NOT NULL,
  `Tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admelani`
--

INSERT INTO `admelani` (`ID`, `Concepto`, `Monto`, `Fecha`, `Tipo`) VALUES
(1, 'Primera entrada', 1, '2020-10-10', 'in');

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
(17, 'Internet', 2500, '2020-12-02', 'eg'),
(18, 'patricio', 244, '2020-12-15', 'in'),
(19, 'Alquiler', 10000, '2020-12-11', 'in'),
(20, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(21, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(22, 'Inversiones', 35000, '0000-00-00', 'eg'),
(23, 'Inversiones', 1200, '0000-00-00', 'eg'),
(24, 'Alquiler', 25000, '2021-01-21', 'in'),
(25, 'Alquimia', 4000, '2020-12-16', 'in'),
(26, 'Alquiler varios', 241, '2020-11-30', 'in');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adpatricio`
--

CREATE TABLE `adpatricio` (
  `ID` int(11) NOT NULL,
  `Concepto` varchar(50) NOT NULL,
  `Monto` float NOT NULL,
  `Fecha` date NOT NULL,
  `Tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `adpatricio`
--

INSERT INTO `adpatricio` (`ID`, `Concepto`, `Monto`, `Fecha`, `Tipo`) VALUES
(2, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(3, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(4, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(5, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(6, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(8, 'undefined', 0, '0000-00-00', 'in'),
(9, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(10, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(11, 'UltimoBalance', 1500, '0000-00-00', 'in'),
(12, 'UltimoBalance', 1500, '2020-10-12', 'in'),
(13, 'UltimoBalance', 1500, '2020-10-12', 'in'),
(14, 'UltimoBalance', 1500, '2020-10-12', 'in'),
(15, 'UltimoBalance', 1500, '2020-10-12', 'in'),
(16, 'Alquimia', 85555, '2020-12-23', 'eg'),
(17, 'Alquimia', 23333, '2020-12-16', 'in');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tableregister`
--

CREATE TABLE `tableregister` (
  `ID` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Mail` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tableregister`
--

INSERT INTO `tableregister` (`ID`, `Username`, `Mail`, `Password`) VALUES
(5, 'patricio', 'pato.16.pp@gmail.com', 'patricio16'),
(13, 'mper', 'mirospatricio@gmail.com', 'pato'),
(14, 'Melani', 'melu16@gmail.com', '12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admelani`
--
ALTER TABLE `admelani`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `admper`
--
ALTER TABLE `admper`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `adpatricio`
--
ALTER TABLE `adpatricio`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `tableregister`
--
ALTER TABLE `tableregister`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admelani`
--
ALTER TABLE `admelani`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `admper`
--
ALTER TABLE `admper`
  MODIFY `ID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `adpatricio`
--
ALTER TABLE `adpatricio`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tableregister`
--
ALTER TABLE `tableregister`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
