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
import dayjs from "dayjs";
import exportFn from "../../utils/01_轻量化导出方式";
import { export_json_to_excel } from "../../utils/02_借用第三方库实现";

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
  // todo 导出csv方式1
  // exportFn(header, tableData, "csv");

  // todo 导出csv方式2
  // 传入的data要求是一个二维数组
  const data = tableData.map((item) => {
    return Object.keys(item).map((v) => {
      return item[v];
    });
  });

  // 传入的Header也要是一个数组
  const tableHeader = Object.values(header);

  export_json_to_excel({
    header: tableHeader,
    data,
    bookType: "csv",
    filename: dayjs(Date.now()).format("YYYY-MM-DD HH-mm") + "-" + "数据",
    autoWidth: true,
  });
};

const handleExportExcel = () => {
  // todo 导出方式1
  // exportFn(header, tableData, "excel");

  // todo 导出csv方式2
  // 传入的data要求是一个二维数组
  const data = tableData.map((item) => {
    return Object.keys(item).map((v) => {
      return item[v];
    });
  });

  // 传入的Header也要是一个数组
  const tableHeader = Object.values(header);

  export_json_to_excel({
    header: tableHeader,
    data,
    filename: dayjs(Date.now()).format("YYYY-MM-DD HH-mm") + "-" + "数据",
    autoWidth: true,
  });
};
</script>
