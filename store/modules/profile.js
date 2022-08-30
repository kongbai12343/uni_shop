const profileModule = {
	namespaced: true,
	state: {
		list: []
	},
	getters: {

	},
	mutations: {

	},
	actions: {
		profile({
			state,
			commit,
			getters
		}) {
			console.log('profile');
		}
	}
}

export default profileModule
