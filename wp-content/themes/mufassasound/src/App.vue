<template>
<div id="app">
  <div class="b_hamburger"
       v-on:click= "myFilter" v-bind:class="{ active: isActive }">
    <div class="box">
      <div class="inner"></div>
    </div>
  </div>
  <div class="wrapper" v-on:click= "myFilter" v-bind:class="{ active: isActive }">
    <nav class="b_nav">
      <router-link  class="link waves-effect waves-button waves-float" to="/">
        <svg class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nav_home"></use>
        </svg>
        <span class="title">Home {{ locale }}</span>
      </router-link>
      <router-link class="link waves-effect waves-button waves-float" to="/about">
        <svg class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nav_about"></use>
        </svg>
        <span class="title">About</span>
      </router-link>
      <router-link class="link waves-effect waves-button waves-float" to="/portfolio">
        <svg class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nav_portfolio"></use>
        </svg>
        <span class="title">Portfolio</span>
      </router-link>
      <router-link class="link waves-effect waves-button waves-float" to="/contact">
        <svg class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nav_contact"></use>
        </svg>
        <span class="title">Contact</span>
      </router-link>
    </nav>
  </div>
  <article class="l_main_info">
    <div class="container">
      <div class="b_logo">
        <svg class="image main_logo">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
        </svg>
        <svg class="image mobile">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile_logo"></use>
        </svg>
      </div>
      <div class="wrap">
        <header class="b_site_title">
          <h1 class="title" v-if="acfFields">{{acfFields.sidebar_title}}</h1>
          <p class="sub_title" v-if="acfFields">{{acfFields.sidebar_role}}</p>
        </header>
        <div class="b_social">
          <a v-bind:href="social.link" v-bind:class="'link fa ' + 'fa-'+ social.social_name" v-for="social in socials" target="_blank"></a>
        </div>
        <button v-on:click="swtichLocale()">{{ otherLocale }}</button>
      </div>
      <p class="b_paragraph" v-if="acfFields">{{acfFields.sidebar_about_me}}</p>
      <button class="b_dl_button">Download My CV</button>
    </div>
    <footer class="b_copywrite" v-if="copyright">{{ ml_copyright }}</footer>

  </article>
  <main id="main">
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
  </main>
</div>


</template>

<style lang="sass">
@import "styles/variables"


#app
  display: flex
  .wrapper
    position: relative
    max-width: 100px
    min-height: 100vh

    flex: 1 100px
    transition: transform .25s ease-in
    z-index: 1
    @media (max-width: 992px)

      max-width: 75px
    @media (max-width: 720px)
      max-width: 320px
      width: 320px
      top: 50px
      z-index: 3


    &.active
      @media (max-width: 720px)
        transform: translateX(0px)

        .b_nav
          transform: translateX(0px)



    @media (max-width: 720px)
      transform: translateX(-320px)
      position: absolute



#main
  overflow: hidden
  flex: 1 630px

  @media (max-width: 720px)
    flex-basis: auto



.b_nav

  position: fixed
  width: 100%
  max-width: inherit
  min-height: 100vh
  background-color: $nav_bg
  font-family: 'Poppins', sans-serif
  font-size: 13px
  text-transform: uppercase
  transition: transform 1s
  @media (max-width: 992px)
    z-index: 2
    font-size: 12px




  a
    display: flex
    justify-content: center
    flex-flow: column wrap
    height: 100px
    text-align: center
    color: $nav_font_color

    border-bottom: $hr_color 1px solid
    @media (max-width: 992px)
      height: 75px


    &.router-link-exact-active
      color: $white
      background-color: $nav_active_color
      .icon
        fill: $white
  .icon
    margin: 0 auto
    width: 24px
    height: 24px
    fill: $nav_color
  .title
    margin-top: 10px

.l_main_info
  position: relative
  flex: 1 220px
  max-width: 380px
  min-height: 100vh
  font-size: 19px
  background-color: rgba($white, 0.85)

  //  TABLET/MOBILE
  @media (max-width: 992px)
    transform: translateX(75px)
    position: fixed
    max-width: 100%
    width: 100%
    /*padding-left: 75px*/
    min-height: 50px
    height: 50px
    flex-basis: auto
    z-index: 3
    background-color: $black
  @media (max-width: 720px)
    transform: translateX(0px)

  .container
    padding: 0 20px 70px
    display: flex
    justify-content: space-around
    flex-flow: column
    height: 100%
    max-height: 905px
    @media (max-width: 992px)
      padding: 0
      flex-flow: row
      justify-content: flex-start

    .wrap
      @media (max-width: 992px)
        height: 100%
        width: 100%

  &:before
    content: ""
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    background: url("assets/pattern.jpg") top center repeat-y
    z-index: -1
    @media (max-width: 992px)
      content: none

.b_logo
  display: flex
  position: relative
  top: 2%
  margin: 0 auto
  width: 188px
  height: 188px
  @media (max-width: 992px)
    width: 50px
    height: 50px
    margin: 0 0 0 5%
    top: 0

  .image
    margin: auto
    max-width: 188px
    height: auto

  .image.mobile
    display: none
    visibility: hidden
    height: 46px
    fill: #fff

  .image.mobile
    @media (max-width: 992px)
      display: inline
      visibility: visible

  .image.main_logo
    @media (max-width: 992px)
      display: none

