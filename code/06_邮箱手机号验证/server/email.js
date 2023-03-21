// ?基于nodemailer库来实现邮箱发送验证码
const nodemailer = require("nodemailer");
const Koa = require("koa");
const KoaRouter = require("koa-router");
const cors = require("koa2-cors");
const bodyParser=require('koa-bodyparser')

const app = new Koa();
app.use(cors());
app.use(bodyParser())

const router = new KoaRouter({
  prefix: "/api",
});

// ?创建一个发送邮箱的对象实例
const nodeEmail = nodemailer.createTransport({
  // !这些允许的邮箱service以及信息到//node_modules/nodemailer/lib/well-known/services.json查看
  service: "qq", //邮箱类型
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    user: "2330053403@qq.com",
    pass: "gmiycaxvrlmueadg", //开启发送邮箱的密钥
  },
});

router.post("/email/send", async (ctx, next) => {
  const { email } = ctx.request.body;

  // ?随机生成六位数验证码
  const code = String(Math.floor(Math.random() * 1000000)).padEnd(6, "0");
  console.log(email)

  // ?邮件配置
  const mainOptions = {
    from: `"酒客"<2330053403@qq.com>`, //发送方
    to: email, //接收方
    subject: code, //验证码
    html: `
      <p>您好！</p>
      <p>您的验证码是：<strong style="color:orange;">${code}</strong></p>
      <p>如果不是您本人操作，请无视此邮件</p>
    `, //html内容
  };

  // ?发送邮件
  nodeEmail.sendMail(mainOptions, (err, info) => {
    if (err) {
      console.error(err)
      ctx.body = {
        code: -1,
        message: "发送失败",
      };
    } else {
      console.log(info)
      ctx.body = {
        code: 1,
        message: "发送成功",
      };
    }
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("3000端口启动成功");
});
