<template>
	<view class="commodity-list">
		<commodity :commodityList="commodityList"></commodity>
	</view>
</template>

<script>
	import commodity from './commodity.vue'
	export default {
		name: 'commodityList',
		components: {
			commodity
		},
		props: {
			commodityList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="less">
</style>