.b_site_title
  text-align: center
  font-family: 'Poppins', sans-serif

  //  TABLET/MOBILE
  @media (max-width: 992px)
    display: flex
    height: 100%

  .title
    margin: 0
    font-size: 40px
    font-weight: 700
    text-transform: uppercase

    //  TABLET/MOBILE
    @media (max-width: 992px)
      color: $white
      margin: auto 0 auto 5%
      line-height: 1


  .sub_title
    margin: 0
    padding-top: 19px
    font-size: 28px
    letter-spacing: 0
    font-weight: 200
    color: $secondary_color

    //  TABLET/MOBILE
    @media (max-width: 992px)
      margin: auto 0 auto 5%
      line-height: 1
      padding-top: 0
    @media (max-width: 600px)
      display: none


.b_social
  padding-top: 9px
  font-size: 25px
  text-align: center
  display: flex
  justify-content: center
  margin: 0 auto
  max-width: 200px

  //  TABLET/MOBILE
  @media (max-width: 992px)
    display: none

  .link
    display: flex
    justify-content: center
    flex-direction: column
    width: 33px
    height: 33px
    color: $secondary_color
    border: solid 1px

.b_paragraph
  font-size: 14px
  letter-spacing: 0
  line-height: 28px
  text-align: justify
  text-align-last: center
  font-weight: 300
  color: $main_font_color

  //  TABLET/MOBILE
  @media (max-width: 992px)
    display: none
  @media (max-height: 700px)
    line-height: 20px

.b_dl_button
  display: block
  margin: 0 auto
  height: 50px
  width: 90%
  border: none
  background-color: $black
  box-shadow: none
  color: $white
  font-family: 'Poppins', sans-serif
  font-size: 14px
  font-weight: 700
  text-transform: uppercase

  //  TABLET/MOBILE
  @media (max-width: 992px)
    display: none

.b_copywrite
  position: absolute
  bottom: 0
  left: 0
  right: 0
  text-align: center
  line-height: 70px
  margin: 0 auto
  font-family: 'Poppins', sans-serif
  font-size: 13px
  color: $secondary_color

  //  TABLET/MOBILE
  @media (max-width: 992px)
    display: none

.b_hamburger
  display: none
  position: fixed
  top: 13px
  right: 10px
  z-index: 4
  cursor: pointer
  transition-property: opacity, filter
  transition-duration: 0.15s
  transition-timing-function: linear
  font: inherit
  color: inherit
  text-transform: none
  background-color: transparent
  border: 0
  margin: 0
  overflow: visible
  @media (max-width: 720px)
    display: inline-block
  &:hover
    opacity: 0.7

  .box
    width: 30px
    height: 24px
    display: inline-block
    position: relative

  .inner
    display: block
    top: 50%
    margin-top: -2px
    width: 30px
    height: 2px
    background-color: #fff
    border-radius: 4px
    position: absolute
    transition-property: transform
    transition-duration: 0.15s
    transition-timing-function: ease



    &::before, &::after
      width: 30px
      height: 2px
      background-color: #fff
      border-radius: 4px
      position: absolute
      transition-property: transform
      transition-duration: 0.15s
      transition-timing-function: ease



    &::before, &::after
      content: ""
      display: block
    &::before
      top: -10px
    &::after
      bottom: -10px


  .inner
    top: 2px
    transition-duration: 0.275s
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55)
    &::before
      top: 10px
      transition: opacity 0.125s 0.275s ease
    &::after
      top: 20px
      transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55)

  &.active .inner
    transform: translate3d(0, 10px, 0) rotate(135deg)
    transition-delay: 0.075s
    &::before
      transition-delay: 0s
      opacity: 0
    &::after
      transform: translate3d(0, -20px, 0) rotate(-270deg)
      transition-delay: 0.075s
</style>

<script>
let rootLink = window.apiRoot.acf
let homePage = '/pages/7'
  import axios from 'axios';
  import {mapGetters} from 'vuex'
  // import VueI18n from "vue-i18n";
  // import messages from "./data";
    export default {
        data() {
            return {
                // logo: require('./assets/logo.png'),
                isActive: false,
                acfFields: null,
                socials: null,
                copyright: {
                  en: null,
                  ru: null
                },
                copyright_eng: null,
            };
        },
        methods: {
            myFilter: function(){
                this.isActive = !this.isActive;
                // some code to filter users
            },
          },
        computed: {
          ml_copyright() {
            return this.isEn ? this.copyright.en : this.copyright.ru
          }
  },
        created(){
          axios.get(`${rootLink}/options/options`).then((response) => {
          this.acfFields = response.data.acf
          this.copyright.en = this.acfFields.copyright
          this.copyright.ru = this.acfFields.copyright_ru
          this.socials = response.data.acf.social_links
          console.log(this.$i18n)
          console.log(this.locale)
        })
        }
    }
</script>

