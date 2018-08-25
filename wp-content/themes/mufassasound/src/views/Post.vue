<template>

	<div class="l_post">
	<div class="loading" v-if="loading">
      Загрузка...
    </div>
	<div class="b_video">
		<iframe v-if="video_link" v-bind:src="video_link" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	</div>
		<div class="l_post_info">
			<h4 class="title" v-if="title">{{ title }}</h4>
			<p class="sub_title" v-if="sub_title">{{ sub_title }}</p>
			<p class="description" v-if="description">{{ description }}</p>
		</div>
	</div>
</template>

<style lang="sass" scoped>
@import ../styles/variables
.l_posts
	overflow-y: hidden
.l_post
	position: absolute
	top: 0
	right: 0
	bottom: 0
	left: 0
	display: flex
	background-color: $white
</style>


<script>
let rootLink = window.apiRoot.acf
let portfolioUrl = '/portfolio'
import axios from 'axios';
    export default {
        data() {
            return {
                postActive: false,
				acfFields: null,
				  portfolios: null,
				  post: null,
				  video_link: null,
				  title: null,
				  sub_title: null,
				  description: null,
				  loading: false,
            };
		},
		mounted(){
			this.fetchData()
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData () {
      			this.loading = true
      			// замените `getPost` используемым методом получения данных / доступа к API
     			axios.get(`${rootLink}${portfolioUrl}`).then((response) => {
					this.loading = false
		  			this.portfolios = response.data
		  			let postId = this.$route.params.id
		  			postId -= 1
		  			this.post = this.portfolios[postId].acf
		  			this.video_link = this.post.video_link
		  			this.title = this.post.title
		  			this.sub_title = this.post.sub_title
		  			this.description = this.post.description
        })
    }
},
}
</script>