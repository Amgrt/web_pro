const User = require("../models/User");

// 可能包含复杂的业务逻辑，比如验证用户名是否已存在，返回给userController合适的数据
// 经常作为模型和控制器之间的中介，为控制器提供更高级别的抽象
// 可以包含验证、事务管理等功能
// 调用models/User模型提供的方法，将数据返回给控制器



// 获取所有用户
exports.getUsers = async () => {
  try {
    const users = await User.getUsers();
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};

// 根据 name  获取单个用户
exports.getUserByName = async (userName) => {
  try {
    const user = await User.getUserByName(userName);
    if (!user) {
      // user是null  账号不存在
      return null;
    }
    return user; 
    // resolve
  } catch (err) {
    // reject
    console.error(`Error fetching user with Name and Pwd ${userName}:`, err);
    throw err;
  }
};


// 根据 ID 获取单个用户
exports.getUserById = async (userId) => {
  try {
    const user = await User.getUserById(userId);
    if (!user) {
      return null;
    }
    return user;
  } catch (err) {
    console.error(`Error fetching user with ID ${userId}:`, err);
    throw err;
  }
};

// 创建新用户
exports.createUser = async (userData) => {
  try {
    const userId = await User.createUser(
      userData.name,
      userData.pwd,
      userData.age,
      userData.gender,
      userData.address,
      userData.imgUrl
    );
    return userId;
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
};

// 更新用户
exports.updateUser = async (userData) => {
  try {
    await User.updateUser(
      userData.id,
      userData.name,
      userData.pwd,
      userData.age,
      userData.gender,
      userData.address,
      userData.imgUrl
    );
  } catch (err) {
    console.error(`Error updating user with ID ${userData.id}:`, err);
    throw err;
  }
};

// 删除用户
exports.deleteUser = async (userId) => {
  try {
    await User.deleteUser(userId);
  } catch (err) {
    console.error(`Error deleting user with ID ${userId}:`, err);
    throw err;
  }
};
