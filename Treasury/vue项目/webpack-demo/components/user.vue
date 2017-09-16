<template>
	<div class="user">
		<div v-drag id="div">用户列表</div>
		<!-- <ul>
			<li v-for="value in users">{{value}}</li>
		</ul> -->
	</div>
</template>

<script>
	export default{
		// data(){
		// 	return {
		// 		users:['tom','jack','mike','alice']
		// 	}
		// }
		// ,directive:{
		// 	drag:{
		// 		bind(el){
		// 			console.log(1)
		// 		}
		// 	}
		// }
	}
</script>

<style scoped>  /*scoped表示该样式只在当前组件中有效*/
	/*.user h2{
		color:blue;
	}*/
	*{margin:0;padding:0;}
	#div{
		width:100px;
		height:100px;
		color:red;
		background:red; 
	}
</style>  