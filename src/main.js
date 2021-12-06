import Vue from 'vue'
import App from './App.vue'
import router from './router'
//中英文切换
import ZH from '@/utils/language/zh.js'  //中文最终汇总暴露的信息
import EN from '@/utils/language/en.js'  //英文
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale:localStorage.getItem('languageSet')||'zh',   //从localStorage里获取用户中英文选择，没有则默认中文
    messages:{
        'zh': ZH,
        'en': EN
    }
})
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
