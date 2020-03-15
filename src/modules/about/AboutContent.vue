<template>
  <div id="content">
    <div class="card-holder box">
      <div class="card-wrapper">
        <a href="javascript:void(0)" @click="changePage($event)">
          <div class="card bg-01">
            <span class="card-content">本站标签</span>
          </div>
        </a>
      </div>
      <div class="card-wrapper">
        <a href="javascript:void(0)" @click="changePage($event)">
          <div class="card bg-02">
            <span class="card-content">音乐馆</span>
          </div>
        </a>
      </div>
      <div class="card-wrapper">
        <a href="javascript:void(0)" @click="changePage($event)">
          <div class="card bg-03">
            <span class="card-content">时间线</span>
          </div>
        </a>
      </div>
      <div class="card-wrapper">
        <a href="javascript:void(0)" @click="changePage($event)">
          <div class="card bg-04">
            <span class="card-content">生活分享</span>
          </div>
        </a>
      </div>
      <div class="card-wrapper">
        <a href="javascript:void(0)" @click="changePage($event)">
          <div class="card bg-05">
            <span class="card-content">关于我</span>
          </div>
        </a>
      </div>
      <div class="card-wrapper">
        <a href="javascript:void(0)" @click="changePage($event)">
          <div class="card bg-06">
            <span class="card-content">关于本站</span>
          </div>
        </a>
      </div>
    </div>
    <div class="warp">
      <component :is="currentPage"></component>
      <!-- <router-view /> -->
      <!-- <router-view name="music-site" /> -->
    </div>
  </div>
</template>

<script>
import $ from "../../../static/js/jquery.js";
import "../../../static/js/scroll.js";
import Me from "./Me";
import LifeShare from "./LifeShare";
import Music from "./Music";
import Site from "./Site";
import Tags from "./Tags";
import Timeline from "./TimeLine";
export default {
  name: "about-content",
  components: { Me, Site, Music, LifeShare, Tags, Timeline },
  data() {
    return {
      id: 6,
      currentPage: "Site"
    };
  },
  mounted() {
    this.changePage(this.$route.query.id); //动态获取url的queystring值
  },
  methods: {
    changePage(e) {
      let index = "";
      if (typeof e == "string") {
        index = e;
      } else if (typeof e == "object") {
        index = e.currentTarget.childNodes[0].className.substring(9, 10);
      } else if (typeof e == "undefined") {
        console.log("基地爆炸！问题不大！");
      } else {
        this.$notify.error({
          title: "错误",
          message: "好像遇到错误了！"
        });
      }
      switch (index) {
        case "1":
          this.currentPage = "Tags";
          break;
        case "2":
          this.currentPage = "Music";
          break;
        case "3":
          this.currentPage = "Timeline";
          break;
        case "4":
          this.currentPage = "LifeShare";
          break;
        case "5":
          this.currentPage = "Me";
          break;
        case "6":
          this.currentPage = "Site";
          break;
      }
    }
  }
};
</script>

<style  scoped>
#content {
  background-color: white;
}
.warp {
  min-height: 980px;
  border: #dcdfe6 solid 1px;
}

a:link,
a:hover,
a:visited,
a:active {
  color: #fff;
  text-decoration: none;
}
.box-active {
  top: 100px;
}
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

  background: #fff;
}

.card-holder {
  position: fixed;
  width: 0px;
  overflow: visible;
}

.card-wrapper {
  display: inline-block;
  float: right;
  clear: both;
}

.card {
  position: relative;
  left: 22px;
  padding: 16px 32px 16px 64px;
  margin: 8px;
  x-box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 8px 0 8px -8px rgba(0, 0, 0, 0.5);
  background: #fff;
  transition: all 0.3s ease-in-out 0.1s;
}

.card:hover {
  position: relative;
  left: 100%;
  margin-left: -32px;
  box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.5),
    0 8px 8px -8px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}

.card-content {
  display: inline-block;
  color: #fff;
  font-family: "Droid Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
}

.bg-01 {
  background: #539770;
}
.bg-02 {
  background: #4b7d74;
}
.bg-03 {
  background: #8dc2bc;
}
.bg-04 {
  background: #edd6b4;
}
.bg-05 {
  background: #be7467;
}
.bg-06 {
  background: #e2ae63;
}
</style>