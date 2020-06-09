import Vue from 'vue'
import App from './App'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import "../../../static/css/font-awesome.min.css";
import "../../../static/css/common.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
NProgress.configure({
  easing: 'ease', // 动画方式    
  speed: 2500, // 递增进度条的速度    
  showSpinner: true, // 是否显示加载ico    
  trickleSpeed: 100, // 自动递增间隔     
  minimum: 0.1 // 初始化时的最小百分比
})
NProgress.done();
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#register',
  // router,
  components: {
    App
  },
  template: '<App/>'
})