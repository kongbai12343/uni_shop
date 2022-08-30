<template>
	<view class="profile">
		<view class="profile-header">
			<view class="header-main">
				<view class="header-config" @tap="goConfig">
					<image class="config-img" src="../../static/img/config.png"></image>
				</view>
				<view class="header-info">
					<image class="info-img" src="../../static/img/Children1.jpg"></image>
					<view class="info-name">空白</view>
				</view>
				<view class="iconfont icon-xiaoxi"></view>
			</view>
		</view>

		<view class="order">
			<view class="order-title">
				<view>我的订单</view>
				<view>全部订单 &gt;</view>
			</view>
			<view class="order-list">
				<view class="order-list-item" v-for="(item, index) in orderList" :key="index">
					<image class="item-img" :src="item.imgUrl" mode=""></image>
					<view class="item-title">{{ item.title }}</view>
				</view>
			</view>
		</view>

		<view class="collection">
			<view class="collection-item">
				<view class="item-left">
					<image class="item-img" src="../../static/icon/收藏.png"></image>
					<view class="item-title">我的收藏</view>
				</view>
				<view class="item-right">
					<image class="right-img" src="../../static/icon/右箭头.png"></image>
				</view>
			</view>
			<view class="collection-item">
				<view class="item-left">
					<image class="item-img" src="../../static/icon/优惠券.png"></image>
					<view class="item-title">我的优惠券</view>
				</view>
				<view class="item-right">
					<image class="right-img" src="../../static/icon/右箭头.png"></image>
				</view>
			</view>
			<view class="collection-item">
				<view class="item-left">
					<image class="item-img" src="../../static/icon/我的积分.png"></image>
					<view class="item-title">我的积分</view>
				</view>
				<view class="item-right">
					<image class="right-img" src="../../static/icon/右箭头.png"></image>
				</view>
			</view>
		</view>
		<view class="vip">
			<view class="vip-left">
				<image class="vip-img" src="../../static/icon/VIP.png"></image>
				<view class="vip-title">加入超级会员</view>
			</view>
			<view class="vip-right">
				<image class="right-img" src="../../static/icon/右箭头.png"></image>
			</view>
		</view>
		<view class="shop-settled">
			<view class="shop-settled-item">
				<view class="item-left">
					<image class="item-img" src="../../static/icon/帮助.png"></image>
					<view class="item-title">帮助中心</view>
				</view>
				<view class="item-right">
					<image class="right-img" src="../../static/icon/右箭头.png"></image>
				</view>
			</view>
			<view class="shop-settled-item">
				<view class="item-left">
					<image class="item-img" src="../../static/icon/联系客服.png"></image>
					<view class="item-title">联系客服</view>
				</view>
				<view class="item-right">
					<image class="right-img" src="../../static/icon/右箭头.png"></image>
				</view>
			</view>
			<view class="shop-settled-item">
				<view class="item-left">
					<image class="item-img" src="../../static/icon/商家入驻.png"></image>
					<view class="item-title">商家入驻</view>
				</view>
				<view class="item-right">
					<image class="right-img" src="../../static/icon/右箭头.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'profile',
		components: {},
		data() {
			return {
				orderList: [{
						imgUrl: '../../static/img/order1.png',
						title: '待付款'
					},
					{
						imgUrl: '../../static/img/order2.png',
						title: '待发货'
					},
					{
						imgUrl: '../../static/img/order3.png',
						title: '待收货'
					},
					{
						imgUrl: '../../static/img/order4.png',
						title: '待评价'
					},
					{
						imgUrl: '../../static/img/order5.png',
						title: '退款处理'
					},
				]
			}
		},
		methods: {
			goConfig() {
				uni.navigateTo({
					url: "../config/config"
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.profile {
		height: 100%;
		background-color: #f0f0f0;

		.profile-header {
			background: url('../../static/img/mybg.png') no-repeat;
			width: 100%;
			height: 400rpx;

			.header-main {
				position: relative;
				// overflow: hidden;
				top: 120rpx;
				left: 0;

				.header-config {
					position: absolute;
					top: 0;
					left: 20rpx;

					.config-img {
						width: 60rpx;
						height: 60rpx;
					}
				}

				.header-info {
					position: absolute;
					top: 0;
					left: 50%;
					margin-left: -60rpx;
					width: 120rpx;

					.info-img {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
						background-color: #ffffff;
						border: 2rpx solid #CCCCCC;
					}

					.info-name {
						font-size: 32rpx;
						text-align: center;
						color: #ffffff;
					}
				}

				.iconfont {
					position: absolute;
					top: 0;
					right: 20rpx;
					font-size: 60rpx;

					&::after {
						content: "3";
						background-color: red;
						position: absolute;
						top: -10rpx;
						right: 0;
						font-size: 30rpx;
						width: 40rpx;
						height: 40rpx;
						text-align: center;
						border-radius: 20rpx;
						color: #ffffff;
					}
				}
			}
		}
	}

	.order {
		padding: 0 20rpx;
		border: 2rpx solid #fff;
		margin-bottom: 20rpx;
		background-color: #fff;

		.order-title {
			display: flex;
			height: 88rpx;
			font-size: 30rpx;
			align-items: center;
			justify-content: space-between;
		}

		.order-list {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.order-list-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.item-img {
					width: 60rpx;
					height: 60rpx;
				}

				.item-title {
					font-size: 30rpx;
				}
			}
		}
	}

	.collection {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
		border: 2rpx solid #fff;
		background-color: #fff;

		.collection-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 88rpx;
			border-bottom: 2rpx solid #f7f7f7;
		}

		.item-left {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;

			.item-img {
				width: 60rpx;
				height: 60rpx;
			}

			.item-title {
				font-size: 30rpx;
				font-weight: bold;
				line-height: 88rpx;
				padding-left: 20rpx;
				// transform: translate(0, 50%);
				// margin: -44rpx 0 0 20rpx;
			}
		}

		.item-right {
			padding-right: 20rpx;

			.right-img {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}

	.vip {
		width: 100%;
		height: 88rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
		border: 2rpx solid #fff;
		background-color: #fff;

		.vip-left {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			.vip-img {
				width: 60rpx;
				height: 60rpx;
			}

			.vip-title {
				font-size: 30rpx;
				font-weight: bold;
				line-height: 88rpx;
				padding-left: 20rpx;
				// transform: translate(0, 50%);
				// margin: -44rpx 0 0 20rpx;
			}
		}

		.vip-right {
			padding-right: 20rpx;

			.right-img {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}

	.shop-settled {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
		border: 2rpx solid #fff;
		background-color: #fff;

		.shop-settled-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 88rpx;
			border-bottom: 2rpx solid #f7f7f7;
		}

		.item-left {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;

			.item-img {
				width: 60rpx;
				height: 60rpx;
			}

			.item-title {
				font-size: 30rpx;
				font-weight: bold;
				line-height: 88rpx;
				padding-left: 20rpx;
				// transform: translate(0, 50%);
				// margin: -44rpx 0 0 20rpx;
			}
		}

		.item-right {
			padding-right: 20rpx;

			.right-img {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
</style>
