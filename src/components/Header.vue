<template>
  <header class="box">
    <div>
      <!-- //使用组件 -->
      <scroll-top />
    </div>
    <a href="index.html" class="logo hide">ZswBlog</a>
    <!-- <a href="index.html" class="logo">ZswBlog</a> -->
    <nav class="site-nav">
      <ul>
        <li>
          <a href="index.html">首页</a>
        </li>
        <li>
          <a href="whisper.html">文章</a>
        </li>
        <li>
          <a href="tags.html">标签</a>
        </li>
        <li>
          <a href="leacots.html">留言</a>
        </li>
        <li>
          <a href="link.html">友情链接</a>
        </li>
        <li>
          <a href="about.html">关于本站</a>
        </li>
      </ul>
    </nav>
    <div class="head-login">
      <a
        href="https://graph.qq.com/oauth2.0/authorize?client_id=101858486&response_type=token&scope=all&redirect_uri=http://www.zswblog.xyz/index.html"
        id="qqLogin"
      >
        <p id="userId" hidden>{{userId}}</p>
        <el-tooltip class="item" effect="light" :content="msg" placement="left" offset="15">
          <img :src="userImage" alt="头像" class="userImage" />
        </el-tooltip>
      </a>
    </div>
    <div class="media-menu">
      <a href="index.html" class="logo show">ZswBlog</a>
      <div class="menu">
        <img :src="menu" @click="changeMenu" alt="menu" />
        <ul v-if="showMenu">
          <li>
            <a href="index.html">首页</a>
          </li>
          <li>
            <a href="whisper.html">文章</a>
          </li>
          <li>
            <a href="tag.html">标签</a>
          </li>
          <li>
            <a href="leacots.html">留言</a>
          </li>
          <li>
            <a href="link.html">友链</a>
          </li>
          <li>
            <a href="about.html">关于</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import ScrollTop from "./GoToTop";
import $ from "../../static/js/jquery.js";
import "../../static/js/header.js";
import "../../static/js/scroll.js";
import { getQQUserInfo } from "../../static/js/api/login.api";
import { getCookie, setCookie } from "../../static/js/cookie";
export default {
  components: {
    "scroll-top": ScrollTop
  },
  data() {
    return {
      userId: 0,
      userImage: require("../../static/images/qq.png"),
      flag: false,
      value: false,
      msg: "来试试登录吧！",
      showMenu: false,
      menu: require("../../static/images/cc-menu.png")
    };
  },
  created() {
    this.login();
  },
  methods: {
    changeMenu() {
      if (this.showMenu == false) {
        this.menu = require("../../static/images/error.png");
        this.showMenu = true;
      } else {
        this.menu = require("../../static/images/cc-menu.png");
        this.showMenu = false;
      }
    },
    login() {
      var image = getCookie("userImage");
      var id = getCookie("userId");
      if (image !== null && id !== null) {
        this.userId = id;
        this.userImage = image.replace("%3A", ":");
        this.msg = "记得留言之前要先填写好邮箱哦！否则会收不到最新的回复哦！";
        const h = this.$createElement;
        this.$message({
          message: h("p", null, [
            h("span", null),
            h("i", { style: "color: #67C23A" }, "欢迎登录!")
          ]),
          type: "success"
        });
      } else {
        this.userImage = require("../../static/images/qq.png");
        this.userId = 0;
        const h = this.$createElement;
        this.$message({
          message: h("p", null, [
            h("span", null),
            h("i", { style: "color: #67C23A" }, "来试试登录吧！")
          ])
        });
      }
    }
  }
};
</script>

<style scoped>
@import "../../static/css/header.css";

.media-menu {
  display: none;
}
@media screen and (max-width: 475px) {
  .media-menu {
    display: flex;
  }
  .fa-bars {
    font-size: 28px;
  }

  .menu {
    position: relative;
    line-height: 120px;
    margin-left: 36%;
    width: 100%;
  }
  .media-menu ul {
    content: "";
    display: table !important;
    clear: both;
    position: relative;
    margin-left: -20px;
    margin-top: -40px;
    width: 80px;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .media-menu ul li {
    padding: 0 !important;
    float: left;
    width: 70px;
    height: 28px;
    line-height: 28px;
    margin: 10px 0;
    transition: 0.5s;
  }
  .media-menu ul li a {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    font-family: Microsoft YaHei;
  }
}
</style>