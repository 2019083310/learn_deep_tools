// ?字符串中常用方法
// *1.camelCase转化为小驼峰
// todo _.camelCase(string)
console.log(_.camelCase('foo bar'))//fooBar
console.log(_.camelCase('-foo-bar-'))//fooBar

// *2.capitalize 首字母大写，剩余全部小写
// todo _.capitalize(string)
console.log(_.capitalize('free'))//Free
console.log(_.capitalize('freE'))//Free
console.log(_.capitalize('freE-'))//Free-
console.log(_.capitalize('-freE-'))//-free-

// ?其实大部分的方法现在es6+语法都已经慢慢支持了