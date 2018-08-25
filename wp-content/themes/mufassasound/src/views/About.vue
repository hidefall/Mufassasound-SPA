<template>
  <div class="l_about m_l_about ">
  <div class="main_wrap">
    <div class="b_square">
            <div class="slide">
              <h3 class="sup_title m_sup_about" v-if="title">{{ title }}</h3>
              <h2 class="title m_title_about" v-if="subTitle">{{ subTitle }}</h2>
              <p class="sub_title m_sub_about" v-if="description">{{ description }}</p>
            </div>

      </div>
  </div>

      <div class="b_statistic">
          <div class="item" v-for="statistic in statistics">
            <p class="number" >{{ statistic.statistic_number }}</p>
            <p class="title" >{{ statistic.statistic_text }}</p>
          </div>
      </div>


  </div>
</template>

<style lang="sass">
@import "../styles/variables"

.m_l_about.l_about
  display: flex
  flex-direction: column
  background: $nav_bg url("../assets/about_bg.jpg") center center no-repeat
  background-size: cover
  @media (max-width: 992px)
    padding-top: 60px
  &:after
    content: none
.main_wrap
  position: relative
  height: 100%
  min-height: 400px
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
    @media (max-width: 660px)
      min-height: 0
      min-width: 0
      width: 80%
      height: 80%
.b_square
  .m_title_about
    +fluidFontSize(26px, 30px, 1280px, 1920px)
  .m_sub_about
    line-height: 26px
    width: 130%
    +fluidFontSize(13px, 14px, 320px, 1280px)

.b_statistic
  /*padding: 20px 0*/
  width: 100%
  height: auto
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  color: $white
  font-family: 'Poppins', sans-serif
  min-height: 80px
  @media (max-width: 640px)
    height: 170px
    padding-bottom: 20px
  &:after
    width: 100%
    order: 0
    @media (max-width: 640px)
      content: ''


  .item
    padding-left: 30px
    position: relative
    min-width: 143px
    @media (max-width: 1280px)
      max-width: 160px


    &:nth-child(n + 3)
      order: 1

    &:before
      content: ''
      position: absolute
      left: 0
      top: 0
      bottom: 0
      margin: auto 0
      display: block
      width: 15px
      height: 15px
      background-color: $white
      border-radius: 50%
  p
    margin: 0
    padding: 0
  .number
    +fluidFontSize(40px, 60px, 1280px, 1920px)
    font-weight: 700
  .title
    font-size: 20px
    color: rgba($white, 0.6)
    +fluidFontSize(14px, 20px, 1280px, 1920px)



</style>


<script>
let rootLink = window.apiRoot.acf
let aboutPage = '/pages/37'
    import axios from 'axios';
    export default {
      data(){
        return {
          title: null,
          subTitle: null,
          description: null,
          statistics: [],
        }
      },
      mounted(){
        axios.get(`${window.apiRoot.acf}${aboutPage}`).then((response) => {
          this.statistics = response.data.acf.statistics
          this.title = response.data.acf.about_title
          this.subTitle = response.data.acf.about_sub_title
          this.description = response.data.acf.about_description
        })
      }
    };
</script>
