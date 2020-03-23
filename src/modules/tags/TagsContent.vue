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
@import url("../../pages/tags/assets/css/tags.css");
</style>