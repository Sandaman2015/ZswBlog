<template>
  <div class="content">
    <div class="cont">
      <div class="tagItem">
        <article v-for="(item,index) in tagsList" class="wow slideInDown">
          <h3 :class="item.tagClass">
            <i class="fa fa-tag" aria-hidden="true"></i>
            {{item.tagName}}
          </h3>
          <section v-for="(article,index) in item.articleList">
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
          <h2 class="htitle">标签云</h2>
          <ul>
            <a href="javascript:void(0)" class="wow bounceInDown" @click="pageLoad()">所有标签</a>
            <a
              href="javascript:void(0)"
              v-for="(item,index) in tagsCloud"
              class="wow bounceInDown"
              @click="getTagId(item.tagId)"
            >{{item.tagName}}</a>
          </ul>
        </div>
        <div style="font-weight:bold;padding:10px;text-align:center;margin-bottom:15px;">
          <div style="margin-bottom:8px;">
            <span style="line-height:1.8;font-size:15px;">专注实战 • 分享技巧 • 提升技术</span>
            <br />
            <span style="color:#666;">
              扫描二维码关注『
              <b style="color:red;">DotNetCore实战</b>』公众号
            </span>
          </div>
          <div>
            <img
              style="width:100%;"
              src="https://www.cnblogs.com/images/cnblogs_com/yilezhu/1359617/o_qrcode_for_gh_3d7593c84946_258.jpg"
              alt="关注公众号：DotNetCore实战"
            />
          </div>

          <div style="margin-bottom:8px;">
            <span style="line-height:1.8;font-size:15px;">.NET Core微服务实战教程</span>
            <br />
            <span style="color:#666;">
              微信扫描二维码『
              <b style="color:red;">免费试看</b>』
            </span>
          </div>
          <div>
            <img
              style="width:100%;"
              src="https://images.cnblogs.com/cnblogs_com/yilezhu/1367833/o_200118034131%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200113195132.jpg"
              alt=".NET Core微服务实战教程"
            />
          </div>
        </div>
      </div>
      <div class="rightContent"></div>
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
import { WOW } from "wowjs";
export default {
  name: "tags-site",
  data() {
    return {
      index: 0,
      tagsList: [],
      tagsCloud: []
    };
  },
  watch: {
    tagsList() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        var wow = new WOW({
          live: false
        });
        wow.init();
      });
    },
    tagsCloud() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        var wow = new WOW({
          live: false
        });
        wow.init();
      });
    }
  },
  mounted() {
    this.index = this.$route.query.index;
    if (this.index > 0) {
      this.getTagId(this.index);
      this.getTags();
    } else {
      this.getTags();
      this.pageLoad();
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
article,
section,
time,
aside {
  display: block;
}

body {
  color: #9f9f9f;
  background: #fff;
  font-size: 1.16em;
  font-family: "Lato", Calibri, Arial, sans-serif;
}

.point-time {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  top: 17px;
  left: 40%;
  background: #1c87bf;
  margin-left: -4px;
  border-radius: 50%;
  box-shadow: 0 0 0 5px #fff;
}

.text-red {
  color: #f6393f;
}

.text-blue {
  color: #1c87bf;
}
.text-grew {
  color: #9f9f9f;
}
.text-green {
  color: #95c91e;
}

.text-yellow {
  color: #ffb902;
}

.text-purple {
  color: #d32d93;
}

.point-red {
  background-color: #f6393f;
}

.point-blue {
  background-color: #1c87bf;
}

.point-green {
  background-color: #95c91e;
}

.point-yellow {
  background-color: #ffb902;
}

.point-purple {
  background-color: #d32d93;
}
.leftContent {
  width: 600px;
  margin: 0 15px;
  min-height: 800px;
  float: left;
}
article {
  position: relative;
  border-radius: 25px;
  width: 500px;
}
article:hover {
  cursor: pointer;
  border: #fa6854 solid 1px;
  transition: 1s;
}
.tagItem {
  width: 60%;
  float: left;
  min-height: 660px;
}
.tagItem article:first-child h3 {
  color: #036564;
}
.tagItem article:nth-child(8n-7) h3 {
  color: #beedc7;
}
.tagItem article:nth-child(8n-6) h3 {
  color: #eb6841;
}
.tagItem article:nth-child(8n-5) h3 {
  color: #3fb8af;
}
.tagItem article:nth-child(8n-4) h3 {
  color: #19caad;
}
.tagItem article:nth-child(8n-3) h3 {
  color: #fc9d9a;
}
.tagItem article:nth-child(8n-2) h3 {
  color: #edc951;
}
.tagItem article:nth-child(8n-1) h3 {
  color: #ed4014;
}
.tagItem article:nth-child(8n) h3 {
  color: #2db7f5;
}
article h3 {
  width: 35%;
  height: 20px;
  line-height: 20px;
  text-align: right;
  font-size: 1.4em;
  padding: 10px 0 20px;
}
article section {
  padding: 0 0 17px;
  position: relative;
  margin-left: 25px;
}
article section:before {
  content: "";
  width: 5px;
  top: 17px;
  bottom: -17px;
  left: 40%;
  background: #e6e6e6;
  position: absolute;
}
article section:last-child:before {
  display: none;
}
article a {
  color: #1d1d1d;
  text-decoration: none;
}
article a:hover {
  transition: 0.5s;
  color: #1c87bf;
  text-decoration: underline;
}
article section time {
  width: 25%;
  display: block;
  position: absolute;
}
article section time > span {
  display: block;
  text-align: right;
}
article section aside {
  color: #3a3a38;
  margin-left: 45%;
  padding-bottom: 15px;
}
article section .brief {
  color: #9f9f9f;
}
.ad {
  float: left;
  width: 300px;
  min-height: 800px;
  border-radius: 10px;
  border: #999 solid 1px;
}
.ad:hover {
  border: #fc9d9a solid 1px;
  transition: 0.5s;
}
.whitebg {
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}
.htitle {
  font-size: 16px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  color: #484848;
  font-weight: normal;
  position: relative;
  margin-bottom: 10px;
}
.cloud ul a {
  line-height: 24px;
  height: 24px;
  display: block;
  background: #999;
  float: left;
  padding: 3px 10px;
  margin: 10px 5px 0 0;
  border-radius: 3px;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  color: #fff;
}
.cloud ul a:hover {
  color: black;
  transition: 0.5s;
}
.cloud ul a {
  text-decoration: none;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
.cloud ul a:first-child {
  background: #036564;
}
.cloud ul a:nth-child(8n-7) {
  background: #beedc7;
}
.cloud ul a:nth-child(8n-6) {
  background: #eb6841;
}
.cloud ul a:nth-child(8n-5) {
  background: #3fb8af;
}
.cloud ul a:nth-child(8n-4) {
  background: #19caad;
}
.cloud ul a:nth-child(8n-3) {
  background: #fc9d9a;
}
.cloud ul a:nth-child(8n-2) {
  background: #edc951;
}
.cloud ul a:nth-child(8n-1) {
  background: #ed4014;
}
.cloud ul a:nth-child(8n) {
  background: #2db7f5;
}
</style>