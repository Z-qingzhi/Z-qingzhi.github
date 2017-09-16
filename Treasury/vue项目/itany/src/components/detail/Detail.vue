<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class="detail"  v-show="detailShow" @click="hideDetail">
		详情页
		</div>
	</transition>
</template>

<script>
	import {mapGetters} from 'vuex'
	import 'animate.css/animate.css'
	export default{
		data(){
			return {
				// showDetail:false
			}
		},
		computed:{
			...mapGetters([
				'detailShow'
			])
		},
		methods:{
			hideDetail(){
				this.$store.dispatch('hideDetail');
			}
		}
	}
</script>

<style>
	.detail{
		position:fixed;
		top:0;
		left:0;
		z-index: 666;
		width:100%;
		height:100%;
		overflow: auto;
		background-color: rgba(7,17,27,0.1)
	}
</style>