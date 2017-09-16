import Vue from 'vue'
import App from './App.vue'

import store from './store.js'//导入store对象

new Vue({
	store:store,//配置store选项，指定为store，会自动将store注入到所有子组件中，通过this.$store访问store对象
    el: '#app',
    render: h => h(App)
})
 