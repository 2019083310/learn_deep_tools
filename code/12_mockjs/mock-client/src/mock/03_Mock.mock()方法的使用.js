import Mock from "mockjs";

// ?详细介绍Mock.mock方法
// *Mock.mock(rurl,rtype,template)接收三个参数,可以搭配出不同的使用方法

//  todo 1.Mock.mock(template) 这种最简单，就是模拟生成数据
const data = Mock.mock({
  name: "coder",
  "age|+1": [18, 19, 20, 21],
  height: 1.88,
});

const dataTwo = Mock.mock("@date");
console.log(data, dataTwo);

// todo 2.Mock.mock(rurl,template)当匹配到url路径是，返回template模拟生成的数据
// Mock.mock("/api/test", {
//   name: "coder",
//   "age|+1": [18, 19, 20, 21],
//   height: 1.88,
// });

// todo 3.Mock.mock(rurl,rtype.template)当匹配到url,method返回Template模拟生成的数据
// Mock.mock("/api/test", "get", {
//   name: "coder",
// });

// todo 4.Mock.mock(rurl,function(optiosn))当匹配到url时，返回function生成的模拟数据
Mock.mock("/api/test", (options) => {
  // *options中含有url,method.body三个请求参数
  console.log(options);
  return {
    name: "coder",
    "age|+1": [18, 19, 20, 21],
    height: 1.88,
  };
});

// todo 5.MOck.mock(rurl,rtype,function(options))
