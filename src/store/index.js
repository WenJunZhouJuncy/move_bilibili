import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ROUTERTO: ''
  },
  mutations: {
    SETROUTERTO(state, val) {
      state.ROUTERTO = val
      console.log(state)
    }
  },
  actions: {},
  modules: {}
});
