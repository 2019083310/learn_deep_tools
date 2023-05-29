import { memo, useRef } from "react";
import { useTextSelection } from "ahooks";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  // ?实时获取用户当前选取的文本内容及位置 Hook
  // 参数:target 要监听的DOM
  // 返回值:{text,width,height,top,left,right,bottom}
  // todo 1.基础使用
  // const { text } = useTextSelection();

  // todo 2.监听特定区域
  const laughRef = useRef(null);
  const { text } = useTextSelection(laughRef);

  return (
    <div>
      <h2>呵呵呵</h2>
      <h2 ref={laughRef}>嘻嘻嘻</h2>
      <h3>{text}</h3>
    </div>
  );
});

export default Home;
