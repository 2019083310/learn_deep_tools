// ?开始创建编辑器和菜单栏
const { createEditor, createToolbar } = window.wangEditor;

// 定义编辑器的配置
const editorConfig={
  placeholder:'请输入内容...',
  onChange(editor){
    const html=editor.getHtml()
    console.log(html)
  }
}

// 创建编辑器
const editor=createEditor({
  // 传入配置信息
  selector:'.editor-bar-wrap',
  html:'<p>hello coder</p>',//绑定的html值
  config:editorConfig,
  mode:'default'//模式,simple两种
})

// 定义工具栏配置
const toolbarConfig={}

// 创建工具栏
const toolbar=createToolbar({
  editor,//必须：表示为editor创建一个工具栏
  selector:'.tool-bar-wrap',
  config:toolbarConfig,
  mode:'default'
})