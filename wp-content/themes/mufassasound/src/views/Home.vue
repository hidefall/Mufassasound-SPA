<template>
  <div class="l_about">

    <div class="color_wrapper">
      <div class="b_square">
        <carousel :loop="true" :perPage="1" :navigationEnabled="true" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="5000">
          <slide>
            <div class="slide">
              <h3 class="sup_title">Welcom to Mr.Dat's Portfolio </h3>
              <h2 class="title" v-if="acfFields">{{acfFields.home_page_title}}</h2>
              <p class="sub_title">My name is Dat Nguyen Van . I’m a UX/UI Web Designer.</p>
            </div>
          </slide>
          <slide>
            <div class="slide">
              <h3 class="sup_title">Welcom to Mr.Dat's Portfolio </h3>
              <h2 class="title">Hello World!</h2>
              <p class="sub_title">My name is Dat Nguyen Van . I’m a UX/UI Web Designer.</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div>


  </div>
</template>
<style lang="sass">
@import "../styles/variables"

.l_about
  display: flex
  position: relative
  height: 100%
  min-height: 100vh
  @media (max-width: 992px)
    padding-top: 50px

  &:before
    content: ''
    position: absolute
    right: 0
    bottom: 0
    top: 0
    left: 0
    background-color: rebeccapurple
    z-index: -10

  &:after

    position: absolute
    content: ''
    margin: auto
    top: 0
    bottom: 0
    right: 0
    left: 0
    max-height: 514px
    max-width: 587px
    height: 60%
    width: 60%
    min-height: 414px
    min-width: 487px
    border: 20px solid rgba($white, 0.25)
    @media (max-width: 992px)
      top: 50px
    @media (max-width: 660px)
      min-height: 0
      min-width: 0
      width: 80%

.color_wrapper
  position: absolute
  height: 100%
  width: 100%
  background-color: rgba($black, 0.75)
.b_square

  position: absolute
  max-width: 500px
  max-height: 514px
  top: calc(50% - 20px)
  left: calc(50% + 50px)
  transform: translate(-50%,-50%)
  z-index: 1

  @media (max-width: 800px)
    left: 50%

  .slide
    color: $white

  .VueCarousel-navigation
    font-size: 0

    button
      position: static
      display: inline-block
      transform: none
      color: $white
      &:before
        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAHVJREFUOI3t0TENgDAURdEHDmoBC2jBQi2AlWIFC8UKFi4DDfkDXeDDxB3b5CTtkyoBARhq97cqaOYovoECpB99VAMESYukvpytkiYPOBvUrVbS7I2eAdH87wb4veAC7zzx0eC5DOuGp6/wxQ02uO+QBr894A5xxs6fmStmDgAAAABJRU5ErkJggg==')
    .VueCarousel-navigation-next
      transform: rotate(180deg)
      margin-left: 37px !important




  .VueCarousel-navigation-button
    bottom: 0
  .sup_title
    margin: 0
    font-family: 'Playfair Display', sans-serif
    +fluidFontSize(21px, 25px, 992px, 1280px)
    +fluidFontSize(16px, 21px, 320px, 700px)
    font-style: italic
    font-weight: 400
  .title
    padding: 25px 0
    margin: 0
    font-family: 'Poppins', sans-serif
    +fluidFontSize(62px, 80px, 992px, 1280px)
    +fluidFontSize(40px, 55px, 320px, 700px)

  .sub_title
    margin: 0
    font-size: 30px
    +fluidFontSize(26px, 30px, 992px, 1280px)
    +fluidFontSize(18px, 25px, 320px, 700px)





</style>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import axios from 'axios';

    export default {
      data(){
        return {
          acfFields: null
        }
      },
      components: {
            Carousel,
            Slide
      },
      mounted(){
        axios.get(`${window.apiRoot.acf}/pages/7`).then((response) => {
          this.acfFields = response.data.acf
          console.log(this.acfFields)
        })
      }
    };
</script>