<template>
	<view>
		<splitLines />

		<view class="search-item">
			<view class="near-search">最近搜索</view>
			<view class="hot-search">热搜</view>
		</view>
	</view>
</template>

<script>
	import splitLines from '@/components/common/splitLines.vue'
	export default {
		name: 'serach',
		components: {
			splitLines
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">

</style>
