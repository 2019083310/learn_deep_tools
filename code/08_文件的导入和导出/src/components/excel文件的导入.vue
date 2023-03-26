<template>
  <div class="file-wrap">
    <!-- 文件导入方式一:通过input file -->
    <div class="export-one">
      <el-button type="primary" @click="handleExportFileClick">导入文件</el-button>
      <input
        type="file"
        ref="inputFileRef"
        accept=".xlsx,.xls,.csv"
        @change="handleFileChange"
      />
    </div>

    <!-- 文件导入方式二:拖拽导入 -->
    <div
      class="export-two"
      @drag.stop.prevent="handleDrag"
      @dragenter.stop.prevent="handleDragEnter"
      @dragover.stop.prevent="handleDragEnter"
    >
      请把文件拖拽到此区域
    </div>

    <!-- 文件导入方式三：利用HTML API -->
    <button @click.stop="handleExportFile" class="export-three" ref="selectFileRef">
      点击选择上传文件
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as XLSX from "xlsx";
import { getHeaderRow, isExcel } from "../utils/03_解析表头函数";

const inputFileRef = ref();
const selectFileRef = ref();

const props = defineProps({
  beforeUpload: Function,
  onSuccess: Function,
});

// ?方式一:input file 这种上传会有很多bug
const handleExportFileClick = () => {
  // inputFileRef.value.click();
  inputFileRef.value.click();
};

const handleFileChange = (e) => {
  const files = e.target.files;
  const file = files[0];

  if (!file) return;
  uploadFn(file);
};

// ?方式二：拖拽
const handleDrag = (e) => {
  console.log(e)
  const files = e.dataTransfer.files;

  if (!files.length) return;
  const rawFile = files[0];

  if (!isExcel(rawFile)) {
    return false;
  }

  uploadFn(rawFile);
};

// 鼠标悬停触发
const handleDragEnter = (e) => {
  // console.log(e)
  // 在新位置生成源项的副本
  e.dataTransfer.dropEffect = "copy";
};

// ?方式三：利用html提供的API
const handleExportFile = async () => {
  const options = {
    types: [
      {
        description: "xlsx",
        accept: {
          "text/csv": ".csv",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
          "application/vnd.ms-excel": ".xls",
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  // const res = await window.showOpenFilePicker(options);
  const [fileHandle] = await window.showOpenFilePicker(options);

  // 获取文件
  const rawFile = await fileHandle.getFile();

  uploadFn(rawFile);
};

// *公共方法：上传函数
const uploadFn = async (rawFile) => {
  // console.log(rawFile)
  inputFileRef.value.value = "";
  // 如果没有指定上传前回调的话
  if (!props.beforeUpload) {
    await readDataFn(rawFile);
    return;
  }

  // 如果指定了上传前回调，那么只有返回 true 才会执行后续操作
  const before = props.beforeUpload(rawFile);
  if (before) {
    await readDataFn(rawFile);
  }
};

// *公共方法：读取数据(异步)
const readDataFn = (rawFile) => {
  // console.log(rawFile);
  return new Promise((resolve, reject) => {
    // 1.新建一个读取arrayBuffer的fileReader
    const reader = new FileReader();

    // 3.监听读取完毕拿到读取的数据
    reader.onload = (e) => {
      // 4.拿到数据
      const data = e.target.result;

      // 5.利用XLSX对其进行解析
      const workbook = XLSX.read(data, { type: "array" });

      // 6.拿到第一张表的名称
      const firstSheetName = workbook.SheetNames[0];

      // 7.读取第一张表的数据
      const worksheet = workbook.Sheets[firstSheetName];

      // 8.解析表头
      const header = getHeaderRow(worksheet);

      // 9.解析数据体
      const results = XLSX.utils.sheet_to_json(worksheet);

      // 10.传入解析后的数据
      props.onSuccess({ header, results });

      // 11.成功
      resolve();
    };

    // 2.读取arrayBuffer
    reader.readAsArrayBuffer(rawFile);
  });
};
</script>

<style lang="less" scoped>
.file-wrap {
  display: flex;
  align-items: center;
  width: 800px;
  height: 200px;
  margin: 200px auto;

  .export-one {
    flex: 1;
    height: 100%;
    line-height: 200px;
    border: 1px solid #666;

    text-align: center;
    input {
      display: none;
      z-index: -9999;
    }
  }

  .export-two {
    flex: 1;
    height: 200px;
    line-height: 200px;
    border: 1px dashed #666;
    border-left: none;

    text-align: center;
  }

  .export-three {
    flex: 1;
    height: 50px;
  }
}
</style>
