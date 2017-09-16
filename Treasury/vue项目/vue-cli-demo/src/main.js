import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import axios from 'axios'


//使用VueRouter
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);
Vue.prototype.$http = axios



new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
