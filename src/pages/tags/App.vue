<template>
  <div>
    <v-header class="white" />
    <v-content />
    <v-footer />
  </div>
</template>

<script>
import NProgress from "nprogress";
NProgress.start(); //开始
import Header from "../../components/Header";
import Content from "../../modules/tags/TagsContent";
import Footer from "../../components/Footer";
export default {
  components: {
    "v-header": Header,
    "v-content": Content,
    "v-footer": Footer
  },
  data() {
    return {};
  },
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "../../../static/live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-hijiki/assets/",
        tagMode: false,
        debug: false,
        model: {
          jsonPath:
            "../../../static/live2dw/live2d-widget-model-hijiki/assets/hijiki.model.json"
        },
        display: { position: "left", width: 280, height: 350 },
        mobile: { show: true },
        log: false
      });
    }, 1000);
  }
};
</script>

<style socped>
</style>
