const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController-express-mysql-session");

// 登录    
router.post("/students/login", studentController.login);

// // 登出路由
router.get("/students/logout", studentController.logout);

// 注册普通新用户
router.post("/studentRegister", studentController.registerUser);

// 增加验证是否登录
router.use(studentController.checkLogin);

// 获取所有用户
router.get("/students", studentController.getStudents);


// 添加新用户
router.post("/students", studentController.createUser);


// 根据 ID 获取单个用户
router.get("/students/:id", studentController.getUserById);


// 删除用户
// router.delete("/students/:id", studentController.deleteUser);
// 用get方法模拟delete
router.get("/students/delete/:id", studentController.deleteUser);

// 更新用户
// router.put("/students", studentController.updateUser);
// 用post方法模拟put
router.post("/students/update", studentController.updateUser);




module.exports = router;

