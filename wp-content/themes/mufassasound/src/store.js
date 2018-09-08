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

  actions: {
    autoDetectLocale(ctx) {
      ctx.commit(
        "SET_LOCALE",
        window.navigator.language === "en-US" ? "en" : "ru"
      );
    }
  },

  mutations: {
    SET_LOCALE(state, locale) {
      state.locale = locale;
    }
  }
});
