// ?js-xss的基本使用
// todo 1.通过命令行的方式来使用
// pnpm install xss
// npx xss -i(输入文件) origin -o(输出文件) target -c(config配置) config.json

// todo 2.config.json的配置内容
// *a.最重要的是whiteList的配置，配置需要保留的html标签和属性 格式:{'标签名': ['属性1', '属性2']}
// *b.css.whiteList:{}也可以配置css需要保留的css样式属性
// *c.stripIgnoreTag true||false 去掉不在白名单上的标签，默认false  标签内部的内容不会被过滤
// *d.stripIgnoreTagBody false||null||undefined 表示false *||true 表示true ["script"]表示去掉数组规定的不在白名单上的标签和标签体
// *e.allowCommentTag 是否去掉Html内部的注释 默认false
// ?f.onTag(tag,html,options) 自定义匹配到标签时的处理函数
// tag-标签名(a标签) html标签(<a />)
// options选项
// isWhite    boolean类型，表示该标签是否在白名单上
// isClosing  boolean类型，表示该标签是否为闭合标签，比如</a>时为true
// position        integer类型，表示当前标签在输出的结果中的起始位置
// sourcePosition  integer类型，表示当前标签在原HTML中的起始位置
// 如果返回一个字符串，则当前标签将被替换为该字符串
// 如果不返回任何值，则使用默认的处理方法
//   在白名单上：  通过onTagAttr来过滤属性，详见下文
//   不在白名单上：通过onIgnoreTag指定，详见下文

// ?f.onTagAttr(tag,name,value,isWhiteAttr) 自定义匹配到标签属性的处理函数
// tag是当前的标签名称，比如<>标签，则tag的值是'a'
// name是当前属性的名称，比如href="#"，则name的值是'href'
// value是当前属性的值，比如href="#"，则value的值是'#'
// isWhiteAttr是否为白名单上的属性
// 如果返回一个字符串，则当前属性值将被替换为该字符串
// 如果不返回任何值，则使用默认的处理方法
//   在白名单上：  调用safeAttrValue来过滤属性值，并输出该属性，详见下文
//   不在白名单上：通过onIgnoreTagAttr指定，详见下文

// ?g.onIgnoreTag(tag,html,options) 自定义匹配到不在白名单的标签的处理函数
// 参数说明与onTag相同
// 如果返回一个字符串，则当前标签将被替换为该字符串
// 如果不返回任何值，则使用默认的处理方法（通过escape指定，详见下文）

// ?h.onIgnoreTagAttr(tag,name,value,isWhiteAttr) 自定义匹配到不在白名单属性的处理函数
// 参数说明与onTagAttr相同
// 如果返回一个字符串，则当前属性值将被替换为该字符串
// 如果不返回任何值，则使用默认的处理方法（删除该属）

// ?i.通过 escapeHtml 来指定相应的处理函数。以下是默认代码 （不建议修改）
function escapeHtml(html) {
  return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ?g.通过 safeAttrValue 来指定相应的处理函数。以下是详细说明：
function safeAttrValue (tag, name, value) {
  // 参数说明与onTagAttr相同（没有options参数）
  // 返回一个字符串表示该属性值
}
