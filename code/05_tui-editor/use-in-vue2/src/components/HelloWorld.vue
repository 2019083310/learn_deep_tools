<template>
  <div>
    <editor
      :initialValue="editorText"
      :options="editorOptions"
      height="500px"
      initialEditType="wysiwyg"
      previewStyle="vertical"
    ></editor>
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/vue-editor";
export default {
  components: {
    editor: Editor,
  },
  data() {
    return {
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: true,
      },
    };
  },
};
</script>

<style scoped></style>
