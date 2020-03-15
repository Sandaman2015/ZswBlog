<template>
  <div>
    <div>
      <div class="main animated zoomIn">
        <img src="../../../static/images/z2.jpg" alt="图标" class="favicon animated rotateIn" />
        <h1>ZswBlog</h1>
        <h2>一名C#/JAVA不知道如何选择的憨憨！</h2>
      </div>
      <hr />
      <div class="location">
        <p id="main-site">
          <i class="fa fa-hourglass-end" aria-hidden="true"></i>
          <a href="http://www.zswblog.xyz">
            <span>www.zswblog.xyz</span>
          </a>
        </p>
      </div>
      <div class="date">
        <p id="main-date">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          <span id="showtime"></span>
        </p>
      </div>
      <div class="about">
        <h4>关于本站：</h4>
        <p class="about-site">
          本站为张晟玮博客2.0版本，目前已开源，欢迎大家给我点一个star！
          <br />后端：
          <span>
            该博客由原先的.Net MVC+EF+SqlServer2008作为后端支持,
            可惜有些业务逻辑和数据库字段设计的不是很合理,一个好域名被我一手打烂！
            所以我重新设计并且将后端服务改为了.Net Core WebApi+Mysql,
            服务器也从原来的腾讯云转到了阿里云,并不是服务器不好只是我比较菜不会调优！
            况且过度依赖IIS也是不好,想尝试一下Lnuix所以我迈出了舒适圈,再一次挑战自己。
            运用到的框架：Autofac,AutoMapper,EFCore,第三方登录,DDD架构,Redis好像就这么多了
            相关技术我会有时间分享的，
            后期还会使用JAVA的SpringBoot来进行高清重制！所以请期待把！
          </span>
          <br />前端：
          <span>
            前端在2.0之前的设计就是一坨屎,称它为我写过最恶心的代码一点都不为过。
            强行拼凑jquery+vue+layui,而且有的直接复制的js我自己都没看懂！
            这次我利用webpack+node+vuecli的设计使我一下子对前端有了崭新的认识,
            模块化的开发思想很棒，也很符合未来软件设计，其实不止前端，后端也是！
            运用到的框架：Node,Webpack,VueCli,Element-Ui,还有一些网上百度的组件
          </span>
        </p>
        <h4>感谢：</h4>
        <p class="about-thanks animated swing">
          以下是为本站做过贡献的人:
          <br />
          <span>隆重介绍我的同学---"🐒胖",感谢她为我设计的博客图标和一些页面的字体修改,这也让我明白美工的强大是程序员无法比拟的！</span>
          <br />
          <span>
            感谢燕十三的博客开源分享,让我一些组件可以复制粘贴！
            感谢尤雨溪这个闪闪发光的大佬！Vue是我用的最快速上手的一门前端框架,
            同时也要感谢Layui平台、Element-UI开发组,他们推动了行业的进步，让我能快速成长！
          </span>
        </p>
        <p>
          <el-calendar v-model="value"></el-calendar>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";

export default {
  name: "web-site",
  data() {
    return {
      timer: "",
      value: new Date()
    };
  },
  mounted() {
    clearInterval(this.timer);
    this.timer = setInterval(this.showDateTime, 1000);
  },
  methods: {
    showDateTime() {
      let BirthDay = new Date("10/08/2019 00:00:00");
      let today = new Date();
      let timeold = today.getTime() - BirthDay.getTime();
      let sectimeold = timeold / 1000;
      let secondsold = Math.floor(sectimeold);
      let msPerDay = 24 * 60 * 60 * 1000;
      let e_daysold = timeold / msPerDay;
      let daysold = Math.floor(e_daysold);
      let e_hrsold = (e_daysold - daysold) * 24;
      let hrsold = Math.floor(e_hrsold);
      let e_minsold = (e_hrsold - hrsold) * 60;
      let minsold = Math.floor((e_hrsold - hrsold) * 60);
      let seconds = Math.floor((e_minsold - minsold) * 60);
      showtime.innerHTML =
        "该网站在夹缝中生存了：" +
        daysold +
        "天" +
        hrsold +
        "小时" +
        minsold +
        "分" +
        seconds +
        "秒";
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    console.log(this.timer);
  }
};
</script>

<style scoped>
h1,
h2,
h4,
p,
a {
  font-weight: normal;
  font-family: "Microsoft YaHei";
}
.favicon {
  height: 130px;
  width: 130px;
  border-radius: 50%;
}
.main,
.location,
.date {
  text-align: center;
  display: block;
}
.location,
.date {
  width: 500px;
  margin: 0 auto;
  line-height: 30px;
  margin-top: 15px;
}
.location span,
.date span {
  font-size: 22px;
}
h4 {
  margin-left: 2em;
  float: left;
  width: 100%;
}
i {
  line-height: 30px;
}
.about-site {
  margin-left: 4em;
  font-size: 24px;
}
.about-site > span {
  text-indent: 2em;
  float: left;
  margin-bottom: 15px;
  font-size: 18px;
}
.about-thanks {
  margin-left: 4em;
  font-size: 24px;
}
.about-thanks > span {
  text-indent: 2em;
  float: left;
  margin-bottom: 25px;
  font-size: 18px;
}
a {
  text-decoration: none;
  color: #f25b67;
}
</style>