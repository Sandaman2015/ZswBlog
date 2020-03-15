<template>
  <div class="content">
    <div class="cont">
      <div class="link-content-middle">
        <fieldset class="layui-elem-field layui-field-title wow zoomIn">
          <legend>友情链接交换说明</legend>
          <blockquote class="layui-elem-quote">
            <p>本站欢迎交换友链，如需交换链接请在留言板留言，博主不定期对友链进行互动访问。</p>
            <h1>申请要求</h1>
            <div class="demand">
              <i class="fa fa-check" aria-hidden="true"></i>
              <span>原创优先</span>
              <i class="fa fa-check" aria-hidden="true"></i>
              <span>技术优先</span>
              <i class="fa fa-times" aria-hidden="true"></i>
              <span>经常宕机</span>
              <i class="fa fa-times" aria-hidden="true"></i>
              <span>不合法规</span>
              <i class="fa fa-times" aria-hidden="true"></i>
              <span>插边球站</span>
              <i class="fa fa-times" aria-hidden="true"></i>
              <span>红标报毒</span>
            </div>
            <p>希望您在申请本站友链之前请先做好本站链接，申请提交后若无其它额外因素将于72小时内审核，如超过时间还未通过，请私信我。</p>
            <p>注意本站会不定期清理违规友链，如果检测到该链接已无法正常访问，本站依然会为您保留30天恢复期，逾期则剔除该链接。</p>
            <p>如若发现互换友链后未经通知私自撤换友链者，本站将拉黑并永不交换，敬请见谅。</p>
          </blockquote>
        </fieldset>
        <hr class="layui-bg-blue" />
        <div class="link-list">
          <ul>
            <li
              v-for="item in Linklist"
              class="list-item wow fadeInLeft wow bounceInRight"
              style="max-width:200px;max-height:335px"
            >
              <div class="col-md-4">
                <a :href="item.linkSrc" target="_blank" class="fh5co-project-item image-popup">
                  <figure>
                    <div class="overlay">
                      <i class="ti-location-arrow"></i>
                    </div>
                    <img :src="item.linkImage" alt="Image" class="img-responsive" />
                  </figure>
                  <div class="fh5co-text" style="height:80px">
                    <h2>{{item.linkTitle}}</h2>
                    <p>{{item.linkIntroduce}}</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <div style="clear:both;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllFriendLink } from "../../../static/js/api/link.api";
import { WOW } from "wowjs";
export default {
  data() {
    return {
      Linklist: []
    };
  },
  mounted() {
    this.pageLoad();
  },
  watch: {
    Linklist() {
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
      await getAllFriendLink().then(e => {
        this.Linklist = e;
      });
    }
  }
};
</script>

<style lang="css" scoped>
.link-content-middle .layui-elem-field legend {
  font-weight: 500;
}

.link-content-middle .layui-elem-quote p {
  margin: 10px 0 10px 0;
  color: black;
}
.link-content-middle .layui-elem-quote h1,
span {
  color: black;
}
.link-content-middle .layui-elem-quote h1 {
  font-size: 16px;
  margin: 10px 0 10px 0;
  font-weight: bold;
}

.link-content-middle .layui-elem-quote .demand .layui-icon-ok {
  color: #5fb878;
}

.link-content-middle .layui-elem-quote .demand .layui-icon-close {
  color: red;
}

.link-list ul .list-item {
  float: left;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

figure {
  color: #000;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 400;
  margin: 0 0 20px 0;
}

.fh5co-project-item {
  display: block;
  width: 100%;
  position: relative;
  background: #fff;
  overflow: hidden;
  bottom: 0;
  margin-bottom: 30px;
  border: 1px solid #e6e6e6;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  border-radius: 7px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.fh5co-project-item figure {
  overflow: hidden;
  position: relative;
}

.fh5co-project-item figure .overlay {
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.7s;
  -o-transition: 0.7s;
  transition: 0.7s;
}

.fh5co-project-item figure .overlay i {
  z-index: 12;
  color: #fff;
  font-size: 30px;
  position: absolute;
  margin-left: -15px;
  margin-top: -45px;
  top: 50%;
  left: 50%;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.fh5co-project-item img {
  height: 205px;
  width: 200px;
  opacity: 1;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.fh5co-project-item .fh5co-text {
  padding: 0px 10px 10px 20px;
  text-align: center;
}

.fh5co-project-item .fh5co-text h2,
.fh5co-project-item .fh5co-text span {
  text-decoration: none !important;
}

.fh5co-project-item .fh5co-text h2 {
  font-size: 20px;
  font-weight: 300;
  margin: 0 0 10px 0;
  color: #f54c53;
}

.fh5co-project-item .fh5co-text span {
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 400;
}

.fh5co-project-item .fh5co-text p {
  color: #000;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

.fh5co-project-item:hover,
.fh5co-project-item:focus {
  bottom: 7px;
  text-decoration: none;
  -webkit-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  -ms-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  -o-box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.19);
}

.fh5co-project-item:hover img,
.fh5co-project-item:focus img {
  -webkot-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}

.fh5co-project-item:hover figure .overlay,
.fh5co-project-item:focus figure .overlay {
  opacity: 1;
  visibility: visible;
}

.fh5co-project-item:hover figure .overlay i,
.fh5co-project-item:focus figure .overlay i {
  margin-top: -15px;
}

.fh5co-project-item:hover h2,
.fh5co-project-item:hover span,
.fh5co-project-item:focus h2,
.fh5co-project-item:focus span {
  text-decoration: none !important;
}
</style>