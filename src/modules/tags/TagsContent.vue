<template>
  <div class="content">
    <div class="cont">
      <div class="tagItem">
        <article v-for="(item,index) in tagsList" :key="index" class="wow slideInDown">
          <h3 :class="item.tagClass">
            <i class="fa fa-tag" aria-hidden="true"></i>
            {{item.tagName}}
          </h3>
          <section v-for="(article,indexS) in item.articleList" :key="indexS">
            <span class="point-time point-yellow"></span>
            <time datetime="2013-03">
              <a :href="'details.html?ArticleDetails='+article.articleId">
                <span>{{article.articleTitle}}</span>
              </a>
              <!-- <span>2013</span> -->
            </time>
            <aside>
              <p class="things">{{article.articleContent}}</p>
              <p class="brief">
                <span :class="article.spanClass">{{article.articleTime| filterDate}}</span>
              </p>
            </aside>
          </section>
        </article>
      </div>
      <div class="ad">
        <div class="whitebg cloud">
          <h2 class="htitle">天气</h2>
          <weather height="300" />
        </div>
        <div class="whitebg cloud">
          <h2 class="htitle">标签云</h2>
          <ul>
            <a href="javascript:void(0)" class="wow bounceInDown" @click="pageLoad()">所有标签</a>
            <a
              href="javascript:void(0)"
              v-for="(item,indexT) in tagsCloud"
              :key="indexT"
              class="wow bounceInDown"
              @click="getTagId(item.tagId)"
            >{{item.tagName}}</a>
          </ul>
        </div>
        <div class="whitebg cloud">
          <h2 class="htitle">音乐</h2>
          <music-location />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 本站标签
import {
  getAllTags,
  getTagsAndArticles,
  getArticlesByTagId
} from "../../../static/js/api/tag.api";
import weather from "../../components/weather";
import MusicLocation from "../../components/VueAplayer";
import { WOW } from "wowjs";
export default {
  components: {
    MusicLocation,
    weather
  },
  data() {
    return {
      index: 0,
      tagsList: [],
      tagsCloud: []
    };
  },
  watch: {
    tagsCloud() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        let wow = new WOW({
          live: false
        });
        wow.init();
      });
    }
  },
  async mounted() {
    this.index = this.$route.query.index;
    if (this.index > 0) {
      await this.getTagId(this.index);
      await this.getTags();
    } else {
      await this.getTags();
      await this.pageLoad();
    }
  },
  filters: {
    filterDate(date) {
      return date.substring(0, 10);
    }
  },
  methods: {
    async pageLoad() {
      await getTagsAndArticles().then(e => {
        this.tagsList = e;
      });
    },
    async getTags() {
      await getAllTags().then(e => {
        this.tagsCloud = e;
      });
    },
    async getTagId(id) {
      await getArticlesByTagId(id).then(e => {
        this.tagsList = [];
        this.tagsList[0] = e;
      });
    }
  }
};
</script>

<style scoped>
@import url("../../pages/tags/assets/css/tags.css");
</style>