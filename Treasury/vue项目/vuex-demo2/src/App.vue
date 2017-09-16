<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementAsyn">请求增加</button>
    <p>当前数据为{{count}}</p>
    <p>{{isEvenOrOdd}}</p>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //方式一：通过this.$store访问
  // computed:{
  //   count(){
  //     return this.$store.state.count;
  //   }
  // }
  computed:mapGetters([
      'count',
      'isEvenOrOdd'
    ]),
    // computed:mapState([
    //     'count'
    //   ]),
  methods:mapActions([
      'increment',
      'decrement',
      'incrementAsyn'
    ])
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
