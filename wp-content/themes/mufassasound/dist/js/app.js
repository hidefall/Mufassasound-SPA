(function(t){function s(s){for(var e,n,l=s[0],c=s[1],r=s[2],f=0,_=[];f<l.length;f++)n=l[f],a[n]&&_.push(a[n][0]),a[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(s);while(_.length)_.shift()();return o.push.apply(o,r||[]),i()}function i(){for(var t,s=0;s<o.length;s++){for(var i=o[s],e=!0,l=1;l<i.length;l++){var c=i[l];0!==a[c]&&(e=!1)}e&&(o.splice(s--,1),t=n(n.s=i[0]))}return t}var e={},a={app:0},o=[];function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,s,i){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(i,e,function(s){return t[s]}.bind(null,e));return i},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=s,l=l.slice();for(var r=0;r<l.length;r++)s(l[r]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"04bc":function(t,s,i){"use strict";var e=i("f7ed"),a=i.n(e);a.a},"144b":function(t,s,i){},3654:function(t,s,i){"use strict";var e=i("d1d6"),a=i.n(e);a.a},"3c3c":function(t,s,i){"use strict";var e=i("144b"),a=i.n(e);a.a},"56d7":function(t,s,i){"use strict";i.r(s);i("cadf"),i("551c"),i("097d");var e=i("2b0e"),a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"b_hamburger",class:{active:t.isActive},on:{click:t.myFilter}},[t._m(0)]),i("div",{staticClass:"wrapper",class:{active:t.isActive},on:{click:t.myFilter}},[i("nav",{staticClass:"b_nav"},[i("router-link",{staticClass:"link waves-effect waves-button waves-float",attrs:{to:"/"}},[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#nav_home"}})]),i("span",{staticClass:"title"},[t._v("Home "+t._s(t.locale))])]),i("router-link",{staticClass:"link waves-effect waves-button waves-float",attrs:{to:"/about"}},[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#nav_about"}})]),i("span",{staticClass:"title"},[t._v("About")])]),i("router-link",{staticClass:"link waves-effect waves-button waves-float",attrs:{to:"/portfolio"}},[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#nav_portfolio"}})]),i("span",{staticClass:"title"},[t._v("Portfolio")])]),i("router-link",{staticClass:"link waves-effect waves-button waves-float",attrs:{to:"/contact"}},[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#nav_contact"}})]),i("span",{staticClass:"title"},[t._v("Contact")])])],1)]),i("article",{staticClass:"l_main_info"},[i("div",{staticClass:"container"},[i("div",{staticClass:"b_logo"},[i("svg",{staticClass:"image main_logo"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#logo"}})]),i("svg",{staticClass:"image mobile"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#mobile_logo"}})])]),i("div",{staticClass:"wrap"},[i("header",{staticClass:"b_site_title"},[t.acfFields?i("h1",{staticClass:"title"},[t._v(t._s(t.acfFields.sidebar_title))]):t._e(),t.acfFields?i("p",{staticClass:"sub_title"},[t._v(t._s(t.ml.role))]):t._e()]),i("div",{staticClass:"b_social"},t._l(t.socials,function(t){return i("a",{class:"link fa fa-"+t.social_name,attrs:{href:t.link,target:"_blank"}})})),i("button",{staticClass:"ml_switcher",on:{click:function(s){t.swtichLocale()}}},[t._v(t._s(t.otherLocale)),i("span",{staticClass:"ml_swticher_img"})])]),t.acfFields?i("p",{staticClass:"b_paragraph"},[t._v(t._s(t.ml.about_me))]):t._e(),i("button",{staticClass:"b_dl_button"},[t._v("Download My CV")])]),t.acfFields?i("footer",{staticClass:"b_copywrite"},[t._v(t._s(t.ml.copyright))]):t._e()]),i("main",{attrs:{id:"main"}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])},o=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box"},[i("div",{staticClass:"inner"})])}],n=i("bc3a"),l=i.n(n),c=i("2f62"),r=window.apiRoot.acf,u={data:function(){return{isActive:!1,acfFields:null,socials:null}},methods:{myFilter:function(){this.isActive=!this.isActive}},computed:{ml:function(){return{copyright:this.isEn?this.acfFields.copyright:this.acfFields.copyright_ru,role:this.isEn?this.acfFields.sidebar_role:this.acfFields.sidebar_role_ru,about_me:this.isEn?this.acfFields.sidebar_about_me:this.acfFields.sidebar_about_me_ru}}},created:function(){var t=this;l.a.get("".concat(r,"/options/options")).then(function(s){t.acfFields=s.data.acf,t.socials=t.acfFields.social_links})}},f=u,_=(i("cf25"),i("2877")),d=Object(_["a"])(f,a,o,!1,null,null,null);d.options.__file="App.vue";var p=d.exports,h=i("8c4f"),v=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"l_about"},[i("video",{attrs:{poster:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg",id:"bgvid",playsinline:"",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[i("source",{attrs:{src:"http://localhost:8080/zimba/wp-content/uploads/2018/08/LOGO-MufassaSound_Loop.mp4",type:"video/mp4"}})]),i("div",{staticClass:"b_square"},[i("carousel",{attrs:{loop:!0,perPage:1,navigationEnabled:!0,paginationEnabled:!1,autoplay:!0,autoplayTimeout:5e3}},t._l(t.slides,function(s){return i("slide",[i("div",{staticClass:"slide"},[t.isEn?i("h3",{staticClass:"sup_title"},[t._v(t._s(s.slide_subtitle_eng))]):t._e(),t.isRu?i("h3",{staticClass:"sup_title"},[t._v(t._s(s.slide_subtitle))]):t._e(),t.isEn?i("h2",{staticClass:"title"},[t._v(t._s(s.slide_title_eng))]):t._e(),t.isRu?i("h2",{staticClass:"title"},[t._v(t._s(s.slide_title))]):t._e(),t.isEn?i("p",{staticClass:"sub_title"},[t._v(t._s(s.slide_description_eng))]):t._e(),t.isRu?i("p",{staticClass:"sub_title"},[t._v(t._s(s.slide_description))]):t._e()])])}))],1)])},m=[],b=i("0a63"),w=i.n(b),g=i("a925");e["a"].use(g["a"]);var C={en:{message:{hello:"hello world"},copyright:null},ru:{message:{hello:"Bonjour monde"},copyright:null}},k=window.apiRoot.acf;l.a.get("".concat(k,"/options/options")).then(function(t){C.en.copyright=t.data.acf.copyright,C.ru.copyright=t.data.acf.copyright_ru,console.log(C)});new g["a"]({locale:"ru",messages:C,created:function(){console.log(this.$route.path),console.log("frforf")},mounted:function(){console.log(this.$router),console.log("frforf")},watch:{$route:function(t,s){console.log("frforf")}}});var y={data:function(){return{acfFields:null,slides:null}},components:{Carousel:b["Carousel"],Slide:b["Slide"]},mounted:function(){var t=this;l.a.get("".concat(window.apiRoot.acf,"/pages/7")).then(function(s){t.acfFields=s.data.acf,t.slides=s.data.acf.slide,console.log(t.slides)})}},x=y,F=(i("3654"),Object(_["a"])(x,v,m,!1,null,null,null));F.options.__file="Home.vue";var E=F.exports,O=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"l_about m_l_about "},[i("div",{staticClass:"main_wrap"},[i("div",{staticClass:"b_square"},[i("div",{staticClass:"slide"},[t.acfFields?i("h3",{staticClass:"sup_title m_sup_about"},[t._v(t._s(t.ml.title))]):t._e(),t.acfFields?i("h2",{staticClass:"title m_title_about"},[t._v(t._s(t.ml.sub_title))]):t._e(),t.acfFields?i("p",{staticClass:"sub_title m_sub_about"},[t._v(t._s(t.ml.description))]):t._e()])])]),i("div",{staticClass:"b_statistic"},t._l(t.statistics,function(s){return i("div",{staticClass:"item"},[i("p",{staticClass:"number"},[t._v(t._s(s.statistic_number))]),t.isEn?i("p",{staticClass:"title"},[t._v(t._s(s.statistic_text))]):t._e(),t.isRu?i("p",{staticClass:"title"},[t._v(t._s(s.statistic_text_ru))]):t._e()])}))])},j=[],$=(window.apiRoot.acf,"/pages/37"),A={data:function(){return{title:null,subTitle:null,description:null,acfFields:null,statistics:[]}},computed:{ml:function(){return{title:this.isEn?this.acfFields.about_title:this.acfFields.about_title_ru,sub_title:this.isEn?this.acfFields.about_sub_title:this.acfFields.about_sub_title_ru,description:this.isEn?this.acfFields.about_description:this.acfFields.about_description_ru}}},mounted:function(){var t=this;l.a.get("".concat(window.apiRoot.acf).concat($)).then(function(s){t.acfFields=s.data.acf,t.statistics=t.acfFields.statistics})}},S=A,L=(i("3c3c"),Object(_["a"])(S,O,j,!1,null,null,null));L.options.__file="About.vue";var R=L.exports,P=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"l_portfolio"},[t._m(0),i("div",{staticClass:"l_posts ",class:{no_scroll:t.route}},[i("div",{staticClass:"l_works"},t._l(t.portfolios,function(s,e){return i("div",{key:e,staticClass:"b_work",style:{backgroundImage:"url("+s.acf.preview_image.url+")"},on:{click:function(i){t.$router.push({name:"post",params:{id:s.id}})}}},[i("a",{staticClass:"view fa fa-eye",attrs:{href:"#"}}),i("a",{staticClass:"share fa fa-link",attrs:{href:"#"}})])})),i("router-view")],1)])},T=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"b_header"},[i("p",{staticClass:"description"},[t._v("Portfolio All of Time")]),i("h3",{staticClass:"title"},[t._v("My portfolio")])])}],M=window.apiRoot.acf,D="/portfolio",q={data:function(){return{image:"<%= BASE_URL %>/assets/item01.jpg",postActive:!1,acfFields:null,portfolios:null}},computed:{route:function(){return"/portfolio"!==this.$route.path}},mounted:function(){var t=this;l.a.get("".concat(M).concat(D)).then(function(s){t.acfFields=s.data.acf,t.portfolios=s.data})}},z=q,B=(i("ee12"),Object(_["a"])(z,P,T,!1,null,null,null));B.options.__file="Portfolio.vue";var H=B.exports,I=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",t._l(t.posts,function(s){return i("li",[i("p",[i("strong",[t._v(t._s(s.title))])]),i("p",[t._v(t._s(s.body))])])}))},J=[],U={data:function(){return{posts:[],errors:[]}},created:function(){var t=this;l.a.get("http://jsonplaceholder.typicode.com/posts").then(function(s){t.posts=s.data}).catch(function(s){t.errors.push(s)})}},G=U,V=Object(_["a"])(G,I,J,!1,null,null,null);V.options.__file="Contact.vue";var K=V.exports,N=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"l_post"},[t.loading?i("div",{staticClass:"loading"},[t._v("\n      Загрузка...\n    ")]):t._e(),i("div",{staticClass:"b_video"},[i("iframe",{attrs:{src:t.acf.video_link,width:"640",height:"360",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),i("div",{staticClass:"l_post_info"},[i("h4",{staticClass:"title"},[t._v(t._s(t.ml_title))]),i("p",{staticClass:"sub_title"},[t._v(t._s(t.ml_sub_title))]),i("p",{staticClass:"description"},[t._v(t._s(t.ml_description))])])])},Q=[],W=window.apiRoot.acf,X={props:["id"],data:function(){return{postActive:!1,loading:!1,acf:{}}},watch:{$route:"fetchData"},computed:{ml_title:function(){return this.isEn?this.acf.title:this.acf.title_ru},ml_sub_title:function(){return this.isEn?this.acf.sub_title:this.acf.sub_title_ru},ml_description:function(){return this.isEn?this.acf.description:this.acf.description_ru}},methods:{fetchData:function(){var t=this;this.loading=!0,l.a.get("".concat(W,"/portfolio/").concat(this.id)).then(function(s){t.acf=s.data.acf,t.loading=!1})}},mounted:function(){this.fetchData()}},Y=X,Z=(i("04bc"),Object(_["a"])(Y,N,Q,!1,null,"46f99d2c",null));Z.options.__file="Post.vue";var tt=Z.exports;e["a"].use(h["a"]);var st=new h["a"]({routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:R},{path:"/portfolio",name:"portfolio",component:H,children:[{path:"post/:id",name:"post",component:tt,props:function(t){return{id:parseInt(t.params.id)}}}]},{path:"/contact",name:"contact",component:K}]});e["a"].use(c["a"]);var it=new c["a"].Store({state:{locale:"en"},getters:{locale:function(t){return t.locale}},actions:{autoDetectLocale:function(t){t.commit("SET_LOCALE","en-US"===window.navigator.language?"en":"ru")}},mutations:{SET_LOCALE:function(t,s){t.locale=s}}}),et=(i("767e"),i("7f10"),i("fd01")),at=i.n(et);e["a"].use(at.a),e["a"].use(w.a),e["a"].config.productionTip=!1,e["a"].config.devtools=!0,e["a"].config.debug=!0,it.dispatch("autoDetectLocale"),e["a"].use({install:function(t){t.mixin({computed:{locale:function(){return this.$store.getters.locale},isEn:function(){return"en"===this.locale},isRu:function(){return"ru"===this.locale}},methods:{swtichLocale:function(){this.$store.commit("SET_LOCALE","en"===this.locale?"ru":"en")}}})}});document.querySelector(".ml_switcher");new e["a"]({store:it,router:st,render:function(t){return t(p)}}).$mount("#app")},7386:function(t,s,i){},"767e":function(t,s,i){},cf25:function(t,s,i){"use strict";var e=i("7386"),a=i.n(e);a.a},d1d6:function(t,s,i){},ee12:function(t,s,i){"use strict";var e=i("fae6"),a=i.n(e);a.a},f7ed:function(t,s,i){},fae6:function(t,s,i){}});
//# sourceMappingURL=app.js.map