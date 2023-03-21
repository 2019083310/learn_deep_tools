<template>
  <div>
    <Editor
      :initialValue="editorText"
      :options="editorOptions"
      height="500px"
      initialEditType="markdown"
      previewStyle="vertical"
      ref="toastuiEditor"
    ></Editor>
    <!-- <viewer :initialValue="viewerText" height="500px" /> -->
  </div>
</template>

<script setup>
// !组件目前支持vue2.5以下版本，不支持vue3语法
// import  "../../node_modules/.pnpm/@toast-ui+editor@3.2.2/node_modules/@toast-ui/editor/dist/toastui-editor-viewer.css"
// import  "../../node_modules/.pnpm/@toast-ui+editor@3.2.2/node_modules/@toast-ui/editor/dist/toastui-editor.css"
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import { Editor } from "@toast-ui/vue-editor";
import { Viewer } from "@toast-ui/vue-editor";

const editorText = "This is initialValue.";
const viewerText = "# This is Viewer.\n Hello World.";
const editorOptions = {
  hideModeSwitch: true,
};
</script>

<style scoped></style>
