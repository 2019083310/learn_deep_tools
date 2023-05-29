import { memo, useState } from "react";
import { useRequest } from "ahooks";
import { getHomeBannerListFetch } from "../../api/modules/home";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  const [count, setCount] = useState(0);

  // ?retryCount:number 表示发生错误重新请求的次数
  const { data, run } = useRequest(getHomeBannerListFetch, {
    retryCount: 3,
    retryInterval: 3000, //重新请求的间隔
  });
  console.log(data);

  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          run();
          setCount((count) => count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          run();
          setCount((count) => count - 1);
        }}
      >
        -1
      </button>
    </div>
  );
});

export default Home;
