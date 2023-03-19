// ?使用方式三种：cdn/下载js文件/npm

// ?初步使用:
// ?重要的配置:editorConfig(编辑器配置,菜单栏配置)，toolbarConfig(工具栏配置)
// createEditor({selector:'元素',config:editorConfig,mode:'default or simple',html:绑定的Html})
// createToolbar({selector:'元素',config:toolbarConfig,mode:'simple or default',editor})

// todo 1.内容设置:获取和处理
// 获取:editor是一个编辑器对象，上面有很多实例方法可以使用，比如：getHtml()获取内容 getText()获取纯文本内容
// *注意，默认获取到的Html是没有样式的，这是为了性能更好，如果要设置样式，可以自定义样式来设置
// 设置:editor.setHtml() 或者editor创建时绑定了一个html,来设置
// 设置text:需要转化为html,在通过setHtml来设置

// todo 2.展示html无样式，就需要我们自定义样式，具体查看官方文档

// todo 3.上传图片uploadImage、视频uploadVideo
// *需要我们在编辑器配置中editorConfig.MENU_CONF['uploadImage']={/*写配置*/}
// !最重要的的是server选项，上传的服务端地址，以及返回的数据格式，具体查看文档

// ?以下查看官方文档配置
// todo 4.工具栏配置

// todo 5.编辑器配置

// todo 6.菜单配置

// todo 7.编辑器API

// todo 8.自定义插件