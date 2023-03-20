// ?js-xss在Node中使用:
const xss = require("xss");
// todo1. const html=xss(html片段,options)

// todo 2.可以通过new xss.FilterXSS(options)创建一个实例对象:使用这种方法速度更快
options = {}; // 自定义规则
myxss = new xss.FilterXSS(options);
// 以后直接调用 myxss.process() 来处理即可
html = myxss.process('<script>alert("xss");</script>');
