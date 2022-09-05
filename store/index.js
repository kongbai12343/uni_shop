import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart.js'
import profile from './modules/profile.js'
import address from './modules/address.js'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {

	},
	getter: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		cart,
		profile,
		address
	}
})
