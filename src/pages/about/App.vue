<template>
  <div>
    <v-header class="white" />
    <Illustration />
    <v-content />
    <v-footer />
  </div>
</template>

<script>
import NProgress from "nprogress";
NProgress.start(); //开始
import { WOW } from "wowjs";
import Header from "../../components/Header";
import Content from "../../modules/about/AboutContent";
import Footer from "../../components/Footer";
import Illustration from "../../components/Illustration";
export default {
  components: {
    "v-header": Header,
    "v-content": Content,
    "v-footer": Footer,
    Illustration: Illustration
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
.white {
  background-color: rgba(255, 255, 255, 0) !important;
}
/* .white a {
  color: white !important;
} */

/* .white p {
  color: white !important;
} */

/* .white h1 {
  color: white !important;
}

.white h2 {
  color: white !important;
} */
</style>
