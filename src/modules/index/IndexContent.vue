<template>
  <div class="wrapContent">
    <div class="warp-header">
      <video
        id="v1"
        autoplay
        ref="localVideo"
        loop
        style="width: 100%"
        :src="videoSrc"
        :poster="poster"
      ></video>
      <div id="wrap">
        <div class="wrapper">
          <div class="product_list" id="product_list">
            <div class="product_box shoulei show">
              <div class="bg_box">
                <!-- <img :src="img1" /> -->
              </div>
              <div class="content">
                <div class="main_box">
                  <h2 class="hide_txt png"></h2>
                  <a
                    href="#"
                    class="btn_product"
                    title="Pursue yourself and become more perfect！ 追求自我，成为更完美！"
                  >
                    Pursue
                    yourself and become more perfect！ 追求自我，成为更完美！
                  </a>
                </div>
              </div>
            </div>
            <div class="product_box xnet">
              <div class="bg_box">
                <!-- <img :src="img2" /> -->
              </div>
              <div class="content">
                <div class="main_box">
                  <h2 class="hide_txt png"></h2>
                  <a
                    href="#"
                    class="btn_product"
                    title="Maybe it was better to just really enjoy life.
            享受生活，顺其自然。"
                  >
                    Maybe it was better to just really enjoy life.
                    享受生活，顺其自然。
                  </a>
                </div>
              </div>
            </div>
            <div class="product_box member">
              <div class="bg_box">
                <!-- <img :src="img3" /> -->
              </div>
              <div class="content">
                <div class="main_box">
                  <h2 class="hide_txt png"></h2>
                  <a
                    href="#"
                    class="btn_product"
                    title=" Above all, we should first be kind, then honest, and then never forget each other.最要紧的是，我们首先应该善良，其次要诚实，再其次是以后永远不要相互遗忘。"
                  >
                    Above all, we should first be kind, then honest, and then never forget each other.
                    最要紧的是，我们首先应该善良，其次要诚实，再其次是以后永远不要相互遗忘。
                  </a>
                </div>
              </div>
            </div>
            <div class="product_box xkn">
              <div class="bg_box">
                <!-- <img :src="img4" /> -->
              </div>
              <div class="content">
                <div class="main_box">
                  <h2 class="hide_txt png"></h2>
                  <a
                    href="#"
                    class="btn_product"
                    title="All the longevity in this world is due to intentions.这世上所有的久处不厌，都是因为用心。"
                  >
                    Allthe longevity in this world is due to intentions.
                    这世上所有的久处不厌，都是因为用心。
                  </a>
                </div>
              </div>
            </div>
            <div class="product_box xav">
              <div class="bg_box">
                <!-- <img :src="img5" /> -->
              </div>
              <div class="content">
                <div class="main_box">
                  <h2 class="hide_txt png"></h2>
                  <a
                    href="#"
                    class="btn_product"
                    title="Years are quiet, from youth to dusk, only affectionate hoary head.岁月静好，从年少到暮夕，唯有深情共白头。"
                  >
                    Years are quiet, from youth to dusk, only affectionate hoary head.
                    岁月静好，从年少到暮夕，唯有深情共白头。
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="product_btns" id="product_btns">
            <div class="content">
              <div class="btns_area">
                <div class="btns_box" id="control_box">
                  <a
                    href="#"
                    class="btn_ipr btn_shoulei cur"
                    title="追求自我，成为更完美！Pursue yourself and become more perfect"
                  >
                    <span
                      class="ic_shoulei hide_txt png"
                    >追求自我，成为更完美！Pursue yourself and become more perfect</span>
                  </a>
                  <a
                    href="#"
                    class="btn_xnet"
                    title="Maybe it was better to just really enjoy life.
            享受生活，顺其自然。"
                  >
                    <span class="ic_xnet hide_txt png">
                      Maybe it was better to just really enjoy life.
                      享受生活，顺其自然。
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn_member"
                    title="最要紧的是，我们首先应该善良，其次要诚实，再其次是以后永远不要相互遗忘。Above all, we should first be kind, then honest, and then never forget each other."
                  >
                    <span class="ic_member hide_txt png">
                      最要紧的是，我们首先应该善良，其次要诚实，
                      再其次是以后永远不要相互遗忘。
                      Above all, we should first be kind, then honest, and then never forget each other.
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn_xkn"
                    title="这世上所有的久处不厌，都是因为用心。All the longevity in this world is due to intentions."
                  >
                    <span class="ic_xkn hide_txt png">
                      这世上所有的久处不厌，都是因为用心。All the longevity in this world is due to
                      intentions.
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn_xav"
                    title="岁月静好，从年少到暮夕，唯有深情共白头。Years are quiet, from youth to dusk, only affectionate hoary head."
                  >
                    <span class="ic_xav hide_txt png">
                      岁月静好，从年少到暮夕，唯有深情共白头。Years are quiet, from youth to dusk, only
                      affectionate hoary head.
                    </span>
                  </a>
                  <span class="ic_line" id="ic_line"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="rpt_bg png" id="rpt_bg"></div>
          <!-- pageContent -->
        </div>
      </div>
    </div>
    <div class="warp-content">
      <!-- 关于我 -->
      <div class="content-middle about-me">
        <h3>About-me</h3>
        <p class="typing title-h">
          当你忘了自己的过去，满意自己的现在，漠视自己的未来，你就站在了生活的最高处。
          <br />当成功不会让你太高兴，失败不会把你怎么样，平淡不会淹没你时，你就站在了生命的最高处。
          <br />当你以微笑的心想到了过去，以希望的心向前看，以宽厚的心向下看，以坦然的心向上看时，
          <br />你就站在了灵魂的最高处。
        </p>
        <a href="about.html">Read More+</a>
      </div>
      <!-- 热门文章 -->
      <div class="content-middle articles">
        <h2 class="introduce">最新文章</h2>
        <div class="articles-content">
          <article
            v-for="item in hotArticles"
            :key="item.articleId"
            @click="jumpToDetails(item.articleId)"
          >
            <a href="javascript:void(0)">
              <div class="imgBox">
                <img :src="item.articleImage" alt="文章插图" />
              </div>
              <span class="source">{{item.articleTitle}}</span>
              <h2 class="title">{{item.articleTime|filterDate}}</h2>
              <span class="detail" v-html="item.articleContent">{{item.articleContent}}</span>
            </a>
          </article>
        </div>
      </div>
      <!-- 背景图片 -->
      <div class="content-back">
        <h2 class="typing title-h">
          无论如何，请记得一定要做自己！
          <br />
          <br />每一个不曾起舞的日子都是对生命的辜负。
          <br />
          <br />我在等那双识我的眼睛，我在等那双疼我的手，我在等那颗懂我的心，为了这份执着的等待，
          <br />在这色彩斑斓的世界上，我就做一块石头，我就做我自己。
          <br />
          <br />一步一步地走，这种方式看似缓慢且费力，似乎永远不会达到目的，但是只要你肯坚持，
          <br />做真实敢拼的自己，你就会成为最后的胜者。
          <br />
          <br />在适当的场合适当的地点，合适的放下自己高贵的内心，和朋友一心相待，你会发现生活中到处都是阳光。
          <br />
          <br />
        </h2>
      </div>
      <!-- Swiper区域 -->
      <div class="content-middle messages">
        <h2 class="introduce">最新留言</h2>
        <div class="message-list">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in messageList" :key="index">
              <div class="ols-card">
                <div class="ols-header">
                  <img :src="item.userPortrait" alt="留言头像" class="ols-desc-img" />
                  <div class="ols-desc-name">
                    {{item.userName}}
                    <br />
                    <span>{{item.messageDate|filterDate}}</span>
                  </div>
                </div>
                <div class="ols-body">
                  留言:
                  <p class="ols-message-body" v-html="item.message">{{item.message}}</p>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <!-- 数字增长 -->
      <div class="product-number-info" id="productNumber">
        <div class="product-number-inner">
          <ul class="q">
            <li class="li-1">
              <b>
                <i id="productNumber_1" class="fa fa-laptop">
                  <countTo
                    :startVal="numberAdd.startNum"
                    :endVal="numberAdd.visitCount"
                    :duration="10000"
                  ></countTo>
                </i>
                <sup>+</sup>
              </b>
              <p>网站浏览数</p>
            </li>
            <li class="li-2">
              <b>
                <i id="productNumber_2" class="fa fa-calendar">
                  <countTo
                    :startVal="numberAdd.startNum"
                    :endVal="numberAdd.runDays"
                    :duration="10000"
                  ></countTo>
                </i>
                <em>天</em>
              </b>
              <p>运行</p>
            </li>
            <li class="li-3">
              <b>
                <i id="productNumber_3" class="fa fa-book">
                  <countTo
                    :startVal="numberAdd.startNum"
                    :endVal="numberAdd.articleCount"
                    :duration="10000"
                  ></countTo>
                </i>
                <sup>+</sup>
              </b>
              <p>文章数</p>
            </li>
            <li class="li-4">
              <b>
                <i id="productNumber_4" class="fa fa-tags">
                  <countTo
                    :startVal="numberAdd.startNum"
                    :endVal="numberAdd.siteTag"
                    :duration="10000"
                  ></countTo>
                </i>
                <em>个</em>
              </b>
              <p>站点标签</p>
            </li>
            <li class="li-5">
              <b>
                <i id="productNumber_5">{{numberAdd.version}}</i>
              </b>
              <p>当前版本</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部区域 -->
      <div class="footer">
        <div class="footer-top">
          <div class="container">
            <div
              class="clear wow fadeInUp animated"
              style="visibility: visible; animation-name: fadeInUp;"
            >
              <div class="left w3">
                <div class="single-widget about">
                  <div class="footer-logo">
                    <h2>ZswBlog</h2>
                  </div>
                  <p>一名阳光,勇敢,治愈的程序员</p>
                  <div class="button">
                    <a href="about.html" class="btn">About Me</a>
                  </div>
                </div>
              </div>
              <div class="left w3">
                <div class="single-widget">
                  <h2>相关链接</h2>
                  <ul class="social-icon">
                    <li class="active">
                      <a href="whisper.html">
                        <i class="fa fa-book"></i>所有文章
                      </a>
                    </li>
                    <li class="active">
                      <a href="leacots.html">
                        <i class="fa fa-comments"></i>本站留言
                      </a>
                    </li>
                    <li class="active">
                      <a href="tags.html">
                        <i class="fa fa-tags"></i>文章标签
                      </a>
                    </li>
                    <li class="active">
                      <a href="about.html">
                        <i class="fa fa-snowflake-o"></i>关于我
                      </a>
                    </li>
                    <li class="active">
                      <a href="link.html">
                        <i class="fa fa-link"></i>友情链接
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="left w3">
                <div class="single-widget contact">
                  <h2>联系我</h2>
                  <ul class="list">
                    <li>
                      <i class="fa fa-map"></i>地址: 安徽省芜湖市
                    </li>
                    <li>
                      <i class="fa fa-qq"></i>QQ: 1761317983
                    </li>
                    <li>
                      <i class="fa fa-envelope"></i>邮箱: 1761317983@qq.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container">
            <div class="clear">
              <div class="center left w10">
                <p>
                  Copyright © 2019-2020 张晟玮 Powered by .NET Core3.1 on Linux
                  <i
                    class="fa fa-linux"
                    aria-hidden="true"
                  ></i>&nbsp; 备案号:
                  <a style="color:#bbb" href="http://www.miit.gov.cn/">皖ICP备19012774号</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import countTo from "vue-count-to";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { getInitData } from "../../../static/js/api/index.api.js";
