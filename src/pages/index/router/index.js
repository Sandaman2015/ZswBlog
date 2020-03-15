import Vue from 'vue'
import Router from 'vue-router'
import Footer from '../../../components/Footer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Footer
    }
  ]
})
