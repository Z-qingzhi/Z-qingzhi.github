var H5 = function() {
	this.id = ('h5' + Math.random()).replace('.','_');
	this.el = $('<div class="h5" id="'+ this.id +'">').hide();
	this.page = [];
	$('body').append(this.el);

	/*新增一个页*/
	/*
	@param{string} name 组件的名称、会加入到classname中
	@param{string} text 页内的默认文本
	@param{H5} H5对象,可以重复使用H5对象支持的方法
	 */
	this.addPage = function(name,text){
		var page = $('<div class="h5_page section">');
		if(name != undefined){
			page.addClass('h5_page_'+name);
		};
		if(text != undefined){
			page.text(text);
		}
		this.el.append(page);
		this.page.push(page);
		return this;
	}

	this.addComponent = function(name,cfg) {
		var cfg = cfg || {};
		cfg = $.extend({
			type:'base'
		},cfg)

		var component;
		var page = this.page.slice(-1)[0];
		switch(cfg.type){
			case 'base':
				component = new H5ComponentBase(name,cfg);
			break;
			default:
		}
		page.append(component);
		return this;
	};

	this.loader = function(){
		this.el.fullpage({
			onLeave:function(index,nextIndex,direction){
				$(this).find('.h5_component').trigger('onLeave');
			},
			afterLoad:function(anchorLink,index){
				$(this).find('.h5_component').trigger('onLoad')
			}
		});
		this.el.show();
	}
	return this;
}