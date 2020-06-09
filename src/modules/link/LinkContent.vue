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
              v-for="(item,index) in Linklist"
              class="list-item wow fadeInLeft wow bounceInRight"
              style="max-width:195px;min-height:290px"
              :key="index"
            >
              <div class="col-md-4">
                <a :href="item.linkSrc" target="_blank" class="fh5co-project-item image-popup">
                  <figure>
                    <div class="overlay">
                      <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </div>
                    <img :src="item.linkImage" alt="Image" class="img-responsive" />
                  </figure>
                  <div class="fh5co-text" style="height:100px">
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
        let wow = new WOW({
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
@import url("../../pages/link/assets/css/link.css");
</style>