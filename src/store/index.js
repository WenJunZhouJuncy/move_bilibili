import Vue from "vue";
import Vuex from "vuex";
import $COOKIES from "@/assets/js/common/token";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerImg: $COOKIES.getHeaderImg('headerImg') || ''
  },
  mutations: {
  },
  actions: {},
  modules: {}
});
