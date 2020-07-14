import router from '../index';
import $COOKIES from '@/assets/js/common/token.js';
import Vue from 'vue';
import { Toast } from 'vant'
Vue.use(Toast)
// 路由拦截
router.beforeEach((to, from, next) => {
  if ($COOKIES.getToken('admin') && $COOKIES.getUserId('id')) {
    console.log(to, from);
    if ('/loginRegister'.includes(to.path)) {
      let routerTo = sessionStorage.getItem('routerTo')
      next(routerTo)
    } else {
      sessionStorage.setItem('routerTo',to.path)
      next()
    }
  } else {
    if (to.meta.authority) {
      Toast.fail('请重新登录')
      next('/loginRegister')
    } else {
      next()
    }
  }
})
