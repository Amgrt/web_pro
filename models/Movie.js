const mysql = require("mysql2/promise");
const dbConfig = require("../config/dbConfig");

const pool = mysql.createPool(dbConfig);

class Movie {
  constructor(id, filmId, name, description, posterUrl, popularity) {
    this.id = id;
    this.filmId = filmId;
    this.name = name;
    this.description = description;
    this.posterUrl = posterUrl;
    this.popularity = popularity;
  }

  // 获取所有电影
  static async getMovies() {
    try {
      const [rows] = await pool.query("SELECT * FROM movie");

      // 将结果映射为 Movie 类型的对象数组
      return rows.map(
        (row) =>
          new Movie(
            row.id,
            row.filmId,
            row.name,
            row.description,
            row.posterUrl,
            row.popularity
          )
      );
    } catch (err) {
      console.error("Error fetching movies:", err);
      throw err;
    }
  }

  // 根据 ID 获取电影
  static async getMovieById(id) {
    try {
      const [rows] = await pool.query("SELECT * FROM movie WHERE id = ?", [id]);
      if (rows.length === 0) {
        return null;
      }
      return new Movie(
        rows[0].id,
        rows[0].filmId,
        rows[0].name,
        rows[0].description,
        rows[0].posterUrl,
        rows[0].popularity
      );
    } catch (err) {
      console.error(`Error fetching movie with ID ${id}:`, err);
      throw err;
    }
  }

  // 检查电影名称是否存在
  static async isMovieNameExists(name) {
    try {
      const [rows] = await pool.query("SELECT * FROM movie WHERE name = ?", [name]);
      return rows.length > 0;
    } catch (err) {
      console.error("Error checking movie name:", err);
      throw err;
    }
  }
  // 创建新电影
  static async createMovie(filmId, name, description, posterUrl, popularity) {
    try {
      // 检查名称是否重复
      const exists = await this.isMovieNameExists(name);
      if (exists) {
        throw new Error("电影名称已存在");
      }
  
      const [result] = await pool.query(
        "INSERT INTO movie (filmId, name, description, posterUrl, popularity) VALUES (?, ?, ?, ?, ?)",
        [filmId, name, description, posterUrl, popularity]
      );
      return result.insertId;
    } catch (err) {
      console.error("Error creating movie:", err);
      throw err;
    }
  }

  // 更新电影信息
  static async updateMovie(id, filmId, name, description, posterUrl, popularity) {
    try {
      // 使用 SQL 查询来更新电影信息
      await pool.query(
        "UPDATE movie SET filmId = ?, name = ?, description = ?, posterUrl = ?, popularity = ? WHERE id = ?",
        [filmId, name, description, posterUrl, popularity, id]
      );
    } catch (err) {
      console.error(`Error updating movie with ID ${id}:`, err);
      throw err;
    }
  }

  // 删除电影
  static async deleteMovie(movieId) {
    try {
      await pool.query("DELETE FROM movie WHERE id = ?", [movieId]);
    } catch (err) {
      console.error(`Error deleting movie with ID ${movieId}:`, err);
      throw err;
    }
  }
}

module.exports = Movie;
