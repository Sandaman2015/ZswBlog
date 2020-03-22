<template>
  <div class="left-articlelist">
    <!-- <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
      <legend>信息流 - 滚动加载</legend>
    </fieldset>-->
    <ul class="flow-default" id="LAY_demo1">
      <li
        v-for="(item,index) in articleList"
        data-wow-delay="0.5s"
        data-wow-duration="1s"
        class="wow zoomIn"
      >
        <div class="post-wrapper">
          <article
            class="post reveal"
            data-sr-id="0"
            style="visibility: visible; opacity: 1; transition: opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0s;"
          >
            <section class="meta">
              <a
                :title="item.articleTitle"
                href="javascript:void(0)"
                @click="jumpToDetails(item.articleId)"
              ></a>
              <!-- <img class="thumbnail" src="https://cdn.jsdelivr.net/gh/TRHX/ImageHosting/ITRHX-PIC/thumbnail/combat.png"> -->
              <div class="meta" id="header-meta">
                <h2 class="title">
                  <a
                    href="javascript:void(0)"
                    @click="jumpToDetails(item.articleId)"
                  >{{item.articleTitle}}</a>
                </h2>
                <div class="new-meta-box">
                  <div class="new-meta-item author">
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="嘴炮小贱贱就是我！"
                      placement="left-start"
                    >
                      <a href="http://www.zswblog.xyz" rel="nofollow">
                        <img class="article-image" src="../../../static/images/me.jpg" />
                        <p>{{item.articleCreatedBy}}</p>
                      </a>
                    </el-tooltip>
                  </div>
                  <div class="new-meta-item date">
                    <a class="notlink">
                      <i class="fa fa-calendar" aria-hidden="true"></i>
                      <p>{{item.articleTime|dateFilter}}</p>
                    </a>
                  </div>
                  <div class="new-meta-item category">
                    <a href="javascript:void(0)" rel="nofollow">
                      <i class="fa fa-folder-open" aria-hidden="true"></i>
                      <p>&nbsp;{{item.articleClass}}</p>
                    </a>
                  </div>
                  <div class="new-meta-item wordcount">
                    <a class="notlink">
                      <i class="fa fa-keyboard-o" aria-hidden="true"></i>
                      <p>字数统计:</p>
                      <p>{{item.articleTextCount}}字</p>
                    </a>
                  </div>
                  <div class="new-meta-item readtime">
                    <a class="notlink">
                      <i class="fa fa-hourglass-half" aria-hidden="true"></i>
                      <p>阅读时长:</p>
                      <p>{{item.articleReadTime}}分钟</p>
                    </a>
                  </div>
                  <div class="new-meta-item visitscount">
                    <a class="notlink">
                      <i class="fa fa-envira" aria-hidden="true"></i>
                      <p>浏览数:</p>
                      <p>{{item.articleVisits}}</p>
                    </a>
                  </div>
                  <div class="new-meta-item likescount">
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="看见这赞这么少！还不点进去点个赞！"
                      placement="top-start"
                    >
                      <a class="notlink">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <p>点赞数:</p>
                        <p>{{item.articleLikes}}</p>
                      </a>
                    </el-tooltip>
                  </div>
                </div>
                <hr />
              </div>
            </section>
            <section class="article typo">
              <div class="article-entry" itemprop="articleBody">
                <div class="content-body">
                  <img class="articleImage" :src="item.articleImage" />
                  <p class="article-content" v-html="item.articleContent">{{item.articleContent}}</p>
                </div>
                <hr />
                <div class="readmore">
                  <a
                    href="javascript:void(0)"
                    @click="jumpToDetails(item.articleId)"
                    class="flat-box waves-effect waves-block"
                  >
                    <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                    阅读全文
                  </a>
                </div>
              </div>
              <div class="full-width auto-padding tags">
                <a
                  href="javascript:void(0)"
                  rel="nofollow"
                  v-for="(tags,index) in item.articleTags"
                >
                  &nbsp;
                  <i class="fa fa-tag"></i>
                  &nbsp;{{tags}}
                </a>
              </div>
            </section>
          </article>
        </div>
      </li>
    </ul>
    <div class="load-more">
      <el-button
        @click="loadMore()"
        :disabled="disabledBtn"
        size="small"
        :loading="load"
      >{{loadMoreText}}</el-button>
    </div>
  </div>
</template>
<script>
import {
  getArticlesByPage,
  getArticlesPageByClass
} from "../../../static/js/api/article.api";
export default {
  props: {
    articleList: {
      type: Array
    },
    isClassType: {
      type: Boolean
    },
    classType: {
      type: String
    }
  },
  data() {
    return {
      load: true,
      loadMoreText: "加载ing",
      pageSize: 3,
      pageIndex: 1,
      disabledBtn: false
    };
  },
  filters: {
    dateFilter(date) {
      return date.substring(0, 10);
    }
  },
  updated() {
    this.load = false;
    this.loadMoreText = "加载更多";
  },
  methods: {
    async loadMore() {
      this.load = true;
      this.pageIndex++;
      var that = this;
      if (!this.isClassType) {
        await getArticlesByPage(this.pageSize, this.pageIndex).then(e => {
          if (e.length < 3) {
            that.loadMoreText = "到底了呦！刷新页面重新看吧！";
            for (var i = 0; i < e.length; i++) {
              this.articleList.push(e[i]);
            }
            that.disabledBtn = true;
            that.$message.error(
              "已经没有文章了哦！去关于本站看看吧！哪里也有好玩的！"
            );
          } else if (e.length > 2) {
            for (var i = 0; i < e.length; i++) {
              this.articleList.push(e[i]);
            }
            that.loadMoreText = "加载更多";
          } else {
            that.loadMoreText = "到底了呦！刷新页面重新看吧！";
            that.disabledBtn = true;
            that.$message.error(
              "已经没有文章了哦！去关于本站看看吧！哪里也有好玩的！"
            );
          }
          that.load = false;
        });
      } else {
        await getArticlesPageByClass(
          this.pageSize,
          this.pageIndex,
          this.classType
        ).then(e => {
          if (e.length < 3) {
            that.loadMoreText = "到底了呦！刷新页面重新看吧！";
            for (var i = 0; i < e.length; i++) {
              this.articleList.push(e[i]);
            }
            that.disabledBtn = true;
            that.$message.error(
              "已经没有这个类型的文章了哦！刷新页面重新浏览吧"
            );
          } else if (e.length > 2) {
            for (var i = 0; i < e.length; i++) {
              this.articleList.push(e[i]);
            }
            that.loadMoreText = "加载更多";
          } else {
            that.loadMoreText = "到底了呦！刷新页面重新看吧！";
            that.disabledBtn = true;
            that.$message.error(
              "已经没有这个类型的文章了哦！刷新页面重新浏览吧"
            );
          }
          that.load = false;
        });
      }
    },
    jumpToDetails(index) {
      window.location.href = "details.html?ArticleDetails=" + index + "";
    }
  }
};
</script>
<style scoped>
.left-articlelist {
  float: left;
  width: 900px;
}
li {
  list-style: none;
}
.content-body {
  display: flex;
}
.content-body .articleImage {
  float: left;
  width: 200px;
  height: 200px;
}
.article-content {
  height: 165px;
  width: 620px;
  margin: 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-indent: 2em;
  float: left;
  text-overflow: ellipsis;
}
</style>