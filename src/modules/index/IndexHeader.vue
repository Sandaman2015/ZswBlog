<template>
  <!-- <div class="header"> -->
  <ul class="nav_list">
    <li class="nav_li">
      <a href="javascript:;" class="btn_nav" id="nav_more">
        <i class="ic_more png"></i>
      </a>
      <div class="more_nav" id="more_nav">
        <i class="ic_bdot png" id="h_bdot"></i>
        <ul id="h_nav">
          <li>
            <a href="whisper.html" class="btn_snav">文章</a>
          </li>
          <li>
            <a href="leacots.html" class="btn_snav">留言</a>
          </li>
          <li>
            <a href="link.html" class="btn_snav">友链</a>
          </li>
          <li>
            <a href="tags.html" class="btn_snav">标签</a>
          </li>
          <li>
            <i class="ic_sdot png" id="h_sdot"></i>
            <dl class="sub_nav" id="h_subnav">
              <dt>
                <a href="about.html" class="btn_snav">关于本站</a>
              </dt>
              <dd>
                <a href="about.html?id=1">微标签</a>
              </dd>
              <dd>
                <a href="about.html?id=2">音乐馆</a>
              </dd>
              <dd>
                <a href="about.html?id=3">时间线</a>
              </dd>
              <dd>
                <a href="about.html?id=4">生活分享</a>
              </dd>
              <dd>
                <a href="about.html?id=5">关于我</a>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </li>
  </ul>
  <!-- </div> -->
</template>

<script>
import { getQQUserInfo } from "../../../static/js/api/login.api";
import { getCookie, setCookie } from "../../../static/js/cookie";
export default {
  components: {},
  data() {
    return {
      userId: 0,
      userImage: ""
    };
  },
  created() {
    this.login();
  },
  methods: {
    async login() {
      if (window.location.hash.length != 0) {
        // 获取access token
        let accessToken = window.location.hash.substring(1).slice(13, -19);
        await getQQUserInfo(accessToken).then(e => {
          this.userImage = e.data.figureurl_1;
          this.userId = e.userId;
          setCookie("userImage", e.data.figureurl_1, 1200);
          setCookie("userId", e.userId, 1200);
          if (e.userEmail !== "" && e.userEmail !== null) {
            setCookie("userEmail", e.userEmail, 60);
          } else {
            window.location.href = "register.html";
          }
        });
      }
    }
  }
};
</script>

