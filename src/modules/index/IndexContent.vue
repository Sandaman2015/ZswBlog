<template>
  <!-- <div class="wrap" id="wrap"> -->
  <div class="wrapper">
    <video id="v1" autoplay loop style="width: 100%" :src="videoSrc" :poster="poster">
      <!-- <source :src="videoSrc" /> -->
    </video>
    <div class="product_list" id="product_list">
      <div class="product_box shoulei show">
        <div class="bg_box">
          <!-- <img :src="img1" /> -->
        </div>
        <div class="content">
          <div class="main_box">
            <h2 class="hide_txt png"></h2>
            <a
              href="#"
              class="btn_product"
              title="Pursue yourself and become more perfect！ 追求自我，成为更完美！"
            >
              Pursue
              yourself and become more perfect！ 追求自我，成为更完美！
            </a>
          </div>
        </div>
      </div>
      <div class="product_box xnet">
        <div class="bg_box">
          <!-- <img :src="img2" /> -->
        </div>
        <div class="content">
          <div class="main_box">
            <h2 class="hide_txt png"></h2>
            <a
              href="#"
              class="btn_product"
              title="Maybe it was better to just really enjoy life.
            享受生活，顺其自然。"
            >
              Maybe it was better to just really enjoy life.
              享受生活，顺其自然。
            </a>
          </div>
        </div>
      </div>
      <div class="product_box member">
        <div class="bg_box">
          <!-- <img :src="img3" /> -->
        </div>
        <div class="content">
          <div class="main_box">
            <h2 class="hide_txt png"></h2>
            <a
              href="#"
              class="btn_product"
              title=" Above all, we should first be kind, then honest, and then never forget each other.最要紧的是，我们首先应该善良，其次要诚实，再其次是以后永远不要相互遗忘。"
            >
              Above all, we should first be kind, then honest, and then never forget each other.
              最要紧的是，我们首先应该善良，其次要诚实，再其次是以后永远不要相互遗忘。
            </a>
          </div>
        </div>
      </div>
      <div class="product_box xkn">
        <div class="bg_box">
          <!-- <img :src="img4" /> -->
        </div>
        <div class="content">
          <div class="main_box">
            <h2 class="hide_txt png"></h2>
            <a
              href="#"
              class="btn_product"
              title="All the longevity in this world is due to intentions.这世上所有的久处不厌，都是因为用心。"
            >
              Allthe longevity in this world is due to intentions.
              这世上所有的久处不厌，都是因为用心。
            </a>
          </div>
        </div>
      </div>
      <div class="product_box xav">
        <div class="bg_box">
          <!-- <img :src="img5" /> -->
        </div>
        <div class="content">
          <div class="main_box">
            <h2 class="hide_txt png"></h2>
            <a
              href="#"
              class="btn_product"
              title="Years are quiet, from youth to dusk, only affectionate hoary head.岁月静好，从年少到暮夕，唯有深情共白头。"
            >
              Years are quiet, from youth to dusk, only affectionate hoary head.
              岁月静好，从年少到暮夕，唯有深情共白头。
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="product_btns" id="product_btns">
      <div class="content">
        <div class="btns_area">
          <div class="btns_box" id="control_box">
            <a
              href="#"
              class="btn_ipr btn_shoulei cur"
              title="追求自我，成为更完美！Pursue yourself and become more perfect"
            >
              <span
                class="ic_shoulei hide_txt png"
              >追求自我，成为更完美！Pursue yourself and become more perfect</span>
            </a>
            <a
              href="#"
              class="btn_xnet"
              title="Maybe it was better to just really enjoy life.
            享受生活，顺其自然。"
            >
              <span class="ic_xnet hide_txt png">
                Maybe it was better to just really enjoy life.
                享受生活，顺其自然。
              </span>
            </a>
            <a
              href="#"
              class="btn_member"
              title="最要紧的是，我们首先应该善良，其次要诚实，再其次是以后永远不要相互遗忘。Above all, we should first be kind, then honest, and then never forget each other."
            >
              <span class="ic_member hide_txt png">
                最要紧的是，我们首先应该善良，其次要诚实，
                再其次是以后永远不要相互遗忘。
                Above all, we should first be kind, then honest, and then never forget each other.
              </span>
            </a>
            <a
              href="#"
              class="btn_xkn"
              title="这世上所有的久处不厌，都是因为用心。All the longevity in this world is due to intentions."
            >
              <span class="ic_xkn hide_txt png">
                这世上所有的久处不厌，都是因为用心。All the longevity in this world is due to
                intentions.
              </span>
            </a>
            <a
              href="#"
              class="btn_xav"
              title="岁月静好，从年少到暮夕，唯有深情共白头。Years are quiet, from youth to dusk, only affectionate hoary head."
            >
              <span class="ic_xav hide_txt png">
                岁月静好，从年少到暮夕，唯有深情共白头。Years are quiet, from youth to dusk, only
                affectionate hoary head.
              </span>
            </a>
            <span class="ic_line" id="ic_line"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="rpt_bg png" id="rpt_bg"></div>
  </div>
  <!-- </div> -->
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      videoSrc: "",
      poster: ""
    };
  },
  created() {
    axios
      .get("../../../static/data/indexVideo.json")
      .then(resolve => {
        this.videoSrc = resolve.videosrc;
        this.poster = resolve.poster;
      })
      .catch(e => {
        console.log("请求视频失败,请刷新重试！", e);
      });
  }
};
</script>
<style scoped>
video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -9999;
  /*灰色调*/
  /*-webkit-filter:grayscale(100%)*/
}
</style>