<style lang="scss">
.wrap {
  width: 50%;
}

.veplayer-wrapper {
  width: 100%;
  .xgplayer {
    video {
      position: relative;
    }
  }
}

.common-video-wrap {
  width: 100%;
  video {
    width: 100%;
  }
}
</style>

<template>
  <div class="wrap">
    <div class="veplayer-wrapper">
      <div id="demo01"></div>
    </div>

    <div class="common-video-wrap">
      <video :src="videoUrl" controls></video>
    </div>
  </div>
</template>

<script>
import VePlayer from "@volcengine/veplayer";

export default {
  data() {
    return {
      videoUrl:
        // "https://t-media-volc.jianpian.info/465557033/article/20240425/ac617bc1e81e497f9239148cc7e3c232.mp4",
        "https://t-media-volc.jianpian.info/465557033/article/20240425/3f6de4da3ece4654ae15ab3b40caa545.mov", // hevc mov
    };
  },
  async mounted() {
    await this.$nextTick();
    await this.initPlayer();
  },
  methods: {
    async initPlayer() {
      let url = this.videoUrl || "";
      // 本地地址不做https替换
      if (!url.includes("localhost")) {
        url = url.replace("http://", "https://");
      }
      // eslint-disable-next-line no-console
      console.log(`|----    url`, url);
      // docs https://www.volcengine.com/docs/4/109909

      this.playSdk = new VePlayer({
        id: "demo01",
        url: url,
        ignores: ["playbackRate", "PlaybackRateMobilePlugin", "volume", "pip"],
        vodLogOpts: {
          line_app_id: 583596,
          line_user_id: this.visitorId, // 用户 ID， String 或者 int 类型，不传入将是一个根据用户浏览器随机生成的值。
          tag: "普通视频", // 业务标签，对应业务类型，用于区分业务中不同的场景，方便后续进行多维度分析。
        },
      });
      await this.initListener();
    },
    initListener() {
      this.playSdk.on("play", () => {
        console.log(`|----    play`);
      });

      this.playSdk.on("playing", () => {
        console.log(`|----    playing`);
      });

      this.playSdk.on("replay", () => {
        console.log(`|----    replay`);
      });

      this.playSdk.on("pause", () => {
        console.log(`|----    pause`);
      });

      this.playSdk.on("ended", () => {
        console.log(`|----    ended`);
      });

      this.playSdk.on("error", (err) => {
        // eslint-disable-next-line no-console
        console.log(`|----    veplayer err`, err);
      });

      this.playSdk.on("focus", () => {
        console.log(`|----    focus`);
      });

      this.playSdk.on("blur", () => {
        console.log(`|----    blur`);
      });

      this.playSdk.on("fullscreen_change", (isFullscreen) => {
        console.log(`|----    isFullscreen`, isFullscreen);
      });
    },
  },
};
</script>