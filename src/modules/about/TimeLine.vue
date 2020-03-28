<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        :timestamp="item.time|filterYear"
        v-for="item in timelineList"
        :key="item.id"
        class="animated fadeInLeft"
        :color="color"
        placement="top"
        :size="size"
        :icon="icon"
        type="success"
      >
        <el-card>
          <h2>{{item.title}}</h2>
          <p class="time">张晟玮 提交于 {{item.time|filterDate}}</p>
          <div v-html="item.content" class="iframe"></div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { getAllTimeLine } from "../../../static/js/api/about.api";
export default {
  data() {
    return {
      timelineList: [],
      color: "#0bbd87",
      size: "large",
      icon: "el-icon-collection-tag"
    };
  },
  mounted() {
    this.pageLoad();
  },
  filters: {
    filterDate(date) {
      return date.replace("T00:00:00", " ");
    },
    filterYear(year) {
      return (
        year.substring(0, 4) +
        "年" +
        year.substring(4, 7).replace("-0", "") +
        "月"
      );
    }
  },
  methods: {
    async pageLoad() {
      await getAllTimeLine().then(e => {
        this.timelineList = e;
      });
    }
  }
};
</script>

<style  scoped>
.iframe {
  margin-top: 25px;
}
/* .el-timeline-item__timestamp {
  font-size: 27px !important;
}
.is-top {
  font-size: 27px;
  color: cornflowerblue;
} */
.time {
  font-size: 13px;
  color: #555;
}
.el-timeline-item__node {
  background-color: cornflowerblue;
}
@media screen and (max-width: 475px) {
  .el-card .is-always-shadow img {
    max-width: 100% !important;
  }
}
</style>