<template>
  <div id="content">
    <div class="content-header" :style="headerStyle">
      <!-- 文章信息 -->
      <div class="warp-content wow slideInRight">
        <h1 class="title">{{articleDetails.articleTitle}}</h1>
        <div class="info" v-highlight>
          <p>
            <span>
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              张晟玮
            </span>
            &nbsp;
            <span>
              <i class="fa fa-keyboard-o" aria-hidden="true"></i>
              文章类型:
              {{articleDetails.articleClass}}
            </span>
            &nbsp;
            <span>
              <i class="fa fa-heart-o" aria-hidden="true"></i>
              满意度:
              {{articleDetails.articleLikes}}
            </span>
          </p>
        </div>
        <div class="info">
          <p>
            <span>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              发布日期:
              {{articleDetails.articleTime|filterSubDate}}日
            </span>&nbsp;
            &nbsp;
            <span>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              字数:
              {{articleDetails.articleTextCount}}字
            </span>
            &nbsp;
            <span>
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              阅读时间:
              {{articleDetails.articleReadTime}}分钟
            </span>
            &nbsp;
            <span>
              <i class="fa fa-eye" aria-hidden="true"></i>
              浏览次数:
              {{articleDetails.articleVisits}}次
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="warp">
      <div class="details-warp">
        <!-- 内容区域 -->
        <div
          class="article-content container"
          v-html="articleDetails.articleContent"
          v-highlight
        >{{articleDetails.articleContent}}</div>
        <!-- 分享 -->
        <div class="share-info">
          <blockquote class="elem-quote quote-nm share">
            <div class="op-list" style="margin-bottom: 10px;">
              <a href="javascript:void(0)" @click="likeAdd(articleDetails.articleId)">
                <p style="font-size: 18px;color:rgba(0,0,0,0.8)">
                  觉得不错,点个赞吧！👉
                  <i
                    :class="likeClass"
                    aria-hidden="true"
                    class="like"
                    style="font-size: 20px; line-height: 20px;"
                  ></i>
                </p>
              </a>
            </div>
            <div style="margin-bottom: 20px;">
              <h4>
                <strong>本文标题：</strong>
                <span>{{articleDetails.articleTitle}}</span>
              </h4>
              <h4>
                <strong>本文网址：</strong>
                <span>{{this.siteUrl}}</span>
              </h4>
            </div>
            <p>温馨提示：本站所有文章，若非特别声明，均为原创，转载请注明作者及原文链接。</p>
            <h4>
              分享到：
              <share></share>
            </h4>
          </blockquote>
        </div>
        <!-- 评论区 -->
        <div class="editor">
          <h3>评论区</h3>
          <editor ref="baseTextarea" />
          <el-row class="btn-up">
            <el-button @click="CommentsSubmit()">提交留言</el-button>
          </el-row>
        </div>
        <!-- 评论列表 -->
        <div class="comments">
          <h3>评论列表</h3>
          <comments
            :commentsList="commentList"
            :articleId="index"
            @changeList="loadMore"
            :disabledBtn="disabledBtn"
          />
          <div class="load-more">
            <el-pagination
              layout="prev, pager, next"
              :total="total"
              :disabled="disabledBtn"
              @current-change="loadMore"
              :current-page="pageIndex"
              :page-size="limit"
              @prev-click="prev"
              @next-click="next"
              :hide-on-single-page="true"
            ></el-pagination>
          </div>
        </div>
      </div>
      <!-- 广告区域 -->
      <div class="ad">
        <div class="whitebg cloud">
          <h2 class="htitle">标签云</h2>
          <ul>
            <a
              href="javascript:void(0)"
              v-for="(item,index) in tagsList"
              :key="index"
              class="wow fadeInLeft"
              @click="jumpToTags(item.tagId)"
            >{{item.tagName}}</a>
          </ul>
        </div>
        <div class="whitebg cloud">
          <h2 class="htitle">音乐</h2>
          <music-location style="padding:0;margin-left:0.3px;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comments from "./Comment";
