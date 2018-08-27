import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/main.sass";
import VueCarousel from "vue-carousel";
import "font-awesome/css/font-awesome.css";
import Waves from "vue-directive-waves";
// import i18n from "./data";

// import axios from 'axios';
Vue.use(Waves);
Vue.use(VueCarousel);
// Vue.use(VueI18n);
// import 'normalize-scss/sass/normalize/import-now'
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.debug = true;

Vue.use({
  install(Vue) {
    Vue.mixin({
      computed: {
        locale() {
          return this.$store.getters.locale;
        },
        isEn() {
          return this.locale === "en";
        },
        isRu() {
          return this.locale === "ru";
        }
      },
      methods: {
        swtichLocale() {
          this.$store.commit("LOCALE", this.locale === "en" ? "ru" : "en");
        }
      }
    });
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
