-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-03 03:38:31
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `h5_1903_zj`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `num` int(10) NOT NULL,
  `pic` varchar(200) NOT NULL,
  `details` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(1, '65英寸OLED电视', '21997.00', 323, '[{"title":"small","src":"../images/W020190228553362583588 .jpg"}]', '开机物联电视 关机只能音箱'),
(2, '65英寸AI无边全面屏', '4999.00', 561, '[{"title":"small","src":"../images/W020190506370575211142.jpg"}]', '3+32G超大存储 速度快'),
(3, '75英寸 金属纤薄巨幕影院', '6999.00', 861, '[{"title":"small","src":"../images/W020190301566090990611_160.jpg"}]', '超大视野 沉浸观影'),
(4, '55英寸 AI全面屏 金属超薄', '2799.00', 2321, '[{"title":"small","src":"../images/W020181024545541361166.jpg"}]', '薄如iponeX 坐挂都好看'),
(5, '55英寸AI人工智能电视', '7597.00', 261, '[{"title":"small","src":"../images/W020180419603138768444.jpg"}]', '水晶悬浮屏 AI3.0'),
(6, '55英寸三面无边全面屏', '3499.00', 622, '[{"title":"small","src":"../images/W020181024546264009264.jpg"}]', '无边曲面 影院临场感'),
(7, '50英寸超薄人工智能', '5997.00', 461, '[{"title":"small","src":"../images/W020171001457592018510.jpg"}]', '远场语音 声纹识别 杜比视界'),
(8, '高亮4K激光影院', '69997.00', 152, '[{"title":"small","src":"../images/W020181105695257052696.jpg"}]', '私人巨幕 缤纷视界');

-- --------------------------------------------------------

--
-- 表的结构 `project_users`
--

CREATE TABLE `project_users` (
  `id` int(10) NOT NULL,
  `uname` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `project_users`
--

INSERT INTO `project_users` (`id`, `uname`, `pwd`) VALUES
(49, '15555555555', 'magic228069'),
(48, '13333333333', 'dsdhhfd'),
(47, '16666666666', 'dudfhdifhid'),
(33, '18888888888', 'sudsgdfgdh');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `user_pwd` varchar(20) NOT NULL,
  `user_sex` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_pwd`, `user_sex`) VALUES
(10048, 'wenjiu ', 'wenjiu123@163.com', 'wenjiu123', 0),
(10047, 'songba', 'songba123@163.com', 'sangba123', 1),
(10046, 'tangqi', 'tangqi123@163.com', 'tangqi123', 1),
(10045, 'zhaoliu', 'zhangsan123@163.com', 'zhaoliu123', 1),
(10041, 'gfdgfd', 'tangqi123@163.com', 'gdgdgsd', 1),
(10042, 'zhangsan', 'zhangsan123@163.com', 'zhangsan123', 1),
(10043, 'lisi', 'lisi123@163.com', 'lisi123', 1),
(10044, 'wangwu', 'wangwu123@163.com', 'wangwu123', 1),
(10037, 'rdyft', 'xiugai', '1216166', 1),
(10040, 'fdgfdg ', '修改', '53565', 1),
(10039, 'jgfcjcgj', '987986923@qq.com', '14252', 1),
(10049, 'ouyangshi', 'ouyang123@163.com', 'ouyangshi123', 2);

-- --------------------------------------------------------

--
-- 表的结构 `wq_list`
--

CREATE TABLE `wq_list` (
  `id` int(10) NOT NULL,
  `title` int(200) NOT NULL,
  `details` int(200) NOT NULL,
  `idea` int(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `wq_list`
--

INSERT INTO `wq_list` (`id`, `title`, `details`, `idea`) VALUES
(1, 5635, 5, 5445),
(2, 243, 353, 3535),
(3, 23, 3535, 3535),
(4, 3535, 3535, 353),
(5, 3535, 3535, 353),
(6, 242, 242, 2424);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_users`
--
ALTER TABLE `project_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `wq_list`
--
ALTER TABLE `wq_list`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `project_users`
--
ALTER TABLE `project_users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10050;
--
-- 使用表AUTO_INCREMENT `wq_list`
--
ALTER TABLE `wq_list`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
