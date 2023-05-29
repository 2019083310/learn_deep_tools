import { memo } from "react";
import { useHistoryTravel } from "ahooks";

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
const Home = memo(() => {
  // ?管理状态历史变化记录，方便在历史记录中前进与后退。
  const { value, setValue, backLength, forwardLength, back, forward } =
    useHistoryTravel();

  return (
    <div>
      <input value={value || ""} onChange={(e) => setValue(e.target.value)} />
      <button
        disabled={backLength <= 0}
        onClick={back}
        style={{ margin: "0 8px" }}
      >
        back
      </button>
      <button disabled={forwardLength <= 0} onClick={forward}>
        forward
      </button>
    </div>
  );
});

export default Home;
