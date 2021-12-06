import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'index',
        component: () => import('@/view/home.vue'),
        meta: {
            title: '首页',
        }
    }
  ]
})
