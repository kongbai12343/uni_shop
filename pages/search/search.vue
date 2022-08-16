<template>
	<view>
		<splitLines />

		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-lajitong"></view>
			</view>
			<view>
				<view class="search-name f-color">最近搜索1</view>
				<view class="search-name f-color">最近搜索2</view>
			</view>
		</view>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">热们搜索</view>
			</view>
			<view>
				<view class="search-name f-color">热们搜索1</view>
				<view class="search-name f-color">热们搜索2</view>
			</view>
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
		onNavigationBarButtonTap(e) {
			if (e.float == 'right') {
				uni.navigateTo({
					url: '../searchList/searchList'
				})
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	.search-item {
		padding: 20rpx;

		.search-title {
			display: flex;
			justify-content: space-between;
		}

		.search-name {
			display: inline-block;
			padding: 4rpx 24rpx;
			border-radius: 26rpx;
			background-color: #E1E1E1;
			margin: 10rpx;
		}
	}
</style>
