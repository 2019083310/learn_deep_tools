import { memo, useState } from "react";
import { useRequest } from "ahooks";
import { getHomeBannerListFetch } from "../../api/modules/home";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  const [count, setCount] = useState(0);

  // ?当我们手动触发的时候，如果频繁触发run或者runAsync方法，可以通过debounceWait:number来进行优化
  const { data, run } = useRequest(getHomeBannerListFetch, {
    debounceWait: 3000,
    debounceLeading: false, //在延迟开始前执行
    debounceTrailing: true, //在延迟时间后开始执行
    manual: true,
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
