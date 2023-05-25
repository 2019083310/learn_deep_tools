// todo 2.数据占位符定义规范
// !占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中

//todo 占位符的格式 1.@占位符 2.@占位符(参数)

// ?注意事项
// 1.用 @ 来标识其后的字符串是 占位符。
// 2.占位符 引用的是 Mock.Random 中的方法。
// 3.占位符 支持 相对路径 和 绝对路径
import Mock from "mockjs";
const Random = Mock.Random; //Random是一个类，类中有很多静态方法

// !占位符引用的是Mock.Random中的方法 详情见:http://mockjs.com/examples.html#Date
// 1.Basic
// 1.1 Random.boolean(min,max,current)
console.log(Random.boolean()); //随机生成一个布尔值，true/false的概率都为1/2
const data = Mock.mock("@boolean");
const data2 = Mock.mock("@boolean(1,9.true)");
console.log(data, data2);
