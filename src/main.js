import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apiObj from '@/api'
import '@/router/routerBefor';
import 'vant/lib/index.css';
import '@/assets/css/common.css'
import '@/assets/css/iconfont.css'
import '@vant/touch-emulator';
Vue.prototype.$api = apiObj


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
