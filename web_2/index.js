const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require("./routes"); // 引入主路由

app.set("view engine", "ejs")  
// 配置模板的路径 
app.set("views", path.resolve(__dirname, "views")) 

// 设置静态文件夹
app.use(express.static(path.join(__dirname, "public")));

// 解析 JSON 和 URL 编码的请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 安装express-session 中间件之后，引入 
const session = require("express-session")

// 安装、引入express-mysql-session，  session作为express-mysql-session参数
const MySQLStore = require('express-mysql-session')(session)

const options = require("./config/dbConfig");
const sessionStore = new MySQLStore(options);  
// 使用众多 default 选项，自动创建 sessions 数据库表

// 注册session中间件
app.use(
  session({
    secret: "heiheihei",
    resave: true,
    saveUninitialized: true,
    store: sessionStore,       //  FileStore--》MySQLStore
  })
);



// 使用主路由
app.use("/", mainRouter);


// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
   res.status(500).send({
     code: 500,
     msg: "服务器发生错误",
   });
});

// 启动服务器
app.listen(5000, () => {
  console.log("服务器已经启动！   http://localhost:5000");
});

