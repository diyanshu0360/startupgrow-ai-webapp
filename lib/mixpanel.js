import mixpanel from "mixpanel-browser";

mixpanel.init(String(process.env.NEXT_PUBLIC_MIX_PANEL_TOKEN), {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

export const trackBtnEvent = (event) => {
  mixpanel.track(event);
};
