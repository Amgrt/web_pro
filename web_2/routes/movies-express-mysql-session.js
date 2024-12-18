const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController-express-mysql-session");

// 增加验证是否登录
router.use(movieController.checkLogin);

// 获取所有电影
router.get("/movies", movieController.getMovies);

// 根据 ID 获取单个电影
router.get("/movies/:id", movieController.getMovieById);

// 添加新电影
router.post("/movies/addmovie", movieController.createMovie);

// 显示修改电影页面
router.get("/movies/update/:id", movieController.showUpdateMoviePage);

// 更新电影信息
router.post("/movies/update", movieController.updateMovie);

// 删除电影
router.get("/movies/delete/:id", movieController.deleteMovie);

module.exports = router;
