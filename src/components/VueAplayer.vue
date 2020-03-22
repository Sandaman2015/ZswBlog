<template>
  <aplayer
    autoplay
    controls
    v-if="flag"
    :music="{
    title: 'Close/Remix 80s',
    artist: 'TRONICBOX',
    src: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=0&type=lrc&id=536098013',
    pic: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=0&type=lrc&id=536098013',
    lrc: 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=0&type=lrc&id=536098013'
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
      const getMusicSrc = music => axios.get(music);
      let music = "../../static/data/music.json";
      let url = await getMusicList(music);
      let data = await getMusicList(url.musicSrc);
      this.songList = data.Body;
    }
  }
};
</script>

<style>
</style>