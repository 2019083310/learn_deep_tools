import Mock from "mockjs";

// ?Mock.random的具体使用
// *Mock.Random是一个类，类中有很多静态方法，帮助我们Random数据

const Random = Mock.Random;

// todo 1.Basic类
// 1.1随机生成一个布尔值
console.log(Random.boolean());

// todo 2.Image类
console.log(Random.image("300x250"));

// *具体详见:https://github.com/nuysoft/Mock/wiki/Mock.Random
