import Vue from 'vue'
import Router from 'vue-router'
import Content from "../../../modules/tags/TagsContent"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tags',
      name: 'tags-content',
      component: Content
    }
    // ,{
    //   path: '/tags-site',
    //   name: 'tags-site',
    //   component: Tags
    // },
    // {
    //   path: '/music-site',
    //   name: 'music-site',
    //   component: Music
    // },
    // {
    //   path: '/contact-site',
    //   name: 'contact-site',
    //   component: Contact
    // },
    // {
    //   path: '/me-site',
    //   name: 'me-site',
    //   component: Me
    // }
  ]
})
