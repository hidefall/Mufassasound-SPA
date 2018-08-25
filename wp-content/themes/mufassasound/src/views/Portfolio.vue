<template>

	<div class="l_portfolio">
		<header class="b_header">
			<p class="description">Portfolio All of Time</p>
			<h3 class="title">My portfolio</h3>
		</header>
		<div class="l_posts " :class="{no_scroll: route }">
		<div class="l_works">
			<router-link v-for="(portfolio, index) in portfolios" tag="a" class="b_work" v-bind:style="{ backgroundImage: 'url(' + portfolio.acf.preview_image.url + ')' }" :to="{ name: 'post', params: { id: index + 1 } }">
				<a href="#" class="view fa fa-eye"></a>
				<a href="#" class="share fa fa-link"></a>
			</router-link>

		</div>
			<router-view></router-view>
		</div>
	</div>

</template>

<style lang="sass" >
@import "../styles/variables"

.l_portfolio
	overflow: hidden
	display: flex
	flex-direction: column
	position: relative
	height: 100%
	max-height: 100vh
	background: $nav_bg url("../assets/portfolio_bg.jpg") center center no-repeat
	background-size: cover

	padding: 0 30px

	&:before
		content: ''
		position: absolute
		top: 0
		right: 0
		left: 0
		bottom: 0
		height: 100%
		width: 100%
		background-color: rgba($black, 0.75)

.b_header
	padding-top: 40px
	z-index: 1
	display: flex
	flex-direction: row
	justify-content: space-between
	flex-wrap: wrap


	.description
		font-family: "Playfair Display", sans-serif
		+fluidFontSize(20px, 25px, 1280px, 1920px)
		font-size:
		font-style: italic
		color: $white
		margin: 0
		&:before
			content: ''
			margin-right: 15px
			display: inline-block
			width: 60px
			height: 6px
			background-color: $white
	.title
		align-self: flex-end
		font-family: 'Poppins', sans-serif
		text-transform: uppercase
		+fluidFontSize(45px, 100px, 992px, 1920px)
		+fluidFontSize(34px, 45px, 320px, 450px)
		color: rgba($secondary_color, 0.1)
		margin: 0
		@media (max-width: 650px)
			display: none

.l_posts
	overflow: hidden
	overflow-y: auto
	position: relative
	&.no_scroll
		overflow-y: hidden
.l_works
	z-index: 1
	display: flex
	flex-wrap: wrap
	justify-content: flex-start

	padding-top: 5px
	max-width: 1160px
	width: 100%
	height: auto
	margin: 0 auto
	@media(max-width: 604px)
		justify-content: center

.b_work
	background:  $white center center no-repeat
	background-size: cover
	text-align: center
	display: flex
	flex-direction: row
	align-items: center
	justify-content: center
	position: relative
	margin: 15px
	width: 100%
	max-width: 333px
	height: 333px
	&:after
		content: ''
		position: absolute
		/*display: none*/
		top: 0
		bottom: 0
		right: 0
		left: 0
		background-color: transparent
		border: none
		transition: background-color .2s ease-in, border .4s ease-in
	&:hover:after
		/*display: block*/
		background-color: rgba($black, 0.7)
		border: 15px solid #727778
	&:hover .share, &:hover .view
		color: $white
		border-color: $white

	@media(max-width: 1629px)
		max-width: 300px
		max-height: 300px

	@media(max-width: 1540px)
		max-width: 260px
		max-height: 260px
	@media(max-width: 1414px)
		max-width: 230px
		max-height: 230px
	@media(max-width: 1312px)
		max-width: 200px
		max-height: 200px
	@media(max-width: 1190px)
		max-width: 180px
		max-height: 180px
	@media(max-width: 1070px)
		max-width: 250px
		max-height: 250px
	@media(max-width: 978px)
		max-width: 300px
		max-height: 300px
	@media(max-width: 802px)
		max-width: calc(50% - 30px)
		max-height: 300px
	@media(max-width: 604px)
		max-width: 290px
		max-height: 290px

	.share, .view
		font-size: 25px
		color: transparent
		display: flex
		justify-content: center
		flex-direction: column
		width: 50px
		height: 50px
		border: solid 3px transparent
		z-index: 1
		transition: color .4s ease-in, border-color .4s ease-in

	.share
		margin-left: 20px


</style>

<script>
let rootLink = window.apiRoot.acf
let portfolioUrl = '/portfolio'
import axios from 'axios';
    export default {
        data() {
            return {
                image: '<%= BASE_URL %>/assets/item01.jpg',
                postActive: false,
				acfFields: null,
          		portfolios: null,
            };
        },

        computed: {
            route: function postStyle() {

                if (this.$route.path === "/portfolio") {
                    return false
                } else  {
                    return true

                }

            }
		},
		mounted(){
        axios.get(`${rootLink}${portfolioUrl}`).then((response) => {
          this.acfFields = response.data.acf
          this.portfolios = response.data
		//   console.log(this.portfolios)
		  console.log(this.acfFields)

        })
      }
    }
</script>