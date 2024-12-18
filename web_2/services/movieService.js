const Movie = require("../models/Movie");

// 获取所有电影
exports.getMovies = async () => {
  try {
    // 调用 Movie 模型的 getMovies 方法获取所有电影
    const movies = await Movie.getMovies();
    return movies;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw err;
  }
};

// 根据电影 ID 获取单个电影
exports.getMovieById = async (movieId) => {
  try {
    // 调用 Movie 模型的 getMovieById 方法获取指定 ID 的电影
    const movie = await Movie.getMovieById(movieId);
    if (!movie) {
      throw new Error("电影未找到");
    }
    return movie;
  } catch (err) {
    console.error(`Error fetching movie with ID ${movieId}:`, err);
    throw err;
  }
};

// 创建新电影
exports.createMovie = async (movieData) => {
  try {
    const movieId = await Movie.createMovie(
      movieData.filmId,
      movieData.name,
      movieData.description,
      movieData.posterUrl,
      movieData.popularity
    );
    return movieId;
  } catch (err) {
    // 捕获电影名称重复的错误
    if (err.message === "电影名称已存在") {
      throw new Error("电影名称已存在，请使用不同的名称。");
    }
    console.error("Error creating movie:", err);
    throw err;
  }
};


// 更新电影信息
exports.updateMovie = async (movieData) => {
  try {
    // 更新电影数据
    await Movie.updateMovie(
      movieData.id,
      movieData.filmId,
      movieData.name,
      movieData.description,
      movieData.posterUrl,
      movieData.popularity
    );
  } catch (err) {
    console.error(`Error updating movie with ID ${movieData.id}:`, err);
    throw err;
  }
};

// 删除电影
exports.deleteMovie = async (movieId) => {
  try {
    // 调用 Movie 模型的 deleteMovie 方法删除电影
    await Movie.deleteMovie(movieId);
  } catch (err) {
    console.error(`Error deleting movie with ID ${movieId}:`, err);
    throw new Error(`无法删除电影 ID ${movieId}`);
  }
};
