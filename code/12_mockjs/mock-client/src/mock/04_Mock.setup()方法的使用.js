import Mock from "mockjs";

// ?Mock.setup()函数的使用
// *用来配置拦截ajax请求是的配置，目前支持的配置选项包括:timeout
// !注意：目前仅支持timeout一个选项的配置
Mock.setup({
  timeout: 400, //表示，400ms之后才会返回数据
});
