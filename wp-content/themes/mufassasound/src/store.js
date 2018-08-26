import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: "en"
  },

  getters: {
    locale(state) {
      return state.locale;
    }
  },

  mutations: {
    LOCALE(state, locale) {
      state.locale = locale;
    }
  }
});
