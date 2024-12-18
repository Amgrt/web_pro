/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 90001
 Source Host           : localhost:3306
 Source Schema         : glj

 Target Server Type    : MySQL
 Target Server Version : 90001
 File Encoding         : 65001

 Date: 1/09/2024 12:32:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for movie
-- ----------------------------
DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `filmId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `posterUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `popularity` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of movie
-- ----------------------------
INSERT INTO `movie` VALUES (1, '7016', '逆行人生', '曾经意气风发的高志垒(徐峥 饰)在生活的重压下，中年“失速”偏离了原本的生活轨迹，一时意气用事的决定，让他瞬间从家人的“小骄傲”变成了社会的“边角料”。然而，他未曾料到，这仅是他“逆行人生”道路上的起点。接连不断的变故如疾风骤雨般袭来，迫使他不得不重新面对自我。当生活的重担真正压肩，他选择成为一名外卖员，从新的起点重新出发，穿梭于都市大街小巷的高志垒在路上结识了一众志同道合的“骑士”伙伴，在共度的时光里他深切的体会到了人间的冷暖真情，逐渐在这条充满磨砺的“逆行道”中找回曾经丢失的勇气与信念，重新定义人生新的方向。', 'http://localhost:5000/images/movies/逆行人生.jpg', 28);
INSERT INTO `movie` VALUES (2, '6988', '抓娃娃', '沈腾马丽合体爆改偷感夫妇，暑期开大贴脸开笑！！西虹市IP爆笑回归！！困苦的爹，辛劳的妈，破烂的院子，破碎的他。西虹市做大做强的路上怎么把老马家落下了？！！！“汤里没油，兜里没子”的马成钢（沈腾 饰）和春兰（马丽 饰），赶驴打工，家徒四壁，而儿子马继业（肖帛辰 饰）则是他们逆天改命的唯一希望！！！小马很争气！年年好成绩！一点不娇气！意志贼坚毅！但随着小马一天天长大，他却逐渐发现身边的人们都越来越不对劲……', 'http://localhost:5000/images/movies/抓娃娃.jpg', 20);
INSERT INTO `movie` VALUES (3, '7011', '白蛇：浮生', '追光动画“白蛇系列”第三部，也是白蛇故事的正传和终篇。南宋临安，小白五百年后终于觅得阿宣的转世—许仙，二人断桥相遇。小白小青隐身街巷，和许仙还有姐夫李公甫一起开始了人间的热闹生活。却不想杭州城中突发怪事，金山寺法海除妖而来，意外揭开了小白和小青的蛇妖身份，许仙惊恐目睹小白化身巨蟒……浮生中这一场生死情劫，许仙值得吗？', 'http://localhost:5000/images/movies/白蛇：浮生.jpg', 15);
INSERT INTO `movie` VALUES (4, '7006', '解密', '陈思诚刘昊然十年合作全新出发，颠覆呈现银幕传奇打造奇观巨制。电影《解密》根据茅盾文学奖获奖者麦家的同名长篇小说改编，故事关于上世纪四十年代，世界局势风起云涌，及时准确破译敌方的通讯密码至关重要。容金珍（刘昊然 饰）自幼展现出惊人的数学天赋，被时任大学校长的小黎黎（吴彦祖 饰）和太太叶筱凝（俞飞鸿 饰）抚养长大。大学入学之际，容金珍因解出数学系老师希伊斯（约翰·库萨克 饰）布置的难题而被更多人注意到，其中就有神秘部门701局局长郑某（陈道明 饰），容金珍从此走进了密码破译的大门。', 'http://localhost:5000/images/movies/解密.jpg', 20);
INSERT INTO `movie` VALUES (5, '7015', '负负得正', '黄振开（朱一龙 饰）怀疑自己正活在一部电影里，他什么也改变不了，只能遵循着剧本，日 复一日，沦为生活的囚徒。搬入新住处后，他遇到了神秘的合租室友李小乐（邱天 饰），她的突 然出现和莫名消失让黄振开的生活荡起涟漪，也让他重获感知爱的能力。', 'http://localhost:5000/images/movies/负负得正.jpg', 15);
INSERT INTO `movie` VALUES (6, '6964', '死侍与金刚狼', '瑞安·雷诺兹（Ryan Reynolds）继续出演标志性角色死侍，并将与暌违七年重返银幕的“金刚狼”休·杰克曼（Hugh Jackman）惊喜合体，正式登陆漫威电影宇宙。这一王炸组合将（不情不愿地）踏上双人冒险旅程，历经层层反转，呈现诸多“以暴制暴”的场面，爆笑上演兄（劲）弟（爆）情（对）深（打）。他们更将与一众昔日战友重新聚首，直面时间管理局（TVA）的追捕，迎战让人意想不到的神秘劲敌。《死侍与金刚狼》将最大程度还原充斥着极端暴力、无限反转、狂野段子的混世魔王氛围。', 'http://localhost:5000/images/movies/死侍与金刚狼.jpg', 32);
INSERT INTO `movie` VALUES (7, '6993', '神偷奶爸4', '掌管快乐的神来了，小黄人系列电影惊喜回归！格鲁一家迎来新成员，坑爹熊娃“迷你格鲁”。欢闹整活儿四娃家庭，齐聚暑期“爸”道来袭！加大号超级小黄人首度亮相，助攻格鲁对阵新宿敌恶霸麦斯～来影院和超级小黄人一起夏日狂欢！', 'http://localhost:5000/images/movies/神偷奶爸4.jpg', 26);
INSERT INTO `movie` VALUES (8, '7037', '名侦探柯南：百万美元的五棱星', '怪盗基德的预告信出现在了北海道函馆，斧江财阀的收藏库中。这次基德将要盗走的是，江戸幕府时期新选组副长土方岁三的日本刀。向来追逐奢华宝石的怪盗基德，居然会看上刀？此时，被称作西部名侦探的服部平次和柯南一行人，也因为剑道大会来到了函馆，在基德执行预告的当日，平次看穿了基德的伪装并对其穷追不舍！同一时间，一具尸体在函馆仓库街被发现，尸体的胸口有一个十字伤口。搜查中，出现了一位被叫做“死之商人”的活跃于亚洲一带的美籍日裔军火商。这个人一直在寻找斧江家初代家主藏在函馆的宝藏。斧江家江戸幕府战争时代深耕军需产业，传说那宝藏是能扭转幕末纷争的强力武器，而这宝藏似乎和基德追逐欲盗取的刀有着千丝万缕的联系。在基德瞄准刀的同时，有一位剑士也在向基德逼近……', 'http://localhost:5000/images/movies/名侦探柯南：百万美元的五棱星.jpg', 23);
INSERT INTO `movie` VALUES (9, '6999', '从21世纪安全撤离', '友情提示：请在地球人陪同下前往影院观看。在地球人都不知道的K星，三个被命运选中的少年，靠打个喷嚏就可以往返未来二十年。面对毁灭世界的惊天阴谋，他们除了清澈的愚蠢和个位数的战力外一无所有，如何变身英雄对抗意图毁灭世界的超级坏坏的大坏蛋？8月3日，外表看似大人，头脑却异于常人的“王炸”兄弟组合，代表k星拯救未来！', 'http://localhost:5000/images/movies/从21世纪安全撤离.jpg', 19);
INSERT INTO `movie` VALUES (10, '7028', '重生', '陌生人，不轻信，保持距离不靠近。送香烟，送啤酒，严辞拒绝绕边走。身边人，要留心，出门在外要小心！在隐蔽的缦城角落，利欲熏心的贩毒集团不择手段，致使无数人因沾染毒品而家庭破碎、坠落深渊。被毒贩迫害至家破人亡的张耀（张家辉 饰）为复仇，与缉毒队长安渡（阮经天 饰）暗中合作，二人联手做局狠辣除害，誓要将犯罪集团的榜一榜二大哥穆坤和安佩全部铲除。然而没想到在这背后竟藏着一场精心布置的复仇棋局，是同仇敌忾还是各怀鬼胎？在这场较量中，到底谁才是执棋人，谁又是被操作的棋子？当危机悄然而至，是沉沦还是警醒，一切请小心为上……', 'http://localhost:5000/images/movies/重生.jpg', 11);

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions`  (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  PRIMARY KEY (`session_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sessions
-- ----------------------------

-- ----------------------------
-- Table structure for stu
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `pwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `age` int NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of stu
-- ----------------------------
INSERT INTO `stu` VALUES (1, 'admin', '000000', 28, '男', '天津理工大学', 'http://localhost:5000/images/peoples/管理员.png');
INSERT INTO `stu` VALUES (2, '孙悟空', '111111', 18, '男', '花果山', 'http://localhost:5000/images/peoples/孙悟空.png');
INSERT INTO `stu` VALUES (3, '猪八戒', '111111', 28, '男', '高老庄', 'http://localhost:5000/images/peoples/猪八戒.png');
INSERT INTO `stu` VALUES (4, '沙和尚', '111111', 38, '男', '流沙河', 'http://localhost:5000/images/peoples/沙和尚.png');
INSERT INTO `stu` VALUES (5, '唐僧', '111111', 16, '女', '女儿国', 'http://localhost:5000/images/peoples/唐僧.png');

SET FOREIGN_KEY_CHECKS = 1;
