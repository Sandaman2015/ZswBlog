<template>
  <div>
    <div>
      <div class="main animated zoomIn">
        <img
          src="../../pages/about/assets/images/me.jpg"
          alt="图标"
          class="favicon animated rotateIn"
        />
        <h1>Zsw</h1>
        <p>追求自我,成为更完美！</p>
      </div>
      <div class="location">
        <p id="main-site">
          <i class="fa fa-location-arrow" aria-hidden="true"></i>
          <span>安徽·芜湖</span>
        </p>
      </div>
      <div class="contact">
        <a href="javascript:void(0)" @click="wechat()" class="bg1 m-r-20">
          <i class="fa fa-weixin" aria-hidden="true"></i>
        </a>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=1761317983&site=qq&menu=yes" class="bg2 m-r-20">
          <i class="fa fa-qq" aria-hidden="true"></i>
        </a>
        <a
          href="https://weibo.com/p/1005055060565838/home?from=page_100505&mod=TAB&is_all=1#1582465457298"
          class="bg3 m-r-20"
        >
          <i class="fa fa-weibo" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/DnUJoG07tYOs99p" class="bg4 m-r-20">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      <div class="about">
        <h4>个人信息：</h4>
        <p class="about-me animated bounceInLeft">
          <span>
            <br />年龄:22
            <br />星座:双鱼座👍
            <br />身高:182cm,我希望还能再长一点点！😊
            <br />体重:180,我觉得我有信心减肥！💪
            <br />颜值:59分吧,差一分及格吧!😎
            <br />爱好:旅游,看电影,写代码,踢足球,打游戏啊。😁
            <br />性格:开朗活泼以至于别人只记住了我经常笑的样子！😳
            <br />专业:计算机应用技术🐰
            <br />特长:喝可乐！百事和可口我都爱！👌
          </span>
        </p>
        <h4>个人介绍：</h4>
        <p class="about-me animated bounceInDown">
          <span>
            这个博客其实是为了找个人兴趣而开发的，同时也想拥有一个自己的网站去分享我的生活或者技术，虽然不大，功能也不多但是我会努力更新的
            无所畏惧，哪怕别人说他不好，在我心中它依然伟岸笔挺，毕竟坚持才是胜利！😑我算一个工作狂，但是偶尔也会关注科技、鬼畜、美女等等啊！😍😄
            对于编程这条路，我觉得我可以去奉献我的一生，著名谐星沈腾就在《飞驰人生》中说过：“必胜绝招就是把你的全部去奉献你所热爱的一切！”。看来我还是喜欢敲代码！！哈哈哈哈😄
            现在的唯一想法就是去一线城市找一份收入更高的工作🤑，努力加油挣钱，去经历我想去经历的一切（如果能找一个伴侣💑，那最好不过了！），
            对了！👣如果有什么好玩的好吃的请一定要推荐给我！后期我可能会考虑专门开一个板块给别人介绍自己的家乡好玩的地方！
            说不定你们家乡的GDP还有我的一份助攻哦！
            <br />最后：🙏武汉加油！🙏中国加油！
            <br />2020-05-03更新：目标上海！冲冲冲！！！🤞
            <br />2020-06-25更新：虽父母在不远游，但是我希望能追求自我！继续加油！！！🤞
          </span>
        </p>
      </div>
      <div class="skill-progress">
        <div class="item">
          <el-tag type="success" size="mini" effect="dark">C#</el-tag>
          <div class="pro">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
          </div>
        </div>
        <div class="item">
          <el-tag type="danger" size="mini" effect="dark">Java</el-tag>
          <div class="pro">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
          </div>
        </div>
        <div class="item">
          <el-tag type="info" size="mini" effect="dark">Html</el-tag>
          <div class="pro">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="80"></el-progress>
          </div>
        </div>
        <div class="item">
          <el-tag type="success" size="mini" effect="dark">Css</el-tag>
          <div class="pro">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
          </div>
        </div>
        <div class="item">
          <el-tag type="danger" size="mini" effect="dark">Mysql</el-tag>
          <div class="pro">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
          </div>
        </div>
        <div class="item">
          <el-tag type="info" size="mini" effect="dark">Mssql</el-tag>
          <div class="pro">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
          </div>
        </div>
        <div class="item">
          <el-tag type="success" size="mini" effect="dark">Vue</el-tag>
          <div class="pro">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="80"></el-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "me-site",
  data() {
    return {
      img: require("../../pages/about/assets/images/wechat.jpg")
    };
  },
  mounted() {},
  methods: {
    wechat() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: "<img src=" + this.img + ' alt="微信" >'
      });
      // this.$message("微信号:17356261805!");
    }
  }
};
</script>

<style scoped>
.favicon {
  height: 130px;
  width: 130px;
  border-radius: 50%;
}
.main,
.location {
  text-align: center;
  display: block;
}
.location {
  width: 500px;
  margin: 0 auto;
  line-height: 30px;
}
h4 {
  margin-left: 2em;
  float: left;
  width: 100%;
  font-family: "Arial";
}
.about {
  display: block;
  min-height: 420px;
}
.about-me {
  margin-left: 4em;
}
.about-me > span {
  text-indent: 2em;
  float: left;
  margin-bottom: 15px;
}
.skill-progress {
  width: 500px;
  height: 300px;
  margin: 50px auto;
}
.item {
  margin: 15px 0;
}
.item > .el-tag {
  float: left;
}
.pro {
  margin-left: 70px;
}
.el-progress-bar {
  max-width: 460px;
}
.el-progress-bar__inner {
  height: 28px;
}
.contact {
  width: 300px;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
}

.contact a {
  width: 36px;
  height: 36px;
  font-size: 18px;
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
}
.m-r-20 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
}
.contact .fa {
  color: white;
  font-size: 18px;
}
.bg1 {
  background-color: #3b5998;

  margin-right: 20px;
}
.bg2 {
  background-color: #1da1f2;

  margin-right: 20px;
}
.bg3 {
  background-color: #cd201f;

  margin-right: 20px;
}
.bg4 {
  background-color: #1da1f2;

  margin-right: 20px;
}
hr {
  margin: 25px 0;
}
.fa-location-arrow {
  color: #1da1f2;
  font-size: 18px;
}
@media screen and (max-width: 475px) {
  .skill-progress {
    height: auto;
    width: 100%;
  }
  .about-me {
    margin-left: 2em;
  }
  .item > .el-tag {
    margin-left: 2em;
  }
  .location {
    width: 300px;
    margin: 0 auto;
  }
  .about h4 {
    width: 200px;
  }
}
</style>