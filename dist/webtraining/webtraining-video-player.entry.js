import { h, r as registerInstance } from './index-08f0b029.js';

const YouTubePlayer = ({ source }) => {
  return (h("div", null,
    h("h2", null, "Youtube"),
    h("iframe", { width: "560", height: "315", src: source, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullScreen: true })));
};

const VimeoPlayer = ({ source }) => {
  return (h("div", null,
    h("h2", null, "Vimeo"),
    h("iframe", { width: "560", height: "315", src: source, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullScreen: true })));
};

const webtrainingVideoPlayerCss = "";

var VIDEO_PROVIDERS;
(function (VIDEO_PROVIDERS) {
  VIDEO_PROVIDERS["YOUTUBE"] = "youtube";
  VIDEO_PROVIDERS["VIMEO"] = "vimeo";
})(VIDEO_PROVIDERS || (VIDEO_PROVIDERS = {}));
const WebVideoTraining = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.source = undefined;
    this.provider = VIDEO_PROVIDERS.YOUTUBE;
    this.videos = [
      'https://www.youtube.com/embed/IEvX1i-TDc4?si=mkioAgMf32_orDW-',
      'https://player.vimeo.com/video/546204866?h=c3045d344a&badge=0',
      'https://www.youtube.com/embed/wcAtgRAYQ7o?si=gHH_QtqXj-r3zTgT',
    ];
  }
  render() {
    if (!this.source) {
      return h("div", null, "No video source provided!");
    }
    console.log(this.videos.map((videoSource, index) => index));
    return (h("div", { class: "b-video" }, this.videos.map((videoSource, index) => (h("div", { key: index }, this.provider === VIDEO_PROVIDERS.VIMEO && h(VimeoPlayer, { source: videoSource }), this.provider === VIDEO_PROVIDERS.YOUTUBE && h(YouTubePlayer, { source: videoSource }))))));
  }
};
WebVideoTraining.style = webtrainingVideoPlayerCss;

export { WebVideoTraining as webtraining_video_player };

//# sourceMappingURL=webtraining-video-player.entry.js.map