// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import "../../../static/css/font-awesome.min.css";
import "../../../static/css/common.css";
import 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
import hljs from 'highlight.js' // 导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css' // 导入代码高亮样式
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)
Vue.use(Share) // 分享组件
Vue.use(VueClipboard) // 复制内容到剪贴板
Vue.use(ElementUI)

NProgress.configure({
  easing: 'ease', // 动画方式    
  speed: 2500, // 递增进度条的速度    
  showSpinner: true, // 是否显示加载ico    
  trickleSpeed: 100, // 自动递增间隔    
  minimum: 0.1 // 初始化时的最小百分比
})
NProgress.done()
Vue.config.productionTip = false

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#details',
  router,
  components: {
    App
  },
  template: '<App/>'
})