import appRequest from "../index";

export const getHomeBannerListFetch = () => {
  return appRequest.request({
    url: "/banner",
    params: {
      type: 0,
    },
  });
};
