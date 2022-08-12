<template>
	<view class="card">
		<view>-</view>
		<slot>
			<view class="card-title">{{ cardTitle }}</view>
		</slot>
		<view>-</view>
	</view>
</template>

<script>
	export default {
		props: {
			cardTitle: {
				type: String
			}
		}
	}
</script>

<style lang="less" scoped>
	.card {
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		font-weight: bold;
		.card-title {
			font-size: 32rpx;
			padding: 0 20rpx;
		}
	}
</style>