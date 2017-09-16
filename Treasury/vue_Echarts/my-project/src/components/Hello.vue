<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <!-- <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
};
window.onload = function(){
    // 引入 ECharts 主模块
    var echarts = require('echarts');
    // var echarts = require('echarts/lib/echarts');
    // // 引入柱状图
    // require('echarts/lib/chart/bar');
    // require('echarts/lib/chart/line');
    // // 引入提示框和标题组件
    // require('echarts/lib/component/tooltip');
    // require('echarts/lib/component/title');


    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
     var option = {
            title: {//标题
                text: 'ECharts 入门示例'
            },
            toolbox:{//工具箱
              show:true,
              feature:{
                dataView:{//数据视图
                  show:true
                },
                restore:{//还原
                  show:true
                },
                dataZoom:{//数据缩放视图
                  show:true
                },
                saveAsImage:{//保存图片
                  show:true
                },
                magicType:{//动态类型切换
                  type:['line','bar']
                }
              }
            },
            tooltip: {//弹窗组件
              show:true,
              trigger:'axis'
            },
            legend: {//图例
                data:['销量']
            },
            xAxis: {//x轴
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
                markPoint:{
                  data:[
                    {type:'max',name:'最大值'},
                    {type:'min',name:'最小值'}
                  ]
                },
                markLine:{
                  data:[
                    {type:'average',name:'平均值'}
                  ]
                }
            },{
              name:'产量',
              type:'line',
              data:[7,30,50,11,40,80]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main{width:500px;height:500px;}
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
