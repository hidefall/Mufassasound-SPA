<template>
	<ul>
		<li v-for="post in posts">
			<p><strong>{{post.title}}</strong></p>
			<p>{{post.body}}</p>
		</li>
	</ul>

</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                posts: [],
                errors: []
            }
        },

        // Fetches posts when the component is created.
        created() {
            axios.get(`http://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })

            // async / await version (created() becomes async created())
            //
            // try {
            //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
            //   this.posts = response.data
            // } catch (e) {
            //   this.errors.push(e)
            // }
        }
    }

</script>