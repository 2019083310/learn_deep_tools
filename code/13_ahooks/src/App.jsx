// eslint-disable-next-line no-unused-vars
import React, { memo } from "react";

// import Home from "./pages/useRequest/01_基础使用";
// import Home from "./pages/useRequest/02_loading-delay";
// import Home from "./pages/useRequest/03_轮询";
// import Home from "./pages/useRequest/04_依赖刷新";
// import Home from "./pages/useRequest/05_屏幕聚焦重新请求";
// import Home from "./pages/useRequest/06_防抖";
// import Home from "./pages/useRequest/07_缓存SWR";
// import Home from "./pages/useRequest/08_错误重试";
// import Home from "./pages/basic/01_useNetwork";
// import Home from "./pages/basic/02_useCount";
// import Home from "./pages/basic/03_useCountDown";
// import Home from "./pages/basic/04_useTextSelection";
import Home from "./pages/basic/05_useHistoryTravel";

// eslint-disable-next-line react/display-name
const App = memo(() => {
  return (
    <div>
      <Home />
    </div>
  );
});

export default App;
