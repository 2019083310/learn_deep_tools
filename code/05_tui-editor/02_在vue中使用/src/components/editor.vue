<template>
  <div>
    <!-- markdown编辑容器  -->
    <div class="markdown-box"></div>
    <!-- viewer容器 -->
    <div class="viewer-box"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import MkEditor from "@toast-ui/editor";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";

// 引入样式
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/zh-cn";

const editorRef = ref();
const instance = ref();
const viewerRef = ref();
const editorEl = ref();
const viewerEl = ref();

// 初始化markdown编辑器实例
const initEditor = () => {
  // *编辑器
  editorRef.value = new MkEditor({
    el: editorEl.value, //绑定的元素
    height: "500px", //高度
    minHeight: "500px", //最小高度
    previewStyle: "vertical", //编辑器和预览的样式
    editorType: "markdown", //'markdown'||'wysiwyg';
    initialEditType: "markdown", //初始化editorType
    language: "zh-CN", //i18语言国际化
    placeholder: "请输入内容",
    theme: "dark", //主题
    events: {
      // 事件
      load(editorInstance) {
        instance.value = editorInstance;
        // console.log(editorInstance.getHTML())
      },
      focus(...args) {
        // console.log(args)
      },
      blur(editorType) {
        // console.log(editorType)
      },
      change(...args) {
        // console.log(args)
        console.log(instance.value.getHTML());
      },
    },
    hideModeSwitch: true, //隐藏模式切换
    previewHighlight: false, //预览是否高亮
    toolbarItems: [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote"],
      ["ul", "ol", "task", "indent", "outdent"],
      ["table", "image", "link"],
      // ["code", "codeblock"],隐藏代码块
      ["scrollSync"],
    ],
  });

  // *试图 除了markdown的预览模式，我们还可以自定义试图
  viewerRef.value = new Viewer({
    el: viewerEl.value,
  });

  // console.log(editorRef.value);
  // editorRef.value.getMarkdown();
};

// ?销毁markdown实例
onBeforeUnmount(() => {
  instance.value.destroy();
});

// ?挂载到DOM上获取元素初始化编辑器
onMounted(() => {
  editorEl.value = document.querySelector(".markdown-box");
  viewerEl.value = document.querySelector(".viewer-box");

  initEditor();
});
</script>

<style lang="less" scoped></style>
