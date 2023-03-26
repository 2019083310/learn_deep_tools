// ?借助blob,URL,a download实现前端轻量化导出表格数据
import dayjs from "dayjs";

// config表头 data数据 type导出类型
const exportFn = (config, data, type) => {
  let header = "";
  let row = "";

  // 生成表头 \t制表符  \r\n回车换行
  for (let i in config) {
    header += config[i] + "\t,";
  }
  header += "\r\n";

  data.map((item) => {
    for (let j in item) {
      if (item[j].includes(",")) {
        row += item[j] + "\t";
      } else {
        row += item[j] + "\t,";
      }
    }

    row += "\r\n";
  });

  let csv = header + row;

  const blob = new Blob([csv], { type: `text/${type}` });

  if (true) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute(
      "download",
      `${dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss")}-表格数据.${type}`
    );
    link.setAttribute("href", url);

    link.click();
    URL.revokeObjectURL(link.href);
  }
};

export default exportFn;
