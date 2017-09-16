<template>
  <div id="app">
    <VHeader></VHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div>
      <!-- router-view用来显示路由的内容 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue' 

export default {
  components:{
    'VHeader':Header
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .tab{
  display:flex;
  width:100%;
  height:40px;
  line-height: 40px;
  border-bottom:1px solid rgba(7,17,27,0.1);
}
.tab-item{
  flex:1;
  text-align: center;
}
.tab-item a{
  font-size:14px;
  display: block;

}
.tab-item a.active{
  color:red;
}
</style>
