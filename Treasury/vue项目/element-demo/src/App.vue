<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="info">主要按钮</el-button>
    <br>
    <br>
    <el-button type="success" icon="search">搜索</el-button>
    <el-button type="primary" icon="delete">删除</el-button>
    <el-button type="primary" icon="search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <br>
    <br>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <i class="el-icon-loading"></i>
    <el-button type="primary" icon="search">搜索</el-button>
    <hr>
    <el-row>
      <el-col :span="6" class="grid">1</el-col>
      <el-col :span="6" class="grid">2</el-col>
      <el-col :span="6" class="grid">3</el-col>
      <el-col :span="6" class="grid">4</el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid">1</el-col>
      <el-col :span="12" class="grid">2</el-col>
    </el-row>
    <br>
    <br>
    <DatePicker></DatePicker>


  </div>
</template>

<script>
import DatePicker from './components/DatePicker.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    DatePicker
  }
}
</script>
<!-- 必须指定lang=less -->
<style lang="less">
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
.grid{
  border:1px solid #ccc;
  font-size:20px;
  color:@color;
  .h(50px);
}
@color:red;
.h(@height){
  height:@height;
}
</style>
