import { memo } from "react";
import { useRequest } from "ahooks";
import { getHomeBannerListFetch } from "../../api/modules/home";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  // ?refreshOnWindowFocus表示当屏幕重新聚焦时候，如果和上一次请求间隔大于 5000ms，则会重新请求一次。
  const { data } = useRequest(getHomeBannerListFetch, {
    refreshOnWindowFocus: true,
    focusTimespan: 5000, //重新请求的间隔时间默认为5000ms
  });
  console.log(data);

  return <div></div>;
});

export default Home;
