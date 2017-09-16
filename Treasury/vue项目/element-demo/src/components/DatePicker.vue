<template>
	<el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期"
	  :picker-options="options">
    </el-date-picker>
</template>
<script>
  export default {
    data(){
    	return {
    		value:'',
    		options:{
    			
    		}
    	}
    }
  };
</script>