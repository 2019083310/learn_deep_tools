import { memo, useEffect } from "react";
// import { useRequest } from "ahooks";

// import { getHomeBannerListFetch } from "../../api/modules/home";

// eslint-disable-next-line react/display-name
const Home = memo(() => {
  // todo 1.useRequest的简单使用
  // 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数，同时管理该异步函数的loading
  // *这种用法可以帮助我们管理loading,统一处理错误
  // const { loading, error, data } = useRequest(getHomeBannerListFetch);
  // console.log(loading, error, data);

  // todo 2.useRequest的手动触发
  // 上面只传递了一个异步函数，会默认触发，如果传递一些参数配置也可以手动触发
  // 通过run 或者 runAsync来手动触发
  // const { run, runAsync } = useRequest(getHomeBannerListFetch, {
  //   manual: true, //手动触发
  //   onSuccess: (data, params) => {
  // data是网络请求返回的data  params是我们调用run(params)传递过来的params
  //     console.log(data, params);
  //   },
  //   onError: () => {},
  // });

  // useEffect(() => {
  // *通过run手动触发 run是一个同步函数，可以通过options.onError来处理异常
  // run("coder");
  // *通过runAsync手动触发 runAsync是一个异步函数,返回一个promise 意味着我们要自己捕获异常
  // try {
  //   runAsync("coder").then((res) => {
  //     console.log(res);
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
  // }, [runAsync]);

  // todo 3.useRequest提供给我们四个生命周期函数来帮助我们在不同阶段处理不同的事情
  // onSuccess---成功  onError---失败 onBefore---请求之前   onFinally---请求完成

  // todo 4.刷新 useRequest会返回给我们两个函数:refresh refreshAsync来帮助我们重新调用上一次发起请求的参数，重新发送请求
  // const { run, refresh } = useRequest(getHomeBannerListFetch, {
  //   manual: true,
  //   onSuccess(data, params) {
  //     console.log(data, params);
  //   },
  // });

  // useEffect(() => {
  //   run(1);
  // }, [run]);

  // todo 5.取消响应：这里的意思是忽略返回的promise结果，而不是停止请求
  // const { run, cancel } = useRequest(getHomeBannerListFetch, {
  //   manual: true,
  // });

  // useEffect(() => {
  //   run();
  // }, [run]);

  // todo 6.参数管理 设置manual:true的时候，run(params)会返回为[]形式==> run(1,2,3)===>params:[1,2,3]
  // todo manual:false的时候，可以通过defaultParams:[]传递过去

  return (
    <div>
      <h2>Home page</h2>
      {/* <button onClick={refresh} type="primary">
        刷新
      </button> */}
      {/* <button onClick={cancel}>停止响应</button> */}
    </div>
  );
});

export default Home;
