<template>
	<view class="config">
		<view class="user-config">
			<view
				style="border-bottom: 2rpx solid #ccc; font-size: 26rpx; width: 100%;height: 88rpx; line-height:88rpx;">
				账号设置</view>
			<view class="user-config-edit">
				<view class="edit-info-left">
					<image class="left-img" src="../../static/img/Children1.jpg" mode=""></image>
					<view class="left-name">空白</view>
				</view>
				<view class="edit-info-right">
					<view class="right-name">编辑个人资料</view>
					<image class="right-img" src="../../static/icon/right-arrow.png"></image>
				</view>
			</view>
			<view class="user-config-item">
				<view class="item-title">修改密码</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
			<view class="user-config-item">
				<view class="item-title">绑定手机号码</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
			<view class="user-config-item" @tap="goAddress">
				<view class="item-title">地址管理</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
			<view class="user-config-item">
				<view class="item-title">使用第三方账号</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
		</view>
		<view class="system-config">
			<view
				style="border-bottom: 2rpx solid #ccc; font-size: 26rpx; width: 100%;height: 88rpx; line-height:88rpx;">
				系统设置</view>
			<view class="system-config-item">
				<view class="item-title">消息推送</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
			<view class="system-config-item">
				<view class="item-title">短信提醒</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
			<view class="system-config-item">
				<view class="item-title">图片显示</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
			<view class="system-config-item">
				<view class="item-title">清除缓存</view>
			</view>
		</view>
		<view class="support">
			<view
				style="border-bottom: 2rpx solid #ccc; font-size: 26rpx; width: 100%;height: 88rpx; line-height:88rpx;">
				支持</view>
			<view class="support-item">
				<view class="item-title">给xx好评</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
			<view class="support-item">
				<view class="item-title">意见反馈</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
			<view class="support-item">
				<view class="item-title">关于xx商城</view>
				<image class="item-img" src="../../static/icon/right-arrow.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'config',
		data() {
			return {

			}
		},
		methods: {
			goAddress() {
				uni.navigateTo({
					url: '../receivingAddress/receivingAddress'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.config {
		background-color: #f0f0f0;
		width: 100%;
		height: 100%;

		.user-config {
			box-sizing: border-box;
			padding: 0 20rpx;
			margin-bottom: 30rpx;
			background-color: #fff;
			border: 2rpx solid #f7f7f7;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			width: 100%;
			height: 100%;

			.user-config-edit {
				width: 100%;
				height: 100rpx;
				border-bottom: 2rpx solid #f7f7f7;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.edit-info-left {
					display: flex;
					align-items: center;

					.left-img {
						border-radius: 50%;
						background-color: #ffffff;
						border: 2rpx solid #CCCCCC;
						width: 80rpx;
						height: 80rpx;
					}

					.left-name {
						margin-left: 30rpx;
						font-size: 30rpx;
					}
				}

				.edit-info-right {
					display: flex;
					align-items: center;

					.right-img {
						width: 30rpx;
						height: 30rpx;
					}

					.right-name {
						font-size: 30rpx;
					}
				}
			}

			.user-config-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-direction: row;
				border-bottom: 2rpx solid #f7f7f7;
				height: 88rpx;
				width: 100%;

				.item-title {
					font-size: 30rpx;
					font-weight: bold;
				}

				.item-img {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}

		.system-config {
			box-sizing: border-box;
			padding: 0 20rpx;
			margin-bottom: 30rpx;
			background-color: #fff;
			border: 2rpx solid #f7f7f7;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			width: 100%;
			height: 100%;

			.system-config-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-direction: row;
				border-bottom: 2rpx solid #f7f7f7;
				height: 88rpx;
				width: 100%;

				.item-title {
					font-size: 30rpx;
					font-weight: bold;
				}

				.item-img {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}

		.support {
			box-sizing: border-box;
			padding: 0 20rpx;
			background-color: #fff;
			border: 2rpx solid #f7f7f7;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			width: 100%;
			height: 100%;

			.support-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-direction: row;
				border-bottom: 2rpx solid #f7f7f7;
				height: 88rpx;
				width: 100%;

				.item-title {
					font-size: 30rpx;
					font-weight: bold;
				}

				.item-img {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
</style>
