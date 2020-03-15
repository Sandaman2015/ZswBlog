<template>
  <div class="content">
    <div class="warp">
      <v-left :articleList="articleList" />
      <v-right
        :allClassArticleList="allClassArticleList"
        :guestList="guestList"
        :hotLikeArticleList="hotLikeArticleList"
        :hotVisitArticleList="hotVisitArticleList"
        @GetArticlePageByClass="startGetPageByClass"
        @ReturnAllArticle="pageLoad"
        @SearchArticle="searchArticle"
      />
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import LeftContent from "./WhisperLeftContent";
import RightContent from "./WhisperRightContent";
import {
  getArticlesByPage,
  getArticlesPageByClass,
  getArticleOnLike,
  getArticleOnClassType,
  getArticleOnVisit,
  getArticleByDimTitle
} from "../../../static/js/api/article.api";
import { getNearUsers } from "../../../static/js/api/user.api";
import { Form } from "element-ui";
export default {
  components: {
    "v-left": LeftContent,
    "v-right": RightContent
  },
  data() {
    return {
      articleList: [],
      guestList: [],
      allClassArticleList: ["", "", "", ""],
      hotLikeArticleList: [],
      hotVisitArticleList: []
    };
  },
  created() {
    this.pageLoad();
  },
  watch: {
    articleList() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        var wow = new WOW({
          live: false
        });
        wow.init();
      });
    }
  },
  methods: {
    async pageLoad() {
      await getArticlesByPage(3, 1).then(e => {
        this.articleList = e;
      });
      await getArticleOnClassType().then(e => {
        this.allClassArticleList = e;
      });
      await getArticleOnVisit().then(e => {
        this.hotVisitArticleList = e;
      });
      await getArticleOnLike().then(e => {
        this.hotLikeArticleList = e;
      });
      await getNearUsers().then(e => {
        this.guestList = e;
      });
    },
    async startGetPageByClass(pageSize, pageIndex, classType) {
      classType = classType.replace("#", "%23");
      await getArticlesPageByClass(pageSize, pageIndex, classType).then(e => {
        this.articleList = e;
      });
    },
    async searchArticle(title) {
      await getArticleByDimTitle(title).then(e => {
        this.articleList = e;
      });
    }
  }
};
</script>

<style scoped>
</style>