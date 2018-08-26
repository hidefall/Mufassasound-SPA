<template>

	<div class="l_post">
	<div class="loading" v-if="loading">
      Загрузка...
    </div>
	<div class="b_video">
		<iframe  v-bind:src="acf.video_link" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	</div>
		<div class="l_post_info">
			<h4 class="title" >{{ ml_title }}</h4>
			<p class="sub_title" >{{ ml_sub_title }}</p>
			<p class="description" >{{ ml_description }}</p>
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
let portfolioUrl = '/portfolio/'
import axios from 'axios';
    export default {

		props: ['id'],

        data() {
            return {
                postActive: false,
				loading: false,
				acf: {},
            };
		},
		
		watch: {
			'$route': 'fetchData'
		},
		 computed: {
          ml_title() {
            return this.isEn ? this.acf.title : this.acf.title_ru
		  },
		  ml_sub_title() {
            return this.isEn ? this.acf.sub_title : this.acf.sub_title_ru
		  },
		  ml_description() {
            return this.isEn ? this.acf.description : this.acf.description_ru
          }
  			},
		methods: {
			fetchData () {
      			this.loading = true
      			// замените `getPost` используемым методом получения данных / доступа к API
     			axios.get(`${rootLink}/portfolio/${this.id}`).then((response) => {
					this.acf = response.data.acf
					this.loading = false
		
        })
    }
},
mounted(){
			this.fetchData()
		},
}
</script>