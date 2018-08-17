import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/main.sass";
import "vue-material-design-icons/styles.css";
import VueCarousel from "vue-carousel";

// Vue.use(axios);
Vue.use(VueCarousel);
// import 'normalize-scss/sass/normalize/import-now'
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
