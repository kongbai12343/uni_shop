<template>
	<view class="icons">
		<view class="icons-item" v-for="(item, index) in iconList" :key="index">
			<image class="icons-img" :src="item.imgUrl"></image>
			<text class="f-color" style="font-size: 26rpx;">{{ item.title }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'icons',
		props: {
			iconList: Array,
			default () {
				return [];
			}
		},
		data() {
			return {}
		}
	}
</script>

<style scoped lang="less">
	.icons {
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		.icons-item {
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 20rpx;

			.icons-img {
				width: 110rpx;
				height: 110rpx;
			}
		}
	}
</style>
