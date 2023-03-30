const Koa = require("koa");
const KoaRouter = require("koa-router");
const cors = require("koa2-cors");

require("../utils/logger")(2);
// console.log(globalLogger);

const testRouter = new KoaRouter({
  prefix: "/test",
});

const app = new Koa();

app.use(cors());

testRouter.get("/", async (ctx, next) => {
  // globalLogger.info("success");
  console.log(1)
  ctx.body = 1;
});

testRouter.get("/calc", async (ctx, next) => {
  // globalLogger.error("error");
  console.error(2)
  console.success('success')
  ctx.body = 2;
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods());

module.exports = app;
