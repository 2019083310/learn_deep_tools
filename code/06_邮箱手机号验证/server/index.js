// ?基于tencentcloud-sdk-nodejs库来实现手机号发送验证码
const Koa = require("koa");
const KoaRouter = require("koa-router");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const dot = require("dotenv");

const app = new Koa();
const { main_handler } = require("./main-handler");

app.use(cors());
app.use(bodyParser());

dot.config();

const router = new KoaRouter({
  prefix: "/api",
});

router.post("/phone/cat/send", async (ctx, next) => {
  const res = await main_handler({
    httpMethod: "POST",
    body: ctx.request.body,
  });

  ctx.body = res;
});

router.post("/phone/cat/verify", async (ctx, next) => {
  const res = await main_handler({
    httpMethod: "POST",
    body: ctx.request.body,
  });

  ctx.body = res;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("3000端口启动成功");
});
