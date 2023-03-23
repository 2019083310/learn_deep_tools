<template>
  <div class="table-wrap">
    <div class="table-heder">
      <el-button @click="handleExportExcel" type="primary">导出excel</el-button>
      <el-button @click="handleExportCsv" type="primary">导出csv</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <!-- <input type="file" multiple> -->
  </div>
</template>

<script setup>
import exportFn from "../utils/01_轻量化导出方式";

const header = {
  column1: "日期",
  column2: "名称",
  column3: "地址",
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const handleExportCsv = () => {
  exportFn(header, tableData, "csv");
};

const handleExportExcel = () => {
  exportFn(header, tableData, "excel");
};
</script>
