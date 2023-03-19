// ?在函数中常用的用法
// *1.bind 类似函数的原型上的实例方法 返回一个绑定了this指向的新函数
// todo _.bind(function,thisArg,...args)
function greet(greeting, punctuation) {
  return greeting + " " + this.user + " " + punctuation;
}

const obj = { user: "coder" };
const newFn = _.bind(greet, obj, "hi");

console.log(newFn("!")); //hi coder !
// todo 等价于下面这种
const newFnTwo = greet.bind(obj, "hi");
console.log(newFnTwo("!"));

// *2.once 创建一个只能调用一次的函数，多次调用返回第一次调用返回的结果
// todo _.once(fun)
const add = (a, b) => a + b;
const newAdd = _.once(add);

console.log(newAdd(1, 2)); //3
console.log(newAdd(3, 4)); //3

// *3.delay 延时delay ms后调用该函数,返回一个计时器id
// todo _.delay(func,delay,[options])
_.delay((a, b) => console.log(a + b), 2000, 5, 5); //2s后输出10

// *4.debounce/throttle防抖节流 返回一个新的防抖节流函数
// todo _.debounce(fn,delay,{options})
// todo 输入框案例
const inputEl = document.querySelector(".input");
const debounceFn = _.debounce((e) => console.log(e.target.value), 2000, {
  leading: false,
});

inputEl.addEventListener("input", debounceFn);
