import { memo } from "react";
import { useCounter } from "ahooks";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  // ?管理计数器的 Hook
  // 参数一:initialCount 参数二:{min:number,max:number}
  // 返回值:[current,{inc,dec,set,reset}] current当前值 inc+ dec- set reset重置
  const [count, { inc, dec, set, reset }] = useCounter(100, {
    min: 5,
    max: 101,
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dec()}>dec</button>
      <button onClick={() => set(50)}>set</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
});

export default Home;
