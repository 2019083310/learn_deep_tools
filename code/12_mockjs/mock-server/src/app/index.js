const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const mapRoutes = require("../router/index");
const errorHandle = require("./error-handle");

const app = new Koa();

// 中间件解决post请求body请求体
app.use(bodyParser());

// 跨域
app.use(cors());

// 路由映射
mapRoutes(app);

// 捕捉错误
app.on("error", errorHandle);

module.exports = app;
