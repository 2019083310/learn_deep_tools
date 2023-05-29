import { memo } from "react";
import { useRequest } from "ahooks";
import { getHomeBannerListFetch } from "../../api/modules/home";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  // ?设置loadingDelay为number可以延长loading变为true的时间，有效的防止闪烁
  const { loading } = useRequest(getHomeBannerListFetch, {
    loadingDelay: 300,
  });
  console.log(loading);

  return <div>Home</div>;
});

export default Home;
