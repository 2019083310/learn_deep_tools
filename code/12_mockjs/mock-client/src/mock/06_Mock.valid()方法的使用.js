import Mock from "mockjs";

// ?Mock.valid(template,data) 校验data与template模板是否匹配

const template = { name: "value1" };
const data = { name: "value2" };

console.log(Mock.valid(template, data));
