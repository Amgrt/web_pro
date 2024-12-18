const { createPool } = require("mysql2/promise");

const dbConfig = require("../config/dbConfig");

const pool = createPool(dbConfig);

class User {
  constructor(id, name, pwd, age, gender, address, imgUrl) {
    this.id = id;
    this.name = name;
    this.pwd = pwd;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.imgUrl = imgUrl;
  }

  // 封装对数据库的操作，如增删改查等
  // 在 ORM（对象关系映射）框架中，模型通常是数据库表的映射
  // 返回合适的数据给userService

  // 获取所有用户
  static async getUsers() {
    try {
      const [rows] = await pool.query("SELECT * FROM stu");

      // 将结果映射为 User类型的对象数组
      return rows.map(
        (row) =>
          new User(
            row.id,
            row.name,
            row.pwd,
            row.age,
            row.gender,
            row.address,
            row.imgUrl
          )
      );
    } catch (err) {
      console.error("Error fetching users:", err);
      throw err;
    }
  }

  static async getUserByName(name) {
    try {
      const [rows] = await pool.query("select * from stu where name = ?", [
        name,
      ]);
      if (rows.length === 0) {
        // user是null  账号不存在
        return null;
      }
      return new User(
        rows[0].id,
        rows[0].name,
        rows[0].pwd,
        rows[0].age,
        rows[0].gender,
        rows[0].address,
        rows[0].imgUrl
      );
    } catch (err) {
      console.error(`Error fetching user with Name ${name}:`, err);
      throw err;
    }
  }

  static async getUserById(id) {
    try {
      const [rows] = await pool.query("SELECT * FROM stu WHERE id = ?", [id]);
      if (rows.length === 0) {
        // user是null
        return null;
      }
      return new User(
        rows[0].id,
        rows[0].name,
        rows[0].pwd,
        rows[0].age,
        rows[0].gender,
        rows[0].address,
        rows[0].imgUrl
      );
    } catch (err) {
      console.error(`Error fetching user with ID ${id}:`, err);
      throw err;
    }
  }

  static async createUser(name, pwd, age, gender, address, imgUrl) {
    try {
      const [result] = await pool.query(
        "INSERT INTO stu (name, pwd, age, gender, address,imgUrl) VALUES (?, ?, ?, ?, ?, ?)",
        [name, pwd, age, gender, address, imgUrl]
      );
      return result.insertId;
      // 返回新插入记录的 ID
    } catch (err) {
      console.error("Error creating user:", err);
      throw err;
    }
  }

  static async updateUser(id, name, pwd, age, gender, address, imgUrl) {
    try {
      await pool.query(
        "UPDATE stu SET name = ?, pwd = ?, age = ? , gender = ? , address = ?, imgUrl = ? WHERE id = ?",
        [name, pwd, age, gender, address, imgUrl, id]
      );
      // 木有返回值
    } catch (err) {
      console.error(`Error updating user with ID ${id}:`, err);
      throw err;
    }
  }

  static async deleteUser(id) {
    try {
      await pool.query("DELETE FROM stu WHERE id = ?", [id]);
      // 木有返回值
    } catch (err) {
      console.error(`Error deleting user with ID ${id}:`, err);
      throw err;
    }
  }
}

module.exports = User;
