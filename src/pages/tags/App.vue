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
  }
};
</script>

<style socped>
</style>
