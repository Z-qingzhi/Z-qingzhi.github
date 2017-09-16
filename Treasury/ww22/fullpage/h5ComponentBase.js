/*基本图文组件对象*/
var H5ComponentBase = function (name,cfg){
	var cfg = cfg || {};
	var cls =  'h5_component_'+cfg.type + ' h5_component_name_'+name;
	var id= ('h5_c_'+Math.random()).replace('.','_');

	var component = $('<div class="h5_component '+cls+'" id="'+id+'">');

	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);
	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');

	if(cfg.center===true){
		component.css({
			marginLeft:(cfg.width/4*-1),
			left:'50%'
		});
	};
	component.on("onLoad",function(){
		component.addClass('h5_component_'+cfg.type+'_load').removeClass('h5_component_'+cfg.type+'_leave');
		cfg.animateIn && component.stop().animate(cfg.animateIn);
		return false;
	})
	component.on("onLeave",function(){
		component.addClass('h5_component_'+cfg.type+'_leave').removeClass('h5_component_'+cfg.type+'_load');
		cfg.animateOut && component.stop().animate(cfg.animateOut);
		return false;
	})
	return component;
}