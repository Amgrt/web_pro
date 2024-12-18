const userService = require("../services/userService");


exports.login = async (req, res, next) => {
  try {
    const { name, pwd } = req.body;
    const user = await userService.getUserByName(name);
    if (!user) {
      return res.status(404).send({
        code: 1001,
        success: false,
        message: "账号不存在",
      });
    }
    if (user.pwd !== pwd) {
      return res.status(401).send({
        code: 1002,
        success: false,
        message: "密码错误",
      });
    }

    req.session.loginUser = user.name;
    console.log(req.session);

    req.session.save(() => {
      if (user.name === "admin") {
        res.redirect("/movs/movies");
      } else {
        res.redirect("/movs/movies");
      }
    });
  } catch (err) {
    next(err);
  }
};



exports.getStudents = async (req, res, next) => {
  try {
    // 不带session版
    const users = await userService.getUsers();
    // res.render("students03", { stus: users });
    res.render("students04", {
      stus: users,
      loginUserName: req.session.loginUser,
    });
  } catch (err) {
    next(err);
  }
};

// 没有变化
exports.getUserById = async (req, res, next) => {
  try {
    // 不带session版
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return null;
    } else {
      res.render("student", { student: user });
    }
  } catch (err) {
    next(err);
  }
};



// 添加中间件checkLogin
exports.checkLogin = async (req, res, next) => {
  if (req.session.loginUser) {
    console.log("checkLogin", req.session.loginUser);
    next();
  } else {
    res.redirect("/usersCenter.html");
  }
};




exports.logout = async (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};


exports.createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const createUserResult = await userService.getUserByName(newUser.name);
    if (createUserResult) {
      res.redirect("/stus/students");
    } else {
      newUser.age = +newUser.age;
      newUser.imgUrl = "http://localhost:5000/images/peoples/员工.png";
      await userService.createUser(newUser);

      res.redirect("/stus/students");;
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);
    res.redirect("/stus/students");
  } catch (err) {
    next(err);
  }
};


exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = req.body;
    const updateUserResult = await userService.getUserById(updatedUser.id);
    updatedUser.imgUrl = updateUserResult.imgUrl;
    await userService.updateUser(updatedUser);
    
    res.redirect("/stus/students");;
  } catch (err) {
    next(err);
  }
};


exports.registerUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    // 这里可以添加验证逻辑，比如检查用户名是否已存在

    // 假设你有一个 service 用于和数据库交互
    const existingUser = await userService.getUserByName(newUser.name);
    if (existingUser) {
      return res.status(400).send({
        code: 1003,
        success: false,
        message: "用户名已存在",
      });
    }

    // 如果没有找到相同的用户，进行注册
    newUser.imgUrl = "http://localhost:5000/images/peoples/员工.png";
    await userService.createUser(newUser);

    // 设置当前用户为刚才注册的用户
    req.session.loginUser = newUser.name;

    // 注册成功后，重定向到登录页面或其他页面
    res.redirect("/movs/movies");
  } catch (err) {
    next(err);
  }
};
