<template>
  <div class="wrap" id="wrap">
    <index-content />
  </div>
</template>

<script>
import IndexContent from "../../modules/index/IndexContent";
export default {
  components: {
    "index-content": IndexContent
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://v1.cnzz.com/z_stat.php?id=1278706390&web_id=1278706390"; //友盟中的代码
    script.language = "JavaScript";
    document.getElementsByClassName("wrap")[0].appendChild(script);
  }
};
</script>

