// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App2 from './App2'
import "./assets/css/nheader.css";
import "./assets/css/nstyle.css";
import "../../../static/js/jquery.js"
import "../../../static/js/page.js"

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 2500,  // 递增进度条的速度    
  showSpinner: true, // 是否显示加载ico    
  trickleSpeed: 100, // 自动递增间隔    
  minimum: 0.1 // 初始化时的最小百分比
})
NProgress.start();
NProgress.done();
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '.header',
  components: { App },
  template: '<app/>'
})
new Vue({
  el: '.wrap',
  components: { App2 },
  template: '<app2/>'
})
