function lhLb(){
	this.oParent = null;//大容器id
	this.wUl = null;//切换框的宽度
	this.sum = null;//图片总数
	this.index = 0;//按钮初始index
	this.time = null;//轮播定时器
	this.html_=null;
	this.btn_ = null;
	this.id = null; //添加字体的id
	this.settings = {//默认属性
		img:[],
		width:530,//宽
		height:300,//高
		wBt:20,//按钮宽
		hBt:20,//按钮高
		speed:500,//切换图片速度
		autoPlay:true,//是否轮播
		autoPlayTime:2000,//轮播的时间
		passBtn:true //是否显示两侧按钮	
	}
}

lhLb.prototype.init = function(oParent , opt){ 
    	this.oParent = oParent;
    	$.extend(this.settings , opt);
    	this.style();
    	this.pass();
    	this.checkBtn();
    	if(this.settings.autoPlay){
    		this.autoPlay();
    	}
    	if(!this.settings.passBtn){
    		this.passBtn();
    	}

};

lhLb.prototype.style = function(){ //设置样式
	this.wUl =  this.settings.width*(this.settings.img.length+2); //ul宽度
	this.sum =  this.settings.img.length;
	this.html_ = '';
	this.btn_ = '';
	for(var i = 0 ;i<this.sum;i++){ //渲染图片
		this.html_ += '<div class="lh_p"><img src="'+this.settings.img[i]+'" index="'+(i+1)+'"></div>'
		this.btn_ += '<span index="'+(i+1)+'"></span>'
	}
	$(this.oParent).find('.lh_picture').html('<div class="lh_p"><img src="'+this.settings.img[this.sum-1]+'" index="0"></div>'+this.html_+'<div class="lh_p"><img src="'+this.settings.img[0]+'" index="'+(this.sum+1)+'"></div>');
	$(this.oParent).find('.lh_btn').html(this.btn_);

	$(this.oParent).css({width:this.settings.width,height:this.settings.height,overflow:'hidden',position:'relative'});//设置box样式
	$(this.oParent+' .lh_picture').css({width:this.wUl,height:this.settings.height,overflow:'hidden',position:'absolute',left:-(this.settings.width)});//设置滑动框样式

	this.wbtn = this.sum * (this.settings.wBt+4);//按钮div宽度
	var positionBtn = (this.settings.width - this.wbtn)/2;
	$(this.oParent+' .lh_btn').css({width:this.wbtn,height:this.settings.hBt,position:'absolute',bottom:this.settings.wBt,left:positionBtn})//设置按钮样式
	$(this.oParent+' .lh_btn span').css({width:this.settings.wBt,height:this.settings.hBt,float:'left',marginLeft:2,marginRight:2})//设置按钮样式

	$(this.oParent).find('.lh_p').css({width:this.settings.width,height:this.settings.height,float:'left'});//设置图片样式
	$(this.oParent+' .lh_btn span').eq(0).addClass('on');

};
lhLb.prototype.pass = function(){
	var This = this;
	$(this.oParent+' .lh_next').on('click',function(){
		function index1(){
			This.index = This.index+1;
			if(This.index>=This.sum){
				This.index = 0;
			}
		}
		var pictureLeft = parseInt($(This.oParent+' .lh_picture').css('left'))-This.settings.width;
		if(pictureLeft<(-This.settings.width*This.sum)){
			if(!$(This.oParent+' .lh_picture').is(":animated")){
				index1();
				This.showBtn();
				$(This.oParent+' .lh_picture').animate({left:pictureLeft},This.settings.speed,function(){
					$(This.oParent+' .lh_picture').css({left:-(This.settings.width)});
					
				});
			}
			
		}else{
			if(!$(This.oParent+' .lh_picture').is(":animated")){ 
					$(This.oParent+' .lh_picture').animate({left:pictureLeft},This.settings.speed);
					index1();
					This.showBtn();
			  }
		}
		
		
	});

	$(this.oParent+' .lh_prev').on('click',function(){
		function index2(){
			This.index = This.index-1;
			if(This.index<0){
					This.index = This.sum-1;
			}
		}
		var pictureRight = parseInt($(This.oParent+' .lh_picture').css('left'))+This.settings.width;
		if(pictureRight>-This.settings.width){
			if(!$(This.oParent+' .lh_picture').is(":animated")){
				index2();
				This.showBtn();
				$(This.oParent+' .lh_picture').animate({left:pictureRight},This.settings.speed,function(){
					$(This.oParent+' .lh_picture').css({left:(-(This.settings.width)*This.sum)});
				});
			}
		}else{
			if(!$(This.oParent+' .lh_picture').is(":animated")){ 
					$(This.oParent+' .lh_picture').animate({left:pictureRight},This.settings.speed);
					index2();
					This.showBtn();
			  }
		}
	})
}

lhLb.prototype.showBtn = function(){
	$(this.oParent+' .lh_btn span').removeClass('on');
	$(this.oParent+' .lh_btn span').eq(this.index).addClass('on');
}
lhLb.prototype.checkBtn = function(){
	var This = this;
	$(this.oParent).find('.lh_btn').eq(0).on('click','span',function(){
		if(!$(This.oParent+' .lh_picture').is(":animated")){ 
			if(This.index != $(this).attr('index')-1){
				This.index = $(this).attr('index')-1;
				This.showBtn();
				var a = $(this).attr('index')*-This.settings.width;
				$(This.oParent+' .lh_picture').animate({left:a},This.settings.speed);
			}
		}
	})
}
lhLb.prototype.autoPlay = function(){
	var This = this;
	function play(){
		This.time = setInterval(function(){
			$(This.oParent+' .lh_next').click();
		},This.settings.autoPlayTime);
	}
	function stop(a){
		clearInterval(a.time);
	}
	play();
	$(this.oParent).on('mouseover',function(){
		stop(This);
	});
	$(this.oParent).on('mouseout',function(){
		play();
	});
}

lhLb.prototype.passBtn = function(){
	$(this.oParent+' .lh_prev,'+this.oParent+' .lh_next').css({display:'none'});
	
}

//方法：addText(插入文字对应图片位置的index,文字内容,样式)
lhLb.prototype.addText = function(index,text,style){
	var This = this;
	$(this.oParent).find('.lh_p').css({position:'relative'})
	function addStlye(a,text,style){
		This.id = ('lhLb' + Math.random()).replace('.','_');
		$(This.oParent).find('.lh_p').eq(a).append('<div class="lh_text" id="'+This.id+'">'+text+'</div>');
		$('#'+This.id).css({position:'absolute'}).css(style);
	}
	if(index==0){
		addStlye(this.sum+1,text,style);
	}
	if(index ==this.sum-1){
		addStlye(0,text,style);
	}
	addStlye(index+1,text,style)
	return this;
}