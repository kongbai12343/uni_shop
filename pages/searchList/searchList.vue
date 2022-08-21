<template>
	<view>
		<ShopList :keyword='keyword'></ShopList>
	</view>
</template>

<script>
	import ShopList from '@/components/common/shopList.vue'
	export default {
		name: 'searchList',
		components: {
			ShopList
		},
		onLoad(e) {
			this.keyword = e.keyword;

			// 在App端动态修改原生导航栏（搜索关键词）
			// #ifdef APP-PLUS
			let webView = this.$mp.page.$getAppWebview();
			webView.setTitleNViewSearchInputText(e.keyword)
			// #endif
		},
		data() {
			return {
				keyword: ''
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
