const app = require("./app/index");

app.listen(3000, "0.0.0.0", () => {
  console.log("服务器在3000端口启动成功");
});
