-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2022 at 12:39 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bmdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `name`, `description`, `url`) VALUES
(1, ' Get a price..', 'IF at all the website asks what our budget is, play dumb. Get them to make the first move and give a price. You can say something like “I’m not head of this department, can you tell me how much guest posts are and I’ll check with them”', 'https://www.shutterstock.com/image-photo/man-changes-position-block-symbols-260nw-1493648954.jpg'),
(2, 'Negotiate', 'They might come back and say $80 for a guest post. At this point we play the ‘pity party’ approach and let them know we simply can’t afford it. I’d love to make it happen but my manager won’t agree, as we’ve been paying a lot less lately. However, take a ', 'https://myvistage.com/hub/wp-content/uploads/sites/4/2011/12/negotiation-strategies.jpeg'),
(3, 'Close the Deal', 'As soon as they agree to a link insertion offer - we go aggressive on them. Ask them for their PayPal address and tell them we’ll pay within the next few hours. Note: At this stage you HAVE NOT yet revealed what site they’ll be linking to. We always negot', 'https://smallbizclub.com/wp-content/uploads/2013/08/2da7e6c037342f54c10e77c0d3e4a775.jpg'),
(6, ' Get a price', 'Recent data from Facebook finds that 56% of shoppers would rather send instant messages than call a support line. If your customers can\'t quickly receive an answer to their question about your product or service, they might rather bounce than pick up the ', 'https://www.shutterstock.com/image-photo/man-changes-position-block-symbols-260nw-1493648954.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
