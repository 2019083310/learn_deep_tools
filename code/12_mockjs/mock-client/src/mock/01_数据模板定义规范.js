// todo 1.数据模板定义规范：三部分组成：属性名 生成规则 属性值  'name | rule':value
// 1.1 属性名和生成规则之间用|间隔
// 1.2 生成规则有七种格式:
// 'name | min-max':value  'name | count':value  'name | min-max.dmin-dmax':value 'name | min-max.dcount':value
// 'name | count.dmin-dmax':value  'name | count.dcount':value  'name | +step':value
// !生成规则的含义还要取决于属性值的类型
// 1.3 属性值中可以包含占位符

import Mock from "mockjs";

// 1.属性值为字符串类型
const stringData = Mock.mock({
  // 1.1 'name | mix-max':string 表示通过重复的字符串生成一个字符串，重复次数大于等于min 小于等于max
  "name|2-5": "coder", //'"codercodercodercodercoder"'
  // 1.2 'name|count':string 表示通过重复string生成一个字符串 重复count次
  "name|2": "coder", //'codercoder'
});
console.log(stringData);

// 2.属性值为number类型
const numberData = Mock.mock({
  // 2.1 'number|+step':number 表示初始值为number,以后自动+1
  "id|+1": 1,
  //2.2 'number|min-max':number 表示生成一个min-max之间的整数，number只是用来确定类型
  "number|1-100": 5,
  //2.3 'number|min-max.dmin-dmax':number 表示生成一个浮点数 整数部分生成范围在min-max之间，浮点数保留dmin-dmax位
  "num|5-10.1-3": 5,
  //2.4 'number|min-max.dcount':number 表示生成一个浮点数 整数min-max 小数位dcount位
  "num2|5-20.5": 8,
});
console.log(numberData);

// 3.属性值为布尔型
const boolData = Mock.mock({
  // 3.1 'name|1':boolean 表示随机生成一个布尔值，生成true/false的概率各为1/2
  "bool|1": true,
  // 3.2 'name|min-max':boolean 表示随机生成一个布尔值，true的概率min/(min+max) false概率max/(min+max)
  "bool2|1-3": false,
});
console.log(boolData);

// 4.属性值是object
const objData = Mock.mock({
  // 4.1 'name|count':object 表示从object中随机选取count个属性 作为新生成的对象的属性
  "person|3": {
    name: "coder",
    age: 18,
    height: 1.88,
    hobbies: ["football", "basketball", "swimming", "ping-pang"],
  },
  //4.2 'name|min-max':object 表示随机从object中选取min-max个属性作为新生成的对象的属性
  "user|1-4": {
    name: "coder",
    age: 18,
    height: 1.88,
    hobbies: ["football", "basketball", "swimming", "ping-pang"],
  },
});
console.log(objData);

// 5.属性值是数组类型
const arrayData = Mock.mock({
  // 5.1 'name|1':Array 表示从Array里面随机选取一个值作为最终值返回
  "arr|1": ["大话西游", "星际穿越", "阿甘正传"],
  // 5.2 'name|min-max':Array 表示重复Array的属性值生成一个新的数组 重复次数min-max
  "arr2|1-3": ["大话西游", "星际穿越", "阿甘正传", "绿皮书"],
  // 5.3 'name|count':Array 表示重复count次Array生成一个新的数组
  // 5.4 'name|+1':Array 表示从Array中按照顺序选取第一个值返回作为最终值
  "arr3|+1": ["a", "b"],
});
console.log(arrayData);

// 6.属性值是function
const funcData = Mock.mock({
  // 6.1 'name':function 表示执行函数，并将函数返回结果作为最终值
  foo: () => {
    return "c";
  },
});
console.log(funcData);

// 7.属性值是正则表达式
const regData = Mock.mock({
  // 7.1 'name':RegExp 表示生成一个符合正则表达的字符串
  regexp1: /[a-z][A-Z][0-9]/,
  regexp2: /\w\W\s\S\d\D/,
  regexp3: /\d{5,10}/,
});
console.log(regData);

// 8.绝对路径 相对路径
const pathData = Mock.mock({
  foo: "Hello",
  nested: {
    a: {
      b: {
        c: "Mock.js",
      },
    },
  },
  // 绝对路径 @/表示当前对象
  absolutePath: "@/foo @/nested/a/b/c",
  // 相对路径 ../ ../
  relativePath: {
    a: {
      b: {
        c: "@../../../foo @../../../nested/a/b/c",
      },
    },
  },
});
console.log(pathData);
