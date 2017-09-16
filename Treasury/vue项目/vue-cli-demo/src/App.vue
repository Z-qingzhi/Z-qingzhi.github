<template>
  <div id="app">
    {{msg}}
    <h3>
      <!-- 使用router-link组件来定义导航，to属性指定链接url -->
      <router-link to="/home" v-drag>主页</router-link>
      <router-link to="/news">新闻</router-link>
    </h3>
    <div>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
    <hr>
    <button @click="send">发送ajax请求</button>
    <MyButton @click.native="send"></MyButton>
  </div>
  
</template>

<script>
// import axios from 'axios'
import MyButton from './components/MyButton.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to weibo',
      users:{login:'defunkt'}
    }
  },
  mounted(){
    console.log(this.$route);
  },
  watch:{
    $route:function(newValue,oldValue){
      console.log('路由变化，跳转到：'+newValue.path);
    }
  },
  methods:{
    send(){
      this.$http.get('https://api.github.com/users/app').then(resp => {
        console.log(resp.data);
      }).catch(err => {
        console.log(err);
      });
    }
    // send(){
    //   axios.post('https://api.github.com/users',this.users,{
    //     transformRequest:[
    //       function(data){
    //         let params = '';
    //         for(let index in data){
    //           params += index + '=' + data[index] + '&';
    //         }
    //         return params;
    //       }
    //     ]
    //   }).then(resp => {
    //     console.log(resp.data);
    //   }).catch(err => {
    //     console.log(err);
    //   });
    // }

  },
  components:{
    MyButton
  },
  directives: {
      drag: {
        // 指令的定义---
        inserted: function (el) {
        // 聚焦元素
          var oW,oH;
          el.style.position = 'absolute'; 
          el.addEventListener("touchstart", function(e) {
          var touches = e.touches[0];
            oW = touches.clientX - el.offsetLeft;
            oH = touches.clientY - el.offsetTop;
           //阻止页面的滑动默认事件
           document.addEventListener("touchmove",defaultEvent,false);
        },false);

        el.addEventListener("touchmove", function(e) {
           var touches = e.touches[0];
           var oLeft = touches.clientX - oW;
           var oTop = touches.clientY - oH;
           if(oLeft < 0) {
            oLeft = 0;
           }else if(oLeft > document.documentElement.clientWidth - el.offsetWidth) {
            oLeft = (document.documentElement.clientWidth - el.offsetWidth);
           }
           if(oTop < 0) {
            oTop = 0;
           }else if(oTop > document.documentElement.clientHeight - el.offsetHeight) {
            oTop = (document.documentElement.clientHeight - el.offsetHeight);
           }
           el.style.left = oLeft + "px";
           el.style.top = oTop + "px";
        },false);

        el.addEventListener("touchend",function() {
           document.removeEventListener("touchmove",defaultEvent,false);
        },false);


        function defaultEvent(e) {
           e.preventDefault();
        }


      }
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
