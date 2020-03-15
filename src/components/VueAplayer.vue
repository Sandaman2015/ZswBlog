<template>
  <aplayer
    autoplay
    controls
    v-if="flag"
    :music="{
    title: '冬眠',
    artist: '司南',
    src: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=0&type=url&id=1398663411',
    pic: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=0&type=pic&id=1398663411',
    lrc: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=0&type=pic&id=1398663411'
  }"
    :float="true"
    :list="songList"
    :showLrc="true"
    class="player"
  ></aplayer>
</template>

<script>
import axios from "axios";
import Aplayer from "vue-aplayer";
export default {
  components: {
    Aplayer
  },
  data() {
    return {
      flag: false,
      songList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.flag = true;
      //这边是引入了axios然后使用的get请求的一个音乐列表接口
      const getMusicList = url => axios.get(url);
      //这边url随大家更改了
      let url =
        "https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=songlist&id=585511463";
      let data = await getMusicList(url);
      this.songList = data.Body;
    }
  }
};
</script>

<style>
</style>