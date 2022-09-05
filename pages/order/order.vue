<template>
	<view class="order">
		<SplitLines />
		<view class="order-status">
			<view class="status-item" v-for="(item, index) in orderStatusList" :key="index"
				@tap="getCurrentIndex(index)">
				<view class="status-name" :class="currentIndex == index ? 'action' : ''">{{ item.name }}</view>
			</view>
		</view>
		<SplitLines />

		<block v-for="(tabItem, tabI) in orderStatusList" :key="tabI">
			<view v-if="tabI === currentIndex">
				<view class="order-content" :style="{'height': clientHeight + 'px'}" v-if="tabItem.list.length > 0">
					<view v-for="(k, i) in tabItem.list" :key="i">
						<view class="goods-status">
							<view class="f-active-color">{{ k.status }}</view>
						</view>
						<view class="goods-info" v-for="(item, index) in k.goods_item " :key="index">
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
						<view class="total">
							<view>订单金额：<text class="f-active-color">{{ k.totalPrice }}</text>(含运输￥0.00)</view>
						</view>
						<view class="operation">
							<button class="payment" size="mini" plain="true">支付</button>
						</view>
					</view>

				</view>

				<!-- 无订单 -->
				<view class="no-order" :style="{'height': clientHeight + 'px'}" v-else>
					<view class="no-order-tip">
						您没有相关订单
					</view>
					<view class="operation" @tap="goHome">
						<button class="payment" size="mini" plain="true">去首页</button>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import SplitLines from '@/components/common/splitLines.vue'
	export default {
		name: 'order',
		components: {
			SplitLines
		},
		data() {
			return {
				currentIndex: 0,
				clientHeight: null,

				orderStatusList: [{
						name: '全部',
						list: [{
							status: '待付款',
							totalPrice: '￥39.00',
							goods_item: [{
								imgUrl: '../../static/img/Children1.jpg',
								title: '首都卡拉的马卡龙苏门答腊开幕典礼咖得瑟得瑟色哦的发射点',
								color: '竹炭座垫黑色',
								spec: '45*45cm',
								price: '￥39.00',
								num: 1
							}]
						}]
					},
					{
						name: '待付款',
						list: []
					},
					{
						name: '待发货',
						list: []
					},
					{
						name: '待收货',
						list: []
					},
					{
						name: '待评价',
						list: []
					}
				]
			}
		},
		onReady() {
			// 获取手机状态栏高度
			uni.getSystemInfo({
				success: data => {
					// 可滚动区域高度
					this.clientHeight = data.windowHeight - uni.upx2px(90);
				}
			})
		},
		methods: {
			getCurrentIndex(index) {
				this.currentIndex = index;
			},
			goHome() {
				uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.order {
		background-color: #f7f7f7;

		.order-status {
			background-color: #ffffff;
			height: 88rpx;
			line-height: 88rpx;
			display: flex;
			justify-content: space-around;

			.status-item {
				text-align: center;

				.action {
					border-bottom: 6rpx solid #49BDFB;
				}
			}
		}


		.order-content {
			background-color: #ffffff;

			.goods-status {
				box-sizing: border-box;
				padding: 0 20rpx;
				width: 100%;
				height: 88rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

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

			.total {
				width: 100%;
				height: 88rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				font-size: 30rpx;
				padding: 0 20rpx 0 0;
				box-sizing: border-box;
			}

			.operation {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				box-sizing: border-box;

				.payment {
					width: 160rpx;
					border-radius: 80rpx;
					color: #49BDFB;
					margin-right: 20rpx;
					box-sizing: border-box;

					&[plain] {
						border: 2rpx solid #49BDFB;
					}
				}
			}
		}

		.no-order {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.operation {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				box-sizing: border-box;

				.payment {
					margin-top: 20rpx;
					width: 220rpx;
					border-radius: 80rpx;
					color: #49BDFB;

					&[plain] {
						border: 2rpx solid #49BDFB;
					}
				}
			}
		}
	}
</style>
