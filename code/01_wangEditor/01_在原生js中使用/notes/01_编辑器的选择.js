// ?在编辑器上选择需要考虑的点？
// 国内外有很多文本编辑器的插件供我们，但是有很多缺点？
// todo 1.技术老化：Mdn上已经不推荐使用document.execCommand()这个API了,所以如果使用这个API的插件以后可能不稳定有Bug
// todo 2.官网语言不友好：在国外的官网上，都是英语，所以不太友好
// todo 3.只提供核心功能：有的插件只提供编辑器的核心功能，还需要在基础上做二次开发
// todo 4.没有官方的react/vue插件
// todo 5.有的插件还在框架上的支持上受限制

// ?wangEditor编辑器的优点？
// todo 1.稳定性：弃用document.execCommand()使用slate.js，但不依赖react
// todo 2.提供了vue/react的组件供我们简单使用
// todo 3.使用了vDom,做了视图分离
// todo 4.现在已经是v5版本，解决了很多Bug,同时稳定性更强
// todo 5.官方文档是基于中文来使用的，不需要考虑翻译
// todo 6.已经集成了核心功能，无需二次开发
