<template>
	<view class="hot">
		<Commodity :commodityList="hotList" :width="250" :height="220"></Commodity>
	</view>
</template>

<script>
	import Commodity from '@/components/common/commodity.vue'
	export default {
		name: "hot",
		components: {
			Commodity
		},
		props: {
			hotList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {

			}
		},
		onReady() {}
	}
</script>

<style scoped lang="less">
</style>
