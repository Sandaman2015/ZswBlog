<template>
  <div>
    <index-content />
    <scroll-top />
  </div>
</template>

<script>
import ScrollTop from "../../components/GoToTop";
import IndexContent from "../../modules/index/IndexContent";
export default {
  components: {
    "index-content": IndexContent,
    "scroll-top": ScrollTop
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://v1.cnzz.com/z_stat.php?id=1278706390&web_id=1278706390"; //友盟中的代码
    script.language = "JavaScript";
    document.getElementsByClassName("header")[0].appendChild(script);
  }
};
</script>

