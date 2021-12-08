import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('@/view/home.vue'),
        meta: {
            title: '首页',
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/view/home.vue'),
        meta: {
            title: '首页',
        }
    },
    {
      path: '/metting',
      name: 'metting',
      component: () => import('@/view/meeting.vue'),
      meta: {
          title: '首页',
      }
  }
  ]
})
