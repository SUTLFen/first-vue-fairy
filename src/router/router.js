import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
import btnPage from '../pages/btnPage.vue'
import listPage from '../pages/listPage.vue'
import navPage from '../pages/navPage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btnPage',
      name: 'btnPage',
      component: btnPage
    },
    {
      path: '/lisPage',
      name: 'listPage',
      component: listPage
    },
    {
      path: '/navPage',
      name: 'navPage',
      component: navPage
    },


  ]
})
