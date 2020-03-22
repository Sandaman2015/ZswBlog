<template>
  <div>
    <v-header />
    <v-content></v-content>
    <v-footer class="float" />
  </div>
</template>

<script>
import NProgress from "nprogress";
NProgress.start(); //开始
import Header from "../../components/Header";
import Content from "../../modules/whisper/WhisperContent";
import Footer from "../../components/Footer";
export default {
  components: {
    "v-header": Header,
    "v-content": Content,
    "v-footer": Footer
  },
  data() {
    return {};
  }
};
</script>

<style socped>
.float {
  float: left;
}
</style>
