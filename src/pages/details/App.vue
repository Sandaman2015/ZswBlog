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
import { WOW } from "wowjs";
import Header from "../../components/Header";
import Content from "../../modules/details/DetailsContent";
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
  mounted() {
    new WOW().init();
  }
};
</script>

<style socped>
.float {
  float: left;
}
</style>
