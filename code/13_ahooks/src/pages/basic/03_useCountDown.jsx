import { memo } from "react";
import { useCountDown } from "ahooks";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  // ?管理倒计时的 Hook
  // 参数params:{target:目标时间TDate TDate = Date | number | string | undefined}
  // 返回值:[countDown,formattedRes] formattedRes: {days: number; hours: number;minutes: number;seconds: number;  milliseconds: number};
  // todo 1.基础用法
  const [countdown, formattedRes] = useCountDown({
    targetDate: `${new Date().getFullYear()}-12-31`,
  });
  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  // todo 2.lifeTime配置剩余时间
  const [countdownNum] = useCountDown({ leftTime: 60 * 1000 });

  return (
    <p>
      {countdownNum}
      <br />
      {/* countdown 倒计时毫秒 */}
      {countdown}
      There are {days} days {hours} hours {minutes} minutes {seconds} seconds{" "}
      {milliseconds} milliseconds until {new Date().getFullYear()}-12-31
      23:59:59
    </p>
  );
});

export default Home;
