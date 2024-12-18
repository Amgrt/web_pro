const express = require("express");
const router = express.Router();

// 使用movie路由  添加虚拟路径前缀movs  
// 例如：http://localhost:5000/movs/students
router.use("/movs", require("./movies-express-mysql-session"));


// 使用student路由  添加虚拟路径前缀stus   
// 例如：http://localhost:5000/stus/students
router.use("/stus", require("./students-express-mysql-session"));


// 使用其他...

module.exports = router;
