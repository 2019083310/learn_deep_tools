import { memo, useEffect, useState } from "react";
import { useRequest } from "ahooks";
import { getHomeBannerListFetch } from "../../api/modules/home";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  const [count, setCount] = useState(0);

  // ?refreshDeps参数依赖项，表示当依赖发生后，重新发起请求
  const { data } = useRequest(getHomeBannerListFetch, {
    refreshDeps: [count],
  });
  console.log(data);

  // todo 以上代码等价于下面的形式
  const { run } = useRequest(getHomeBannerListFetch, {
    manual: true,
  });
  useEffect(() => {
    run();
  }, [count, run]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
      <button onClick={() => setCount((count) => count - 1)}>-1</button>
    </div>
  );
});

export default Home;
