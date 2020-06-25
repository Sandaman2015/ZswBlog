<template>
  <aplayer
    autoplay
    controls
    v-if="flag"
    :music="{
    title: '前世今生（《白蛇缘起》片尾曲）（翻自 左宏元）',
    artist: '杜南 / 龚子笑',
    src: 'http://m7.music.126.net/20200625170631/a07960a092b1503a9971ce5e9fb674e3/ymusic/075e/025c/520c/049c0bb5455612be6aebef319191d974.mp3',
    pic: 'http://p2.music.126.net/ka7kZIHdviNfYO9lqBaOEQ==/109951163906385177.jpg?param=130y130',
    lrc: ''
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
      this.songList.length = 0;
      //这边是引入了axios然后使用的get请求的一个音乐列表接口
      const getMusicList = url => axios.get(url);
      //这边url随大家更改了
      const getMusicSrc = music => axios.get(music);
      let music = "../../static/data/music.json";
      let url = await getMusicList(music);
      let data = await getMusicList(url.musicSrc);
      let list = data.playlist.trackIds;
      for (let i = 0; i < 50; i++) {
        let musicData = await getMusicList(
          `http://121.36.93.244:3000/song/detail?ids=${list[i].id}`
        );
        let musicUrl = await getMusicList(
          `http://121.36.93.244:3000/song/url?id=${list[i].id}`
        );
        let musicLrc = await getMusicList(
          `http://121.36.93.244:3000/lyric?id=${list[i].id}`
        );
        let music = {
          title: musicData.songs[0].name,
          artist: musicData.songs[0].ar[0].name,
          src: musicUrl.data[0].url,
          pic: musicData.songs[0].al.picUrl,
          lrc: musicLrc.lrc.lyric
        };
        this.songList.push(music);
      }
    }
  }
};
</script>

<style>
</style>