import { memo } from "react";
import { useRequest } from "ahooks";
import { getHomeBannerListFetch } from "../../api/modules/home";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  // ?设置pollingInterval为时间 可以每隔interval时间发起网络请求
  // ?设置pollingErrorRetryCount表示请求出错 轮询重试次数
  // ?设置pollingWhenHidden 表示当页面隐藏时，停止轮询
  const { data } = useRequest(getHomeBannerListFetch, {
    pollingInterval: 3000,
    pollingErrorRetryCount: 3,
    pollingWhenHidden: true,
  });
  console.log(data);

  return <div>Home</div>;
});

export default Home;
