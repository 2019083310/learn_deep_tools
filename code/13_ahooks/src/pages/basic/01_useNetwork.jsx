import { memo } from "react";
import { useNetwork } from "ahooks";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  // ?管理网络连接状态的 Hook。返回当前的网络状态信息
  const networkInfo = useNetwork();
  console.log(networkInfo);

  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
});

export default Home;
