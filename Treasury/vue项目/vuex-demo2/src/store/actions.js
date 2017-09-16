//定义action，要执行的操作，如流程判断，异步请求等
import types from './types.js'
const actions = {
	incrementAsyn({commit,state}){
		//异步操作
		var p = new Promise((resolve,reject) =>{
			setTimeout(() =>{
				resolve();
			},3000);
		});
		p.then(() => {
			commit(types.INCREMENT);
		}).catch(() => {
			console.log('异步操作');
		})
	}
}

export default actions;