<template>
  <div>
    <div class="lifeDesc">
      <p class="life">该板块正在开发中，敬请期待！</p>
    </div>
    <hr />
    <el-row class="lifeItem">
      <el-col :span="4" v-for="(o, index) in lifeList" :key="o" :offset="1" :pull="1" :push="1">
        <el-card shadow="hover" :body-style="{ padding: '0px'}">
          <img :src="o.imgSrc" class="image" />
          <div style="padding: 14px;">
            <span>{{o.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" @click="redirection(o.href)" class="button">查看</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "contact-site",
  data() {
    return {
      lifeList: [
        {
          title: "日本旅行分享",
          imgSrc:
            "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1582516787&di=a44ba6a38586fad315bdb56cf26e9cae&src=http://b-ssl.duitang.com/uploads/item/201808/21/20180821150746_PHjvA.thumb.700_0.jpeg",
          href: ""
        },
        {
          title: "四川旅行分享",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582526901743&di=62d9c40f7206481dccc8f139e75c454c&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg6%2FM04%2F8E%2F5C%2FCggYsla_7_SAffs8ABmOYDJMwVY623.jpg",
          href: ""
        },
        {
          title: "上海旅行分享",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582526925712&di=e789d04e28f2eba8e350e5e0c8a892cf&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fd%2F53c34e167437d.jpg",
          href: ""
        },
        {
          title: "新西兰旅行分享",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582527001026&di=b9405723a416328b8f821641247f9752&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F597985ad9614f.jpg",
          href: ""
        },
        {
          title: "宁夏旅行分享",
          imgSrc:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1505892862,543165590&fm=26&gp=0.jpg",
          href: ""
        },
        {
          title: "浙江旅行分享",
          imgSrc:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1989401558,1820116918&fm=26&gp=0.jpg",
          href: ""
        },
        {
          title: "浙江旅行分享",
          imgSrc:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1989401558,1820116918&fm=26&gp=0.jpg",
          href: ""
        },
        {
          title: "浙江旅行分享",
          imgSrc:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1989401558,1820116918&fm=26&gp=0.jpg",
          href: ""
        }
      ],
      currentDate: new Date()
    };
  },
  methods: {
    redirection(src) {
      this.$notify.info({
        title: "消息",
        message: "执行跳转"
      });
      window.location.href = "www.baidu.com";
    }
  }
};
</script>

<style scoped>
hr {
  margin: 10px 0;
}
.lifeDesc {
  width: 400px;
  display: block;
  margin: 0 auto;
  text-align: center;
}
.life {
  font-size: 27px;
  font-family: sans-serif;
  margin: 15px 0;
}
.lifeItem {
  width: 1000px;
  margin: 0 auto;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  min-height: 123px;
  min-width: 164px;
  max-height: 123px;
  max-width: 164px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-col .el-col-4 {
}
</style>