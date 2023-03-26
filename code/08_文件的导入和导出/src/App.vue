<template>
  <div>
    <!-- <app-table></app-table> -->
    <!-- <file-import :on-success="handleDataSuccess" :before-upload="handleBeforeUpload"></file-import> -->
  </div>
</template>

<script setup>
// import appTable from "./components/excel文件的导出.vue";
// import fileImport from "./components/excel文件的导入.vue";

// ?处理数据成功
const handleDataSuccess = (data) => {
  console.log(data);
};

// ?上传前回调
const handleBeforeUpload=()=>{
  return true
}
</script>

<style scoped></style>