import EditorBar from "../../components/WangEditor";
import MusicLocation from "../../components/VueAplayer";
import {
  getArticleById,
  addArticleLike
} from "../../../static/js/api/article.api";
import { getAllTags } from "../../../static/js/api/tag.api";
import { getAllComment, addComment } from "../../../static/js/api/comment.api";
import { WOW } from "wowjs";
import { getCookie } from "../../../static/js/cookie";
import axios from "axios";
export default {
  components: {
    editor: EditorBar,
    comments: Comments,
    MusicLocation
  },
  data() {
    return {
      pageIndex: 1,
      index: 0,
      siteUrl: "",
      config: {
        url: this.siteUrl
      },
      tagsList: [],
      articleDetails: {},
      commentList: [],
      limit: 5,
      disabledBtn: false,
      total: 1,
      comment: "",
      likeClass: "fa fa-heart",
      headerStyle: {
        backgroundImage: ""
      }
    };
  },
  watch: {
    tagsList() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        let wow = new WOW({
          live: false
        });
        wow.init();
      });
    }
  },
  filters: {
    filterSubDate(date) {
      return date.substring(0, 10);
    }
  },
  mounted() {
    this.init();
    this.index = this.$route.query.ArticleDetails;
    this.showArticleDetails(this.index);
    this.siteUrl =
      "https://www.zswblog.xyz/details.html?ArticleDetails=" + this.index;
  },
  methods: {
    async init() {
      let localPicUrl = "../../../static/data/detailsPic.json";
      const getLocalPicList = url => axios.get(url);
      let list = await getLocalPicList(localPicUrl);
      let index = Math.floor(Math.random() * (0 - 4) + 4);
      this.headerStyle.backgroundImage = "url(" + list[index].src + ")";
    },
    async showArticleDetails(index) {
      await getArticleById(index).then(e => {
        this.articleDetails = e;
      });
      await getAllTags().then(e => {
        this.tagsList = e;
      });
      await getAllComment(this.index, this.limit, this.pageIndex).then(e => {
        this.commentList = e.data;
        this.total = e.total;
        if (this.total == 0) {
          this.$notify({
            title: "温馨提醒：",
            message: "该文章目前还没有评论哦！快来评价评价！"
          });
        }
      });
    },
    jumpToTags(Id) {
      window.location.href = "tags.html?index=" + Id + "";
    },
    async likeAdd(Id) {
      if (this.likeClass === "fa fa-heart add") {
        this.$message({
          message: "你已经点过赞了,请勿重新点赞！",
          type: "error"
        });
      } else {
        this.likeClass = "fa fa-heart add";
        await addArticleLike(Id).then(e => {
          if (e.code == 200) {
            this.$message({
              message: e.msg,
              type: "success"
            });
          } else if (e.code == 401) {
            this.$message({
              message: "请注册邮箱后再填写哦!",
              type: "error"
            });
            window.location.href = "register.html";
          } else {
            this.$message({
              message: e.msg,
              type: "error"
            });
          }
        });
      }
    },
    async CommentsSubmit() {
      this.comment = this.$refs.baseTextarea.getContent();
      let that = this;
      if (this.comment !== "" && this.comment !== "<p><br></p>") {
        let userId = document.getElementById("userId").innerText;
        if (parseInt(userId) != 0) {
          if (getCookie("userEmail") !== null) {
            let ip = "";
            let url = "https://bird.ioliu.cn/ip";
            await this.$jsonp(url).then(e => {
              ip = e.data.ip;
            });
            let comment = {
              Location: ip,
              Browser: this.getBrowser(),
              UserId: userId,
              ArticleId: this.index,
              Comment1: this.comment
            };
            await addComment(comment).then(e => {
              if (e.code == 200) {
                this.$message({
                  message: e.msg,
                  type: "success"
                });
                that.total += 1;
                that.loadMore(that.pageIndex);
              } else {
                this.$message({
                  message: e.msg,
                  type: "error"
                });
              }
            });
          } else {
            this.$message({
              message: "请注册邮箱后再填写哦!",
              type: "error"
            });
            window.location.href = "register.html";
          }
        } else {
          this.$message({
            message: "请先登录哦！",
            type: "error"
          });
        }
      } else {
        this.$message({
          message: "再多写点字吧,我相信你的文笔！",
          type: "error"
        });
      }
    },
    getBrowser() {
      let userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
      let broswer = "";
      let isOpera = userAgent.indexOf("Opera") > -1;
      if (isOpera) {
        broswer = "Opera";
      } else if (userAgent.indexOf("Firefox") > -1) {
        broswer = userAgent.substring(66, 78);
      } else if (userAgent.indexOf("Chrome") > -1) {
        broswer = userAgent.substring(81, 92);
      } else if (userAgent.indexOf("Safari") > -1) {
        broswer = "Safari";
      } else if (
        userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1 &&
        !isOpera
      ) {
        broswer = "IE";
      } else if (userAgent.indexOf("Trident") > -1) {
        broswer = "Edge";
      } else {
      }
      return broswer;
    },
    async loadMore(page) {
      if (page == null) {
        page = this.pageIndex;
      }
      await getAllComment(this.index, this.limit, page).then(e => {
        this.commentList = e.data;
      });
    },
    prev(p) {
      getAllComment(this.index, this.limit, p).then(e => {
        this.commentList = e.data;
      });
    },
    next(p) {
      getAllComment(this.index, this.limit, p).then(e => {
        this.commentList = e.data;
      });
    }
  }
};
</script>

<style>
@import "../../pages/details/assets/css/details.css";
.add {
  color: red;
}
.load-more {
  text-align: center;
  margin: 10px 0;
}
</style>