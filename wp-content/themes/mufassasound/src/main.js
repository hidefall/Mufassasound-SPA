import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.sass'
import VueCarousel from 'vue-carousel';
import 'font-awesome/css/font-awesome.css';
import Waves from 'vue-directive-waves'
// import axios from 'axios';

Vue.use(Waves);
Vue.use(VueCarousel);
// import 'normalize-scss/sass/normalize/import-now'
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

