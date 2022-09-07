<template>
	<view class="order-comfirm" :style="{'height': clientHeight + 'px'}">
		<SplitLines />
		<!-- 收货地址 -->
		<view class="address" @tap="slectPath">
			<template v-if="address">
				<view class="address-info">
					<view class="name">收货人：{{ address.name }}</view>
					<view class="phone">{{ address.tel }}</view>
				</view>
				<view class="f-color" style="font-size: 26rpx;">收货地址：{{ address.city }} {{ address.detailedAddress }}
				</view>
			</template>
			<template v-else>
				<button class="no-path">请选择收货地址</button>
			</template>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<orderList :item="goods_item" />
		</view>
		<!-- 底部操作 -->
		<view class="footer">
			<view style="margin-right: 20rpx;">合计：<text class="f-active-color">199.00</text></view>
			<view class="confirm">提交订单</view>
		</view>
	</view>
</template>

<script>
	import SplitLines from '@/components/common/splitLines.vue';
	import orderList from '@/components/common/orderList.vue'

	import {
		mapGetters
	} from 'vuex'
	export default {
		components: {
			SplitLines,
			orderList
		},
		data() {
			return {
				clientHeight: null,
				address: {},
				goods_item: [{
						imgUrl: '../../static/img/Children1.jpg',
						title: '首都卡拉的马卡龙苏门答腊开幕典礼咖得瑟得瑟色哦的发射点',
						color: '竹炭座垫黑色',
						spec: '45*45cm',
						price: '￥39.00',
						num: 1
					},
					{
						imgUrl: '../../static/img/Children1.jpg',
						title: '首都卡拉的马卡龙苏门答腊开幕典礼咖得瑟得瑟色哦的发射点',
						color: '竹炭座垫黑色',
						spec: '45*45cm',
						price: '￥39.00',
						num: 1
					}
				]
			}
		},
		computed: {
			...mapGetters('address', ['getDefault'])
		},
		onLoad() {
			uni.$on('selectAddress', data => {
				this.address = data;
			});
			if (this.getDefault.length > 0) {
				this.address = this.getDefault[0];
			}
		},
		onUnload() {
			uni.$off('selectAddress', res => {})
		},
		onReady() {
			uni.getSystemInfo({
				success: data => {
					// 可滚动区域高度
					// #ifdef APP-PLUS || H5 || MP-WEIXIN
					this.clientHeight = data.windowHeight;
					// #endif
				}
			})
		},
		methods: {
			slectPath() {
				uni.navigateTo({
					url: '../receivingAddress/receivingAddress?from=orderConfirm'
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.order-comfirm {
		background-color: #f7f7f7;


		.address {
			padding: 10rpx 40rpx;
			box-sizing: border-box;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: space-between;

			.address-info {
				margin-bottom: 16rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.name {
					font-size: 30rpx;
					font-weight: bold;
				}

				.phone {
					font-size: 30rpx;
				}
			}

			.no-path {
				background-color: #80daff;
				width: 320rpx;
				border-radius: 80rpx;
				font-size: 28rpx;
				color: #fff;
			}
		}

		.goods-list {
			background-color: #fff;
			margin-top: 20rpx;
			padding: 20rpx 0;
		}

		.footer {
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #fff;
			width: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 88rpx;

			.confirm {
				background-color: #80daff;
				color: #fff;
				padding: 20rpx;
			}
		}
	}
</style>
