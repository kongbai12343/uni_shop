<template>
	<view class="categary">
		<SplitLines />
	</view>
</template>

<script>
	import SplitLines from '@/components/common/splitLines.vue'
	export default {
		name: 'categary',
		components: {
			SplitLines
		},
		data() {
			return {
				
			}
		},
		// 监听原生标题栏搜索输入框点击事件
		onNavigationBarSearchInputClicked () {
			uni.navigateTo({
				url: '../search/search'
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
