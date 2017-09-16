<template>
	<div class="header">
      <div>{{seller.ID}}</div>
      <div @click="showDetail">点击</div>

     	<!-- 弹出层 -->
     	<Detail></Detail>
    </div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Detail from '../detail/Detail.vue'

	export default{
		created(){
			// this.$store.dispatch('getSeller')
		},
		computed:{
			...mapGetters([
			'seller'		
			]),
			msg(){
				return 'welcome'	
			}
		},
		components:{
			Detail
		},
		methods:{
			showDetail(){
				this.$store.dispatch('showDetail')
			}
		}
	}
</script>

<style  scoped>
	.header{
		height:40px;
		background-color:rgba(7,17,27,0.1);
		font-size: 14px;
	}
</style>