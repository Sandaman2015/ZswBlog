<template>
  <div>
    <v-header />
    <v-content />
    <flexform />
    <v-footer />
  </div>
</template>

<script>
import NProgress from "nprogress";
NProgress.start(); //开始
import { WOW } from "wowjs";
import Header from "../../components/Header";
import Content from "../../modules/link/LinkContent";
import FlexForm from "../../modules/link/FlexLinkForm";
import Footer from "../../components/Footer";
export default {
  components: {
    "v-header": Header,
    "v-content": Content,
    "v-footer": Footer,
    flexform: FlexForm
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
.layui-field-title {
  margin: 10px 0 20px;
  border-width: 1px 0 0;
}
.layui-elem-field {
  margin-bottom: 10px;
  padding: 0;
  border-width: 1px;
  border-style: solid;
}
.link-content-middle .layui-elem-field legend[data-v-4083b86a] {
  font-weight: 500;
}
.layui-elem-field legend {
  margin-left: 20px;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 300;
}
.layui-elem-quote {
  margin-bottom: 10px;
  padding: 15px;
  line-height: 22px;
  border-left: 5px solid #409eff;
  border-radius: 0 2px 2px 0;
  background-color: #f2f6fc;
}
.link-content-middle .layui-elem-quote p[data-v-4083b86a] {
  margin: 10px 0 10px 0;
  color: black;
}
.link-content-middle .layui-elem-quote h1[data-v-4083b86a],
span[data-v-4083b86a] {
  color: black;
}
/* .layui-icon {
  font-family: layui-icon !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
.layui-bg-blue {
  background-color: #1e9fff !important;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.fa-check {
  color: green;
}
.fa-times {
  color: red;
}
</style>
