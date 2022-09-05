const addressModule = {
	namespaced: true,
	state: {
		list: [{
			name: '空白',
			tel: 13000000000,
			city: '重庆市渝北区',
			detailedAddress: '大竹林街道杨柳北路9号力华科谷',
			isDefault: false
		}]
	},
	getters: {

	},
	mutations: {
		createAddress(state, obj) {
			state.list.unshift(obj);
		},
		updateAddress(state, {
			index,
			item
		}) {
			for (let k in item) {
				state.list[index][k] = item[k];
			}
		},
		clearDefault(state) {
			for (let item of state.list) {
				if (item.isDefault) {
					item.isDefault = false;
				}
			}
		}
	},
	actions: {
		createAddress({
			commit
		}, obj) {
			if (obj.isDefault) {
				commit('clearDefault');
			}
			commit('createAddress', obj);
			uni.showToast({
				title: '新增地址成功',
				icon: "none"
			});
		},
		updateAddress({
			commit
		}, obj) {
			if (obj.item.isDefault) {
				commit('clearDefault');
			}
			commit('updateAddress', obj);
			uni.showToast({
				title: '修改地址成功',
				icon: "none"
			});
		}
	}
}

export default addressModule
