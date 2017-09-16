/*用户模块*/
import types from '../types.js'

var state = {
	count:6
}

//定义Getters
var getters = {
	count:function(state){
		return state.count;
	}
	
}

//定义action，要执行的操作，如流程判断，异步请求等
const actions = {
	increment({commit,state}){
		console.log(types.INCREMENT)
		commit(types.INCREMENT);//提交一个名为increment的变化，名称可自定义，可以认为是类型名
	},
	decrement({commit,state}){
		if(state.count>10){
			commit(types.DECREMENT);
		}
	}
}

//定义mutations，处理状态（数据）的改变
const mutations = {
	[types.INCREMENT](state){
		state.count++;
	},
	[types.DECREMENT](state){
		state.count--;
	}
}

//导出store对象

export default {
	state,
	getters,
	actions,
	mutations
};