import "swiper/css/swiper.css";
export default {
  components: { countTo },
  data() {
    return {
      videoSrc: "",
      poster: "",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true
      },
      messageList: [],
      hotArticles: [],
      numberAdd: {
        startNum: 0,
        visitCount: 0,
        runDays: 0,
        articleCount: 0,
        siteTag: 0,
        version: "v2.1.8"
      }
    };
  },
  filters: {
    filterDate(date) {
      if (date.indexOf("T") !== -1) {
        return date.replace("T", " ");
      } else {
        return date;
      }
    }
  },
  created() {
    this.initData();
    axios
      .get("../../../static/data/indexVideo.json")
      .then(resolve => {
        this.videoSrc = resolve.videosrc;
        this.poster = resolve.poster;
        this.$refs.localVideo.volume = resolve.volume;
      })
      .catch(e => {
        console.log("请求视频失败,请刷新重试！", e);
      });
  },
  methods: {
    jumpToDetails(index) {
      window.location.href = "details.html?ArticleDetails=" + index + "";
    },
    async initData() {
      await getInitData().then(e => {
        this.numberAdd.visitCount = e.dataCount.visit;
        this.numberAdd.runDays = e.dataCount.runDays;
        this.numberAdd.articleCount = e.dataCount.articleCount;
        this.numberAdd.siteTag = e.dataCount.tagsCount;
        this.hotArticles = e.articles;
        this.messageList = e.messages;
      });
    }
  }
};
</script>
<style scoped>
video {
  position: fixed;
  /* position: relative; */
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -9999;
  /*灰色调*/
  /*-webkit-filter:grayscale(100%)*/
}
.warp-content {
  background-color: #faf9f9;
}
.content-middle {
  width: 980px;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: touch;
}
.content-back {
  height: 350px;
  text-align: center;
  background: url("https://singleblog.oss-cn-beijing.aliyuncs.com/images/index-content.jpg");
}
.content-back h2 {
  width: 400px;
  margin: 0 auto;
}
/* 公共区域 */
.introduce {
  font-size: 34px;
  margin-bottom: 25px;
}
.left {
  float: left;
}
.clear::after {
  content: "";
  display: block;
  clear: both;
}
.center {
  text-align: center;
}
.w3 {
  width: 33.33%;
}
.w10 {
  width: 100%;
}
/* 打字机特效 */
.title-h {
  font-size: 1.8rem;
  margin-bottom: 5%;
  font-weight: normal;
  letter-spacing: 0.3rem;
  /*padding-left: 29.2%;*/
  -webkit-animation: type 10s steps(50, end) forwards;
  animation: type 10s steps(50, end) forwards;
}
.typing {
  text-align: center;
  color: black;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
@-webkit-keyframes type {
  from {
    width: 0;
  }
}

@keyframes type {
  from {
    width: 0;
  }
}
/* 关于我-更多 */
.about-me {
  text-align: center !important;
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
.about-me > h3 {
  color: #333;
  font-size: 2.5em;
  font-weight: 600;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Tahoma, Arial, sans-serif;
}
.about-me > p {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 16px;
  color: #777;
  line-height: 1.9em;
  letter-spacing: 1px;
  margin-top: 1rem !important;
  margin-bottom: 3rem !important;
}
.about-me > a {
  cursor: pointer;
  color: #fff;
  background-color: #1e9fff;
  border-color: #007bff;
  display: inline-block;
  padding: 10px 30px;
  font-size: 14px;
  letter-spacing: 1px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
/* 文章列表 */
.articles {
  padding: 50px 0;
}
.articles-content:after {
  padding: 20px 0;
  content: "";
  display: table;
  clear: both;
}
.content-middle article {
  width: 280px;
  overflow: hidden;
  background: #f6f6f6;
  box-sizing: border-box;
  padding: 0 15px 25px;
  float: left;
  margin: 5px 20px;
}
article a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #535353;
  text-decoration: none;
}
article:hover {
  transition: 0.5s;
  -ms-transform: translateY(-10px);
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  -o-transform: translateY(-10px);
  transform: translateY(-10px);
  z-index: 1002;
  position: relative;
  left: 0;
}
article > a:hover::after {
  height: 10px;
}
article > a::after {
  content: "";
  width: 280px;
  position: absolute;
  background: #67c23a;
  bottom: 0;
  height: 0;
  transition: height 0.3s linear;
}
article .imgBox {
  width: 280px;
  height: 186.67px;
  overflow: hidden;
}
article .imgBox img {
  width: 100%;
  height: 100%;
  transition: all 0.6s linear;
}
article:hover img {
  transform: scale(1.15);
}
article:hover .source {
  background: #1ccfc9;
  border-color: #1ccfc9;
  color: #000;
}
article .source {
  border: 1px solid #535353;
  padding: 6px 20px;
  border-radius: 25px;
  margin: 20px;
}
article .title {
  margin-bottom: 20px;
  font-size: 20px;
}
article .detail {
  font-size: 14px;
  line-height: 160%;
  text-align: justify;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
}
/* 背景图片区域 */
.content-back {
  position: relative;
}

.content-back > h2 {
  position: absolute;
  width: 800px;
  height: 300px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-size: 16px;
  color: #777;
  line-height: 1.9em;
  letter-spacing: 1px;
}
/* 留言列表 */
.messages {
  padding: 50px 0;
}
.message-list {
  height: 300px;
}
.message-list h2 {
  width: 100px;
  margin: 0 auto;
  font-family: "微软雅黑";
  font-weight: normal;
}
.ols-card {
  width: 100% !important;
  height: 230px;
  border-top: #1e9fff solid 1px;
  box-shadow: 0 0 2px 2px rgba(204, 204, 223, 0.5);
  background: transparent;
  margin-bottom: 10px;
}
.ols-header,
.ols-body {
  float: left;
  margin: 0 15px;
  width: 100%;
}
.ols-header {
  margin: 30px 0;
  margin-left: 20px;
}
.ols-desc-img {
  border-radius: 50%;
  width: 65px !important;
  height: 65px;
  float: left;
}
.ols-desc-name {
  float: left;
  display: block;
  padding-top: 14px;
  padding-left: 20px;
  font-size: 16px;
  color: #444;
  font-weight: 300;
}
.ols-body {
  width: 250px;
  height: 100px;
  word-wrap: break-word;
  word-break: break-all;
}
.ols-body p {
  text-indent: 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
}
.ols-body button {
  margin-top: 15px;
  margin-left: 3em;
}
/* 数字转动css */
.product-number-info {
  position: relative;
  background-color: #292929;
}
.product-number-inner {
  width: 1200px;
  margin: 0 auto;
}
.product-number-info ul.q::after {
  content: "";
  clear: both;
  display: table;
}
.product-number-info ul {
  padding: 85px 0;
}
.product-number-info li:first-child {
  border: none;
}
.product-number-info li {
  float: left;
  width: 239px;
  height: 90px;
  border-left: 1px solid #3c3c3c;
  color: #fff;
  padding-top: 1px;
}
.product-number-info li {
  color: #fff;
}
.product-number-info li b {
  font-weight: 400;
  font-size: 36px;
  line-height: 1;
  display: inline-block;
  position: relative;
  margin: 15px 0 10px;
}
.product-number-info li:not(:first-child) b,
.product-number-info li:not(:first-child) p {
  padding-left: 70px;
}
.product-number-info li b sup {
  position: absolute;
  font-size: 20px;
  right: -15px;
  top: -3px;
}
/* 底部区域 */
.footer {
  position: static !important;
}
.footer .footer-top {
  padding-top: 39px;
  padding: 60px 0 90px;
}
.footer .single-widget {
  margin-top: 30px;
}
.footer .single-widget h2 {
  font-size: 18px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.footer .footer-logo {
  margin-bottom: 20px;
}
.footer .button {
  margin-top: 20px;
}
.footer .button .btn {
  cursor: pointer;
  color: #fff;
  background-color: #1e9fff;
  border-color: #007bff;
  display: inline-block;
  padding: 10px 30px;
  font-size: 14px;
  letter-spacing: 1px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0 12px 60px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
.footer .social-icon li {
  float: left;
  width: 50%;
  margin-bottom: 10px;
}
.footer .social-icon li a {
  color: #000;
}
.footer .social-icon li a i {
  margin-right: 10px;
  width: 20px;
  font-size: 16px;
}
.footer .social-icon li a:hover {
  color: #82b440;
}
.footer .container {
  width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.footer .contact ul li {
  position: relative;
  padding-left: 40px;
  font-family: Roboto, sans-serif;
  margin-bottom: 10px;
}
.footer .contact ul li i {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  left: 0;
  margin-top: -15px;
  font-size: 16px;
}
.footer .copyright {
  padding: 12px 0;
  background: #1d1d21;
}
.footer .copyright p {
  font-size: 14px;
  color: #eee;
}
@media only screen and (max-width: 475px) {
  #v1 {
    display: none;
  }
  .wrapper {
    background: url("https://singleblog.oss-cn-beijing.aliyuncs.com/images/bg_index.jpg")
      no-repeat fixed center !important;
    background-position: 50% 50% !important;
    background-size: 100% 100% !important;
    background-attachment: fixed !important;
  }
}
</style>