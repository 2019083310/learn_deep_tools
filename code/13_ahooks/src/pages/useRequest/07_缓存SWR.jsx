import { memo, useState } from "react";
import { useRequest } from "ahooks";
import { getHomeBannerListFetch } from "../../api/modules/home";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  const [toggle, setToggle] = useState(false);

  // ?可以设置cacheKey来启用缓存:，useRequest 会将当前请求成功的数据缓存起来。
  // ?下次组件初始化时，如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求，也就是 SWR 的能力。
  // SWR参考:https://swr.vercel.app/zh-CN
  const { data } = useRequest(getHomeBannerListFetch, {
    cacheKey: "cacheKey-demo",
    staleTime: 5000, //数据新鲜时间，该时间内，我们认为数据是新鲜的，不会重新发起请求。
    cacheTime: 5000, // 设置数据缓存时间，超过该时间，我们会清空该条缓存数据。
  });
  // console.log(data);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "显示" : "隐藏"}
      </button>
      {!toggle && <h2>{JSON.stringify(data.headers)}</h2>}
    </div>
  );
});

export default Home;
