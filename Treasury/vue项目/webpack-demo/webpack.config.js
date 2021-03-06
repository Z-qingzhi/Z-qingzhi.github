module.exports = {
	//配置入口文件
	entry:'./main.js',
	//配置入口文件输出位置
	output:{
		path:__dirname,//项目的根路径
		filename:'build.js'
	},
	//配置模块加载器
	module:{
		rules:[
			{
				test:/\.vue$/,//所有以.vue结尾的问价都有vue-loader加载
				loader:'vue-loader'
			},
			{
				test:/\.js$/,//所有以.js结尾的问价都有babel-loader加载
				loader:'babel-loader',
				exclude:/node_modules/
			}
		]
	}
}