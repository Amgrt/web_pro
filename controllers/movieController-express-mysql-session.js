const movieService = require("../services/movieService");

exports.checkLogin = (req, res, next) => {
  if (!req.session.loginUser) {
    return res.redirect('/usersCenter.html');  // 未登录时跳转到 usersCenter.html
  } 
  next();
};

// 获取所有电影
exports.getMovies = async (req, res, next) => {
  try {
    // 调用 movieService 获取电影列表
    const movies = await movieService.getMovies();
    
    // 渲染 movies04 模板，将电影数据和登录用户名称传递给模板
    res.render("movies04", {
      movies: movies,
      loginUserName: req.session.loginUser,
      errorMessage: "",
    });
  } catch (err) {
    next(err);
  }
};

// 根据 ID 获取单个电影
exports.getMovieById = async (req, res, next) => {
  const movieId = req.params.id;
  try {
    const movie = await movieService.getMovieById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    } else {
      res.render("movie", { movie: movie });
    }
  } catch (err) {
    next(err);
  }
};

// 添加新电影
exports.createMovie = async (req, res, next) => {
  const movieData = req.body;
  try {
    const movieId = await movieService.createMovie(movieData);
    res.redirect("/movs/movies");
  } catch (err) {
    if (err.message === "电影名称已存在，请使用不同的名称。") {
      // 如果是名称重复错误，渲染页面并显示错误信息
      res.render("movies04", {
        movies: await movieService.getMovies(),  // 获取并传递所有电影数据
        loginUserName: req.session.loginUser,
        errorMessage: err.message,  // 传递错误信息给 EJS
      });
    } else {
      next(err); // 其他错误传递给下一个错误处理中间件
    }
  }
};

// 显示更新电影页面
exports.showUpdateMoviePage = async (req, res, next) => {
  try {
    // 获取电影 ID
    const movieId = req.params.id;

    // 根据电影 ID 获取电影信息
    const movie = await movieService.getMovieById(movieId);

    if (!movie) {
      return res.status(404).send("电影未找到");
    }

    // 渲染 movie.ejs 页面并传递电影数据
    res.render("movie", { movie });
  } catch (err) {
    next(err);
  }
};

// 更新电影信息
exports.updateMovie = async (req, res, next) => {
  try {
    // 从请求中获取更新后的电影数据
    const movieData = req.body;
    
    // 通过电影 ID 获取原始电影信息
    const originalMovie = await movieService.getMovieById(movieData.id);
    
    // 如果用户没有修改 `posterUrl`，则使用原始电影信息中的 `posterUrl`
    if (!movieData.posterUrl || movieData.posterUrl.trim() === '') {
      movieData.posterUrl = originalMovie.posterUrl;
    }

    // 更新电影信息
    await movieService.updateMovie(movieData);

    // 重定向到电影列表页面
    res.redirect("/movs/movies");
  } catch (err) {
    next(err);
  }
};

// 删除电影
exports.deleteMovie = async (req, res, next) => {
  const movieId = req.params.id;
  try {
    await movieService.deleteMovie(movieId);
    res.redirect("/movs/movies");
  } catch (err) {
    next(err);
  }
};
