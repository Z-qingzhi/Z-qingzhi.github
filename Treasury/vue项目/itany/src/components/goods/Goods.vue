<template>
	<div class="goods">
		商品页
	</div>
</template>

<script>
	export default {
		created(){
			this.$store.dispatch('getGoods');
		}
	}
</script>

<style scoped>
	
</style>