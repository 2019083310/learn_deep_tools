// ?Math中常用的方法
// *1.add两数之和
// todo _.add(num1,num2)
console.log(_.add(1,2))//3
console.log(_.add(1,'2'))//'12'
console.log(_.add(1,{name:'coder'}))//NaN

// *2.divide两个数之商
console.log(_.divide(6,4))//1.5
console.log(_.divide(6,true))//6
console.log(_.divide(6,false))//Infinity

// *3.ceil/floor 向上取整/向下取整
// todo _.ceil(num,(精度)number) _.floor(num,精度)
console.log(_.ceil(3.5))//4
console.log(_.ceil(3.5,1))//3.5 精度可以理解为保留几位小数
console.log(_.ceil(3.005,2))//3.01

// *4.max/min 最大最小值
// todo _.max(array) _.min(array)
console.log(_.max([1,2,3]))//3
console.log(_.max([1,2,3,'c']))//3
console.log(_.min([1,2,3,'c']))//1

// ?类似Math.min() Math.max()不过他们只能接受Number
console.log(Math.min([1,2,3]))//!错误用法，不能接受array
console.log(Math.min(...[1,2,3]))//!正确用法，解构

// *5.mean 平均值
// todo _.mean(array)
console.log(_.mean([1,2,3,4]))//2.5