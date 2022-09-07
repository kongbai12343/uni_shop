<template>
	<view style="background-color: #fff;">
		<view class="goods-info" v-for="(item, index) in item " :key="index">
			<image class="info-img" :src="item.imgUrl" mode=""></image>
			<view class="info-content">
				<view class="title">{{ item.title }}</view>
				<view class="color f-color">颜色分类：{{ item.color }}</view>
				<view class="spec f-color">规格：{{ item.spec }}</view>
				<view class="f-active-color">7天无理由</view>
			</view>
			<view class="price-and-num">
				<view>{{ item.price }}</view>
				<view>x{{ item.num }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'orderList',
		components: {

		},
		props: {
			item: {
				type: Array
			}
		},
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	.goods-info {
		background-color: #f7f7f7;
		padding: 0 20rpx;
		display: flex;
		align-items: flex-start;

		.info-img {
			flex: 1;
			height: 200rpx;
		}

		.info-content {
			flex: 2;
			padding-left: 10rpx;
			margin-bottom: 30rpx;

			.title {
				font-size: 30rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}

			.color {
				font-size: 26rpx;
			}

			.spec {
				font-size: 26rpx;
			}
		}

		.price-and-num {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}
	}
</style>
