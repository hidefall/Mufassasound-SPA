import Vue from "vue";

import VueI18n from "vue-i18n";
import axios from "axios";
import router from "./router";
Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: "hello world"
    },
    copyright: null
  },
  ru: {
    message: {
      hello: "Bonjour monde"
    },
    copyright: null
  }
};
let rootLink = window.apiRoot.acf;
let homePage = "/pages/7";

axios.get(`${rootLink}/options/options`).then(response => {
  messages.en.copyright = response.data.acf.copyright;
  messages.ru.copyright = response.data.acf.copyright_ru;
  console.log(messages);
});

// if (this.$route.path === "/portfolio") {
//   console.log("false");
// } else {
// console.log(window.location.hash);
// }

export default new VueI18n({
  locale: "ru", // set locale
  messages,
  created() {
    console.log(this.$route.path);
    console.log("frforf");
  },
  mounted() {
    console.log(this.$router);
    console.log("frforf");
  },
  watch: {
    $route(to, from) {
      console.log("frforf");
    }
  }
});
