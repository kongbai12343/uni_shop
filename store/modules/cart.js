const carModule = {
	namespaced: true,
	state: {
		list: [],
		selected: []
	},
	getters: {
		isCheckedAll(state) {
			return state.list.length === state.selected.length
		},
		totalAndCount(state) {
			const totalAndCount = {
				totalPrice: 0,
				count: 0
			};
			if (state.selected.length > 0) {
				state.list.map((item, index) => {
					if (state.selected.indexOf(item.id) !== -1) {
						totalAndCount.totalPrice += item.num * item.newPrice;
					}
				});
				totalAndCount.count = state.selected.length;
			}
			return totalAndCount
		}
	},
	mutations: {
		checkedAll(state) {
			state.selected = state.list.map(item => {
				item.checked = true;
				return item.id; // 为后续做单选预留判断条件
			});
		},
		unCheckedAll(state) {
			state.list.map(item => {
				item.checked = false;
			});
			state.selected = [];
		},
		checkedOne(state, index) {
			// 拿到选中那条数据的id
			let id = state.list[index].id
			let i = state.selected.indexOf(id)
			if (i !== -1) { // 次条数据为选中，此时的操作应该取消勾选
				state.list[index].checked = false;
				state.selected.splice(i, 1);
			} else {
				state.list[index].checked = true;
				state.selected.push(id);
			}
		},
		delGoods(state) {
			state.list = state.list.filter(item => {
				return state.selected.indexOf(item.id) === -1;
			});
		},
		addShopCart(state, goods) {
			state.list.push(goods);
		}
	},
	actions: {
		checkedAll({
			state,
			commit,
			getters
		}) {
			getters.isCheckedAll ? commit("unCheckedAll") : commit("checkedAll");
		},
		checkedOne({
			commit
		}, index) {
			commit("checkedOne", index);
		},
		del({
			commit
		}) {
			commit("delGoods");
			setTimeout(() => {
				uni.showToast({
					title: "删除成功",
					icon: "success"
				})
			}, 200);
		},
		addShopCart({
			commit
		}, goods) {
			commit("addShopCart", goods);
			uni.showToast({
				title: "加入购物车成功",
				icon: 'success'
			});
		}
	}
}

export default carModule
