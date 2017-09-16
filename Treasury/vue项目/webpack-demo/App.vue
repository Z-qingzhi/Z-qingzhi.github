<template>
	<div id="itany">
		<h1>welcome to itany</h1>
		<User></User>
	</div>
</template>

<script>
	//导入模块
	import User from './components/user.vue'

	export default {
		data(){
			return {
				name:'tom'
			}
		},
		methods:{
			change(){
				this.name = '汤姆';
			}
		},
		components:{
			'User':User
		}
	}
</script>

<style>
	body{
		background-color: #ccc;
	}
</style>