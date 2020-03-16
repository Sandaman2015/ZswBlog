import Vue from 'vue'
import Router from 'vue-router'
import Content from "../../../modules/about/AboutContent"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about-content',
      component: Content
    }
  ]
})
