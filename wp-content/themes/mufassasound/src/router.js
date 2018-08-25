import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Portfolio from "./views/Portfolio.vue";
import Contact from "./views/Contact.vue";
import Post from "./views/Post.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      children: [
        {
          path: "post/:id",
          name: "post",
          component: Post
        }
      ]
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
