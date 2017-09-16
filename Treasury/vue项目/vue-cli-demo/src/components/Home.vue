<template>
	<div v-focus id="home">
		<h1>这是主页</h1>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				users:['tom','jack','mike','alice']
			}
		},
		directives: {
		  focus: {
		    // 指令的定义---
		    inserted: function (el) {
		    	console.log(el)
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