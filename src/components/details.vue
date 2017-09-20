<template>
<div class="details">
	<h1>{{user.name}}</h1>
</div>
	
</template>

<script >
	export default {
		data(){
			return{
				id:this.$route.params.id,
				user:{}
			}
		},
		created(){
			this.$http.get("https://admin-ecccf.firebaseio.com/posts/"+ this.id + ".json").then(function(data){
					console.log(data.body)
					this.user = data.body
			})
		}
	}
</script>

<style scoped>
    
</style>