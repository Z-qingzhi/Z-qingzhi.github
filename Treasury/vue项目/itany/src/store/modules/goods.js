import types from '../types.js'
import axios from 'axios'

const state={

}

const getters={
	
}

const actions={
	getGoods({commit,state}){
		axios.get('/api/goods').then(resp => {
			// console.log(resp);
			console.log(resp.data.data)
			if(resp.data.errno == 0){
				commit(types.GET_SELLER,resp.data.data);

			}
			
		})
	}
}

const mutations={
	[types.GET_SELLER](state,data){
		state.seller=data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}

